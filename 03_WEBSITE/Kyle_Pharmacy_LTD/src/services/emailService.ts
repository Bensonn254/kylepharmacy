// Email notification service using EmailJS
// Free tier: 200 emails/month - plenty for a pharmacy
// Setup: https://www.emailjs.com/

import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface PrescriptionEmailData {
  customerName: string;
  customerPhone: string;
  imageUrl: string;
  uploadedAt: string;
}

/**
 * Send email notification to pharmacy when a prescription is uploaded
 */
export const sendPrescriptionNotification = async (data: PrescriptionEmailData): Promise<boolean> => {
  try {
    // Check if EmailJS is configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('EmailJS not configured. Skipping email notification.');
      return false;
    }

    const templateParams = {
      to_email: import.meta.env.VITE_PHARMACY_EMAIL || 'info@kylepharmacy.co.ke',
      customer_name: data.customerName,
      customer_phone: data.customerPhone,
      prescription_url: data.imageUrl,
      upload_date: data.uploadedAt,
      subject: `New Prescription from ${data.customerName}`,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('Email sent successfully:', response.status);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
};

/**
 * Initialize EmailJS (call once at app startup)
 */
export const initEmailJS = () => {
  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
  }
};
