import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-serif selection:bg-slate-100 selection:text-slate-900">
      {/* Back Button */}
      <div className="max-w-[800px] mx-auto px-6 py-8 md:px-10 lg:px-12">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
      </div>

      {/* Main Content */}
      <main className="max-w-[800px] mx-auto px-6 pb-20 md:px-10 lg:px-12">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-tight leading-tight uppercase font-sans">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-sm text-slate-400 font-sans tracking-wide">
              Last Updated: {lastUpdated}
            </p>
          )}
        </header>

        <div 
          className="text-[#333333] space-y-6"
          style={{ lineHeight: '1.6', fontSize: '1.125rem' }}
        >
          {/* We style direct children carefully */}
          <style>{`
            .legal-content h2 { 
              color: #1a1a1a; 
              font-weight: 700; 
              font-size: 1.5rem; 
              margin-top: 2.5rem; 
              margin-bottom: 1rem;
              font-family: 'Poppins', sans-serif;
              border-bottom: 1px solid #f1f5f9;
              padding-bottom: 0.5rem;
            }
            .legal-content p { margin-bottom: 1.25rem; }
            .legal-content ul, .legal-content ol { 
              margin-bottom: 1.25rem; 
              padding-left: 1.5rem; 
            }
            .legal-content li { margin-bottom: 0.5rem; list-style-type: disc; }
            .legal-content ol li { list-style-type: decimal; }
            .legal-content strong { color: #1a1a1a; font-weight: 700; }
            .legal-content a { color: #000; text-decoration: underline; text-underline-offset: 4px; }
          `}</style>
          <div className="legal-content">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[800px] mx-auto px-6 py-12 border-t border-slate-100 text-center font-sans">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} KYLE PHARM K. LTD. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LegalLayout;
