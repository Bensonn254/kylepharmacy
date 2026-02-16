import React, { useState, useEffect } from 'react';
import { X, Camera, FileText, Upload, CheckCircle2, User, Phone } from 'lucide-react';
import { sendPrescriptionNotification } from '../services/emailService';

const PHONE_NUMBER = "+254743052401";

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrescriptionModal: React.FC<PrescriptionModalProps> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Customer info for Firebase and email
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [step, setStep] = useState<'info' | 'upload'>('info');

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFile(null);
      setUploadState('idle');
      setUploadProgress(0);
      setUploadedUrl(null);
      setErrorMessage(null);
      setCustomerName('');
      setCustomerPhone('');
      setStep('info');
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleContinueToUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerName.trim() && customerPhone.trim()) {
      setStep('upload');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      const maxSize = 10 * 1024 * 1024;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'application/pdf'];
      
      if (!allowedTypes.includes(selectedFile.type)) {
        setErrorMessage('Please upload an image (JPEG, PNG, WebP) or PDF file.');
        return;
      }
      
      if (selectedFile.size > maxSize) {
        setErrorMessage('File size must be less than 10MB.');
        return;
      }
      
      setFile(selectedFile);
      setErrorMessage(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploadState('uploading');
    setUploadProgress(0);
    setErrorMessage(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'prescriptions');

    try {
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(percent);
        }
      });

      const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error('Upload failed'));
          }
        });
        xhr.addEventListener('error', () => reject(new Error('Network error')));
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`);
        xhr.send(formData);
      });

      setUploadedUrl(result.secure_url);
      setUploadState('success');

      // Send email notification to pharmacy
      const uploadDate = new Date().toLocaleString('en-KE', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      // Send email notification (non-blocking)
      sendPrescriptionNotification({
        customerName,
        customerPhone,
        imageUrl: result.secure_url,
        uploadedAt: uploadDate
      });

    } catch {
      setUploadState('error');
      setErrorMessage('Upload failed. Please try again.');
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!uploadedUrl) return;
    
    const message = encodeURIComponent(
      `Hi KYLE PHARMACY LTD,\n\nI'd like to submit my prescription for review.\n\n👤 Name: ${customerName}\n📞 Phone: ${customerPhone}\n📋 Prescription: ${uploadedUrl}\n\nPlease confirm once reviewed. Thank you!`
    );
    
    window.open(`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${message}`, '_blank');
    onClose();
  };

  const resetUpload = () => {
    setFile(null);
    setUploadState('idle');
    setUploadProgress(0);
    setUploadedUrl(null);
    setErrorMessage(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-[#0B3B77] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
          <h2 className="text-xl font-bold font-heading">Upload Prescription</h2>
          <p className="text-blue-100 text-sm mt-1">
            {step === 'info' ? 'Step 1: Your details' : 'Step 2: Upload prescription'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
              <X size={16} />
              {errorMessage}
            </div>
          )}

          {/* Step 1: Customer Info */}
          {step === 'info' && (
            <form onSubmit={handleContinueToUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <User size={14} className="inline mr-1" />
                  Your Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Jane Wanjiku"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Phone size={14} className="inline mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="e.g. 0712 345 678"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#14B8A6] text-white py-3 rounded-xl font-bold hover:bg-[#0f9284] transition-colors"
              >
                Continue to Upload
              </button>
            </form>
          )}

          {/* Step 2: Upload */}
          {step === 'upload' && (
            <div className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-300 ${
              uploadState === 'success' ? 'border-[#25D366] bg-green-50' :
              file ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 
              'border-slate-200 bg-slate-50 hover:bg-slate-100'
            }`}>
              
              {/* Idle - No file */}
              {uploadState === 'idle' && !file && (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white shadow-md text-[#14B8A6] rounded-2xl flex items-center justify-center mb-4">
                    <Camera size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Select File</h4>
                  <p className="text-slate-500 mb-6 text-center text-sm">Image or PDF of your prescription</p>
                  <label className="bg-[#14B8A6] text-white px-6 py-3 rounded-xl font-bold cursor-pointer hover:bg-[#0f9284] transition-all w-full text-center">
                    Choose File
                    <input type="file" className="hidden" accept="image/*,application/pdf" onChange={handleFileChange} />
                  </label>
                </div>
              )}

              {/* File selected */}
              {uploadState === 'idle' && file && (
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 bg-white shadow-lg text-[#14B8A6] rounded-2xl flex items-center justify-center mb-4">
                    <FileText size={32} />
                    <button onClick={resetUpload} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg">
                      <X size={12} />
                    </button>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 truncate max-w-full">{file.name}</h4>
                  <p className="text-slate-500 text-xs mb-4">{(file.size / 1024).toFixed(1)} KB</p>
                  <button 
                    onClick={handleUpload}
                    className="bg-[#14B8A6] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0f9284] transition-all w-full"
                  >
                    <Upload size={18} />
                    Upload
                  </button>
                </div>
              )}

              {/* Uploading */}
              {uploadState === 'uploading' && (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#14B8A6]/10 text-[#14B8A6] rounded-2xl flex items-center justify-center mb-4 animate-pulse">
                    <Upload size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Uploading...</h4>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
                    <div 
                      className="bg-[#14B8A6] h-2.5 rounded-full transition-all duration-300" 
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p className="text-slate-500 text-sm">{uploadProgress}%</p>
                </div>
              )}

              {/* Success */}
              {uploadState === 'success' && (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Upload Complete!</h4>
                  <p className="text-slate-500 mb-4 text-center text-sm">Send to our pharmacist via WhatsApp</p>
                  <button 
                    onClick={handleWhatsAppSubmit}
                    className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all w-full"
                  >
                    <WhatsAppIcon size={20} />
                    Send via WhatsApp
                  </button>
                  <p className="text-xs text-slate-400 mt-3 text-center">
                    ✓ Prescription saved • ✓ Pharmacy notified
                  </p>
                </div>
              )}

              {/* Error */}
              {uploadState === 'error' && (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-4">
                    <X size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Failed</h4>
                  <button 
                    onClick={resetUpload}
                    className="bg-[#14B8A6] text-white px-6 py-3 rounded-xl font-bold w-full"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Back button for step 2 */}
          {step === 'upload' && uploadState === 'idle' && (
            <button
              onClick={() => setStep('info')}
              className="w-full mt-3 text-slate-500 text-sm hover:text-slate-700 transition-colors"
            >
              ← Back to edit details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrescriptionModal;
