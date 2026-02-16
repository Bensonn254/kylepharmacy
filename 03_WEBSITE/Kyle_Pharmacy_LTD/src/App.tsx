
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Terms from './Terms';
import Returns from './Returns';
import Cookies from './Cookies';
import PrescriptionModal from './components/PrescriptionModal';
import { 
  Phone, Pill, MessageCircle, CheckCircle2, ClipboardList, 
  Stethoscope, Briefcase, Truck, Camera, Send, CreditCard, 
  ArrowRight, Award, ShieldCheck, HeartPulse, MapPin, Clock, 
  Mail, PhoneCall, Facebook, Instagram, Twitter, ChevronDown,
  Upload, FileText, X, Star, Activity, Droplets, UserCheck, Menu, ChevronLeft, ChevronRight,
  ExternalLink
} from 'lucide-react';


const BRAND_NAME = "KYLE PHARMACY LTD.";
const PHONE_NUMBER = "+254743052401"; 
const LOCATION_ADDRESS = "Kitengela, GX96+33";
const MAP_LINK = "https://www.google.com/maps/search/GX96%2B33+Kitengela";
const WHATSAPP_MESSAGE = "Hi KYLE PHARMACY LTD. Kitengela, I would like to make an enquiry regarding medication/services.";
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const CALL_LINK = `tel:${PHONE_NUMBER}`;

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openUploadModal = () => {
    window.dispatchEvent(new CustomEvent('openPrescriptionModal'));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white/95 backdrop-blur-sm ${isScrolled ? 'shadow-lg border-b border-slate-100' : 'border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === MOBILE LAYOUT (< md / < 768px) === */}
        <div className="md:hidden">
          {/* Row 1: Logo + Badge + Hamburger */}
          <div className="flex justify-between items-center gap-2 py-3">
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center outline-none flex-shrink-0"
              aria-label="KYLE PHARMACY LTD. Home"
            >
              <img 
                src="/assets/pharmacy_logo.png" 
                alt="KYLE PHARMACY LTD" 
                className="h-10 w-auto object-contain" 
              />
            </button>

            {/* Badge */}
            <div className="flex-1 flex justify-center mx-2 min-w-0">
              <div className="flex items-center bg-orange-50 px-2 py-1 rounded-full border border-orange-100 gap-1 flex-shrink-0">
                <Truck size={14} className="text-orange-600 flex-shrink-0" />
                <div className="leading-tight text-center min-w-0">
                  <p className="text-[8px] font-bold text-orange-800 uppercase whitespace-nowrap">Free Delivery</p>
                  <p className="text-[8px] font-medium text-orange-600 whitespace-nowrap">Kitengela</p>
                </div>
              </div>
            </div>
            
            {/* Hamburger */}
            <button 
              className="p-2 bg-slate-50 text-slate-800 rounded-lg outline-none flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Row 2: Two CTA buttons */}
          <div className="grid grid-cols-2 gap-2 pb-3 pt-1">
            <a 
              href={CALL_LINK}
              className="flex items-center justify-center gap-1 bg-[#333333] hover:bg-black text-white py-2.5 px-3 rounded-full font-bold text-[12px] transition-all active:scale-95 shadow-sm flex-shrink-0 min-w-0"
            >
              <PhoneCall size={12} className="flex-shrink-0" />
              <span className="truncate">Speak to doctor</span>
            </a>
            <button 
              onClick={openUploadModal}
              className="flex items-center justify-center gap-1 bg-[#14B8A6] hover:bg-[#0f9284] text-white py-2.5 px-3 rounded-full font-bold text-[12px] transition-all active:scale-95 shadow-sm flex-shrink-0 min-w-0"
            >
              <Upload size={12} className="flex-shrink-0" />
              <span className="truncate">Upload Prescription</span>
            </button>
          </div>
        </div>

        {/* === TABLET LAYOUT (md -> xl / 768px - 1280px) === */}
        {/* Stacked layout: Row 1 (Logo/Badge/Buttons), Row 2 (Nav Links) */}
        <div className="hidden md:block xl:hidden py-4">
          <div className="flex items-center justify-between mb-4">
             {/* Left: Logo + Badge */}
             <div className="flex items-center gap-4 flex-shrink-0 min-w-0">
               <button 
                 onClick={(e) => handleNavClick(e, 'home')}
                 className="flex items-center outline-none flex-shrink-0"
               >
                 <img 
                   src="/assets/pharmacy_logo.png" 
                   alt="KYLE PHARMACY LTD" 
                   className="h-10 w-auto object-contain" 
                 />
               </button>
               <div className="flex items-center bg-orange-50 px-2 py-1 rounded-full border border-orange-100 gap-2 flex-shrink-0 max-w-[140px]">
                 <Truck size={16} className="text-orange-600 flex-shrink-0" />
                 <div className="leading-tight text-center min-w-0 overflow-hidden">
                   <p className="text-[9px] font-bold text-orange-800 uppercase truncate">Free Delivery</p>
                   <p className="text-[9px] font-medium text-orange-600 truncate">Kitengela</p>
                 </div>
               </div>
             </div>

             {/* Right: Buttons */}
             <div className="flex items-center gap-2 flex-shrink-0">
               <a 
                 href={CALL_LINK}
                 className="flex items-center gap-1.5 bg-[#333333] hover:bg-black text-white px-4 py-2 rounded-full transition-all active:scale-95 font-bold text-[13px] whitespace-nowrap"
               >
                 <PhoneCall size={16} />
                 Speak to doctor
               </a>
               <button 
                 onClick={openUploadModal}
                 className="flex items-center gap-1.5 bg-[#14B8A6] hover:bg-[#0f9284] text-white px-4 py-2 rounded-full transition-all active:scale-95 font-bold text-[13px] whitespace-nowrap"
               >
                 <Upload size={16} />
                 Upload Prescription
               </button>
             </div>
          </div>
          
          {/* Row 2: Nav Links (Centered) */}
          <nav className="flex items-center justify-center gap-6 border-t border-slate-50 pt-3">
             {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-600 hover:text-[#14B8A6] transition-colors font-medium text-[15px] uppercase outline-none whitespace-nowrap"
                >
                  {link.name}
                </button>
             ))}
          </nav>
        </div>

        {/* === DESKTOP LAYOUT (xl+ / >= 1280px) === */}
        {/* Single Row Layout */}
        <div className="hidden xl:flex items-center justify-between gap-8 py-4">
          {/* Left: Logo + Badge */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center outline-none flex-shrink-0"
              aria-label="KYLE PHARMACY LTD. Home"
            >
              <img 
                src="/assets/pharmacy_logo.png" 
                alt="KYLE PHARMACY LTD" 
                className="h-16 w-auto object-contain" 
              />
            </button>

            {/* Badge */}
            <div className="flex items-center bg-orange-50 px-4 py-2 rounded-full border border-orange-100 gap-2 flex-shrink-0">
              <Truck size={20} className="text-orange-600" />
              <div className="leading-tight">
                <p className="text-[11px] font-bold text-orange-800 uppercase">Free Delivery</p>
                <p className="text-[11px] font-medium text-orange-600">Kitengela Town</p>
              </div>
            </div>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex items-center gap-8 flex-1 justify-center min-w-0">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-[#14B8A6] transition-colors font-medium text-base uppercase outline-none whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right: CTA Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a 
              href={CALL_LINK}
              className="flex items-center gap-2 bg-[#333333] hover:bg-black text-white px-6 py-3 rounded-full transition-all active:scale-95 shadow-md font-bold text-base whitespace-nowrap"
            >
              <PhoneCall size={18} />
              Speak to doctor
            </a>
            <button 
              onClick={openUploadModal}
              className="flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0f9284] text-white px-6 py-3 rounded-full transition-all active:scale-95 shadow-md font-bold text-base border-2 border-[#14B8A6] whitespace-nowrap"
            >
              <Upload size={18} />
              Upload Prescription
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4 shadow-lg max-h-[60vh] overflow-y-auto">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="block w-full text-left text-lg font-bold text-slate-800 hover:text-[#14B8A6] py-2 outline-none transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const images = [
    {
      url: "/assets/hero_1.png",
      title: "Professional Healthcare Services",
      subtitle: "Expert medical care and pharmaceutical services in Kitengela."
    },
    {
      url: "/assets/hero_2.png",
      title: "Trusted Clinical Consultations",
      subtitle: "Private expert advice at our modern facility in Kitengela."
    },
    {
      url: "/assets/hero_3.png",
      title: "Comprehensive Pharmaceutical Care",
      subtitle: "Professional support for your family's health in Kitengela."
    },
    {
      url: "/assets/hero_4.png",
      title: "Your Trusted Pharmacy Partner",
      subtitle: "Quality medications and wellness products for Kitengela families."
    },
    {
      url: "/assets/hero_5.png",
      title: "Advanced Medical Technology",
      subtitle: "State-of-the-art diagnostic and pharmaceutical services."
    },
    {
      url: "/assets/hero_6.png",
      title: "Expert Pharmacist Consultation",
      subtitle: "Professional medication guidance and health advice in Kitengela."
    },
    {
      url: "/assets/hero_7.png",
      title: "Fast & Secure Delivery",
      subtitle: "Prompt medicine delivery across Kitengela and surrounding areas."
    },
    {
      url: "/assets/hero_8.png",
      title: "Complete Wellness Solutions",
      subtitle: "From prescriptions to preventive care, we're here for you."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative lg:min-h-[70svh] flex flex-col justify-start lg:justify-center overflow-hidden">
      {/* Carousel Background */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B77]/90 via-[#0B3B77]/60 to-transparent z-10" />
          <img 
            src={img.url} 
            alt={img.title} 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
          />
        </div>
      ))}

      {/* Content Container */}
      <div className="w-full relative z-20 pt-32 pb-10 sm:pt-40 lg:pt-48 xl:pt-56 py-10 sm:py-12 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-sm animate-fade-in-down">
              <UserCheck className="text-[#14B8A6] w-5 h-5" />
              <span className="text-white text-sm sm:text-base font-bold uppercase tracking-widest">Kitengela's Premier Clinical Care</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] font-heading animate-fade-in-up">
              Your Health, <span className="text-[#14B8A6]">Our Priority.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[58ch] leading-relaxed font-light animate-fade-in-up delay-150">
              {images[currentSlide].subtitle} KYLE PHARM K. LTD offers premium pharmaceutical services and clinical wellness delivered with integrity.
            </p>
            
            <div className="flex items-center gap-6 pt-6 sm:pt-10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 overflow-hidden backdrop-blur-sm">
                    <img src={`/assets/avatar_${i}.png`} alt="Patient" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-[#14B8A6]">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/70 font-medium">Over <span className="font-bold text-white">1,500+</span> regular patients in Kitengela</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 outline-none ${idx === currentSlide ? 'w-10 bg-[#14B8A6]' : 'w-4 bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

const TrustSection = () => (
  <section className="py-12 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-1 border-r border-slate-100 pr-8 hidden md:block">
          <h2 className="text-2xl font-bold text-[#0B3B77] font-heading">Setting New Standards in Care</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:col-span-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-[#0B3B77] rounded-xl flex items-center justify-center flex-shrink-0">
              <Award size={40} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Expert Staff</h4>
              <p className="text-sm text-slate-500">Board-certified clinical pharmacists.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-50 text-[#14B8A6] rounded-xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Genuine Meds</h4>
              <p className="text-sm text-slate-500">100% verified source-direct drugs.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Truck size={40} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Fast Delivery</h4>
              <p className="text-sm text-slate-500">Serving Kitengela and Environs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const serviceList = [
    { 
      title: "Online Consultations", 
      desc: "Private consultations for medication reviews and chronic disease management in Kitengela.", 
      icon: Stethoscope, 
      img: "/assets/service_1.png",
      whatsappMsg: "Hi KYLE PHARMACY LTD. I'm interested in booking an Online Consultation."
    },
    { 
      title: "Direct Home Delivery", 
      desc: "Secure delivery of all pharmaceutical items across Kitengela and neighboring areas.", 
      icon: Truck, 
      img: "/assets/service_2.png",
      whatsappMsg: "Hi KYLE PHARMACY LTD. I would like to inquire about Direct Home Delivery in Kitengela."
    },
    { 
      title: "Diagnostic Checks", 
      desc: "In-center BP, BMI, and Glucose monitoring by professional medical staff.", 
      icon: Activity, 
      img: "/assets/service_3.png",
      whatsappMsg: "Hi KYLE PHARMACY LTD. I'd like to schedule a Diagnostic Check (BP/Glucose)."
    },
    { 
      title: "Wellness Products", 
      desc: "Exclusive range of verified vitamins, health supplements and skincare.", 
      icon: HeartPulse, 
      img: "/assets/service_4.png",
      whatsappMsg: "Hi KYLE PHARMACY LTD. I'm looking for specific Wellness Products/Supplements."
    },
    { 
      title: "Prescription Care", 
      desc: "Digital records and automated refill reminders for long-term health management.", 
      icon: ClipboardList, 
      img: "/assets/service_5.png",
      whatsappMsg: "Hi KYLE PHARMACY LTD. I need assistance with managing my Prescriptions."
    },
    { 
      title: "Health Referrals", 
      desc: "Guidance and referrals to leading medical specialists in Kenya when needed.", 
      icon: UserCheck, 
      img: "/assets/hero_6.png",
      whatsappMsg: "Hi KYLE PHARMACY LTD. I would like a Health Referral to a specialist."
    }
  ];

  const handleInquiry = (msg: string) => {
    const url = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0B3B77] mb-4 font-heading tracking-tight">Our Professional Services</h2>
          <p className="text-slate-500 text-base sm:text-[17px] lg:text-[18px] leading-relaxed">Advancing healthcare in Kitengela through professional integrity and personalized patient care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="group overflow-hidden rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-[#14B8A6]/10 transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 z-20 bg-white p-2.5 rounded-xl shadow-md text-[#14B8A6]">
                  <service.icon size={20} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base mb-6">{service.desc}</p>
                <button 
                  onClick={() => handleInquiry(service.whatsappMsg)}
                  className="inline-flex items-center gap-2 text-[#14B8A6] font-bold text-sm hover:translate-x-1 transition-transform outline-none"
                >
                  Inquire Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0B3B77]/5 rounded-full blur-2xl"></div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/assets/hero_4.png" 
              alt="Pharmaceutical Team" 
              className="rounded-3xl shadow-xl w-full h-80 object-cover"
            />
            <img 
              src="/assets/hero_3.png" 
              alt="Clinical Environment" 
              className="rounded-3xl shadow-xl w-full h-80 object-cover mt-12"
            />
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 text-center w-64">
            <div className="flex items-center justify-center gap-2 mb-1">

              <h4 className="text-[#0B3B77] text-xl font-bold font-heading">KYLE PHARMACY LTD.</h4>
            </div>
            <p className="text-[#14B8A6] text-xs font-bold uppercase tracking-wider">Kitengela Wellness Hub</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0B3B77] font-heading leading-tight">Driven by <span className="text-[#14B8A6]">Patient-Centric</span> Values.</h2>
            <p className="text-base sm:text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-light">
              KYLE PHARMACY LTD. was established to bridge the gap between retail pharmacy and clinical healthcare. Based in Kitengela, we provide more than just medications; we offer personalized health strategies that ensure better patient outcomes.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-[#14B8A6]/5 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#14B8A6] flex-shrink-0 group-hover:scale-110 transition-transform">
                <HeartPulse size={30} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Our Mission</h4>
                <p className="text-slate-500 text-base">To provide accessible, high-quality pharmaceutical care that empowers Kitengela residents to lead healthier lives.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-[#0B3B77]/5 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0B3B77] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Activity size={30} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Our Vision</h4>
                <p className="text-slate-500 text-base">To be Kitengela's most trusted integrated healthcare provider recognized for clinical innovation and deep compassion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PrescriptionUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Customer info for email notification
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [step, setStep] = useState<'info' | 'upload'>('info');

  const handleContinueToUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerName.trim() && customerPhone.trim()) {
      setStep('upload');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Validate file
      const maxSize = 10 * 1024 * 1024; // 10MB
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

      // Import and send email notification
      import('./services/emailService').then(({ sendPrescriptionNotification }) => {
        sendPrescriptionNotification({
          customerName,
          customerPhone,
          imageUrl: result.secure_url,
          uploadedAt: uploadDate
        });
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
  };

  const resetUpload = () => {
    setFile(null);
    setUploadState('idle');
    setUploadProgress(0);
    setUploadedUrl(null);
    setErrorMessage(null);
    setStep('info');
    setCustomerName('');
    setCustomerPhone('');
  };

  return (
    <section id="prescription" className="py-16 bg-[#0B3B77] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14B8A6]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-heading leading-tight">Direct <span className="text-[#14B8A6]">Prescription</span> Fulfillment.</h2>
            <p className="text-blue-100 text-base sm:text-[17px] lg:text-[18px] leading-relaxed">Skip the queue in Kitengela. Upload your prescription for a professional clinical review and get your medications delivered securely to your location.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#14B8A6]">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-blue-100 text-base">Board-certified Pharmacist verification</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#14B8A6]">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-blue-100 text-base">Secure and confidential data handling</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#14B8A6]">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-blue-100 text-base">Same-day delivery in Kitengela</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border border-white/20">
            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
                <X size={16} />
                {errorMessage}
              </div>
            )}

            {/* Step 1: Customer Info */}
            {step === 'info' && (
              <form onSubmit={handleContinueToUpload} className="space-y-5">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-[#14B8A6]/10 text-[#14B8A6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ClipboardList size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-heading">Your Details</h4>
                  <p className="text-slate-500 text-sm">We'll use this to contact you about your prescription</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Jane Wanjiku"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 0712 345 678"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent text-slate-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#14B8A6] text-white py-3.5 rounded-xl font-bold hover:bg-[#0f9284] transition-colors flex items-center justify-center gap-2"
                >
                  Continue to Upload
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            {/* Step 2: Upload */}
            {step === 'upload' && (
              <>
                <div className={`relative border-2 border-dashed rounded-3xl p-8 sm:p-12 transition-all duration-300 ${
                  uploadState === 'success' ? 'border-[#25D366] bg-green-50' :
                  file ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 
                  'border-slate-200 bg-slate-50 hover:bg-slate-100'
                }`}>
                  
                  {/* Idle State - No file selected */}
                  {uploadState === 'idle' && !file && (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white shadow-md text-[#14B8A6] rounded-2xl flex items-center justify-center mb-6">
                        <Camera size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-heading">Upload Prescription</h4>
                      <p className="text-slate-500 mb-8 text-center text-sm max-w-[250px]">Upload an image or PDF of your doctor's prescription.</p>
                      <label className="bg-[#14B8A6] text-white px-8 py-3.5 rounded-2xl font-bold cursor-pointer hover:bg-[#0f9284] transition-all shadow-lg hover:shadow-teal-100 w-full text-center">
                        Choose File
                        <input type="file" className="hidden" accept="image/*,application/pdf" onChange={handleFileChange} />
                      </label>
                    </div>
                  )}

                  {/* File Selected - Ready to upload */}
                  {uploadState === 'idle' && file && (
                    <div className="flex flex-col items-center">
                      <div className="relative w-20 h-20 bg-white shadow-lg text-[#14B8A6] rounded-2xl flex items-center justify-center mb-4">
                        <FileText size={40} />
                        <button onClick={() => setFile(null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg border-2 border-white hover:bg-red-600">
                          <X size={14} />
                        </button>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1 truncate max-w-full px-2">{file.name}</h4>
                      <p className="text-slate-500 text-sm mb-6">{(file.size / 1024).toFixed(1)} KB</p>
                      <button 
                        onClick={handleUpload}
                        className="bg-[#14B8A6] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#0f9284] transition-all shadow-lg w-full"
                      >
                        <Upload size={20} />
                        Upload Prescription
                      </button>
                    </div>
                  )}

                  {/* Uploading State */}
                  {uploadState === 'uploading' && (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-[#14B8A6]/10 text-[#14B8A6] rounded-2xl flex items-center justify-center mb-6 animate-pulse">
                        <Upload size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4 font-heading">Uploading...</h4>
                      <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                        <div 
                          className="bg-[#14B8A6] h-3 rounded-full transition-all duration-300" 
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <p className="text-slate-500 text-sm">{uploadProgress}% complete</p>
                    </div>
                  )}

                  {/* Success State */}
                  {uploadState === 'success' && (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-heading">Upload Complete!</h4>
                      <p className="text-slate-500 mb-6 text-center text-sm">Your prescription is ready. Send it to our pharmacist via WhatsApp.</p>
                      <button 
                        onClick={handleWhatsAppSubmit}
                        className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-green-200 w-full mb-3"
                      >
                        <WhatsAppIcon size={22} />
                        Send to Pharmacist
                      </button>
                      <p className="text-xs text-slate-400 mb-3">✓ Pharmacy notified via email</p>
                      <button 
                        onClick={resetUpload}
                        className="text-slate-500 hover:text-slate-700 text-sm font-medium"
                      >
                        Upload another
                      </button>
                    </div>
                  )}

                  {/* Error State */}
                  {uploadState === 'error' && (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                        <X size={40} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-heading">Upload Failed</h4>
                      <p className="text-slate-500 mb-6 text-center text-sm">Something went wrong. Please try again.</p>
                      <button 
                        onClick={resetUpload}
                        className="bg-[#14B8A6] text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-[#0f9284] transition-all shadow-lg w-full"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>

                {/* Back button */}
                {uploadState === 'idle' && (
                  <button
                    onClick={() => setStep('info')}
                    className="w-full mt-4 text-slate-500 text-sm hover:text-slate-700 transition-colors"
                  >
                    ← Back to edit details
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Where exactly are you located in Kitengela?", a: "KYLE PHARMACY LTD. is located in Kitengela town center. You can find us using the Plus Code GX96+33. We are centrally positioned to serve the entire Kitengela community." },
    { q: "How fast is the delivery service in Kitengela?", a: "We aim for ultra-fast delivery. Within Kitengela and its immediate environs, deliveries typically take 30-60 minutes after order confirmation. We operate a dedicated dispatch team." },
    { q: "Can I consult with a professional through KYLE PHARMACY LTD.?", a: "While we are a clinical pharmacy, we have a private consultation space where our clinical pharmacists provide medication reviews, wellness checks, and general health monitoring. We also provide referrals to specialists." },
    { q: "Are my medications sourced legally?", a: "Absolutely. We are fully licensed by the Pharmacy and Poisons Board of Kenya. We only source medications directly from verified manufacturers and official distributors, ensuring 100% authenticity." }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#14B8A6]/10 rounded-[2.5rem] blur-2xl opacity-50"></div>
            <img 
              src="/assets/hero_6.png" 
              alt="Pharmacy Professional" 
              className="rounded-[2rem] shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0B3B77] mb-4 font-heading">Patient Resources</h2>
              <p className="text-slate-500 text-base sm:text-[17px] lg:text-[18px] leading-relaxed">Everything you need to know about our healthcare services in Kitengela.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors outline-none"
                  >
                    <span className="font-bold text-slate-900 pr-4 font-heading text-base">{faq.q}</span>
                    <ChevronDown className={`text-[#14B8A6] transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${activeIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-50 text-base sm:text-[17px]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B77] font-heading leading-tight">Get in <span className="text-[#14B8A6]">Touch</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">Have a question or need assistance? Our medical professionals are ready to help you. Send us a message and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Wanjiku Kamau" 
                    required 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] transition-all bg-white"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] transition-all bg-white"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+254 700 000 000" 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] transition-all bg-white"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                <textarea 
                  placeholder="Tell us what you need..." 
                  rows={4} 
                  required 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] transition-all bg-white resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-[#14B8A6] text-white py-4.5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#0f9284] transition-all shadow-xl shadow-teal-100 active:scale-[0.98] disabled:opacity-70 text-lg"
              >
                {status === 'sending' ? 'Sending Message...' : status === 'success' ? 'Message Sent Successfully!' : 'Send Message'}
                {status !== 'success' && <Send size={20} />}
                {status === 'success' && <CheckCircle2 size={20} />}
              </button>
              
              {status === 'success' && (
                <div className="p-4 bg-teal-50 border border-teal-100 rounded-xl flex items-center gap-3 animate-fade-in">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-teal-800 text-sm font-medium">
                    Thank you! Your message has been received. Our team will contact you shortly.
                  </p>
                </div>
              )}
            </form>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-[#0B3B77] rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</p>
                  <p className="font-bold text-slate-900">{PHONE_NUMBER}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 text-[#25D366] rounded-xl flex items-center justify-center">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-bold text-slate-900">Always Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-2xl border-8 border-white group">
              <img 
                src="/assets/hero_4.png" 
                alt="Pharmacy Store Front" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#0B3B77]/10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl text-center max-w-sm border border-white">
                  <div className="w-14 h-14 bg-[#14B8A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                    <MapPin size={28} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1 font-heading">Our Location</h4>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{LOCATION_ADDRESS}</p>
                  <a 
                    href={MAP_LINK}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#0B3B77] text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#072a55] transition-colors shadow-lg w-full"
                  >
                    View on Maps <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#0B3B77] p-8 rounded-[2.5rem] text-white overflow-hidden relative shadow-xl">
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#14B8A6]">Our Working Hours</h4>
                  <div className="space-y-1 text-blue-100/80">
                    <div className="flex justify-between gap-8">
                      <span>Mon - Sat:</span> 
                      <span className="font-bold text-white">7:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday:</span> 
                      <span className="font-bold text-white">9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B3B77] text-white pt-12 pb-8 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent opacity-50"></div>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-6">
            <div className="inline-block bg-white p-3 rounded-xl mb-4 shadow-sm">
              <img 
                src="/assets/pharmacy_logo.png" 
                alt="KYLE PHARMACY LTD" 
                className="h-12 md:h-16 w-auto object-contain contrast-[1.1] filter" 
              />
            </div>
            <p className="text-blue-100/60 leading-relaxed text-sm sm:text-base max-w-sm">
              KYLE PHARMACY LTD: Elevating standards of clinical care and pharmaceutical distribution in Kitengela. Dedicated to your lifelong wellness.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button 
                  key={i} 
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#14B8A6] transition-all border border-white/10 outline-none"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-base mb-6 font-heading text-[#14B8A6]">Healthcare</h4>
            <ul className="space-y-3 text-blue-100/80 text-sm sm:text-base transition-all">
              <li><button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#14B8A6] transition-colors outline-none">About Us</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'services')} className="hover:text-[#14B8A6] transition-colors outline-none">Medical Services</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'prescription')} className="hover:text-[#14B8A6] transition-colors outline-none">Prescriptions</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#14B8A6] transition-colors outline-none">Find Pharmacy</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-6 font-heading text-[#14B8A6]">Connect</h4>
            <ul className="space-y-3 text-blue-100/80 text-sm sm:text-base">
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#14B8A6] transition-colors">WhatsApp Order</a></li>
              <li><a href={CALL_LINK} className="hover:text-[#14B8A6] transition-colors">Call Pharmacist</a></li>
              <li><button onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#14B8A6] transition-colors outline-none">Contact Us</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'faq')} className="hover:text-[#14B8A6] transition-colors outline-none">FAQs</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-6 font-heading text-[#14B8A6]">Policies</h4>
            <ul className="space-y-3 text-blue-100/80 text-sm sm:text-base">
              <li><Link to="/privacy" className="hover:text-[#14B8A6] transition-colors outline-none">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#14B8A6] transition-colors outline-none">Terms of Service</Link></li>
              <li><Link to="/returns" className="hover:text-[#14B8A6] transition-colors outline-none">Return Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-[#14B8A6] transition-colors outline-none">Cookie Settings</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-6 text-blue-200/40 text-[11px] text-center">
          <p>© {new Date().getFullYear()} KYLE PHARMACY LTD. Kitengela, Kenya. Licensed by the Pharmacy and Poisons Board.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [showCookieCustomize, setShowCookieCustomize] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    const handleOpenModal = () => setShowPrescriptionModal(true);
    window.addEventListener('openPrescriptionModal', handleOpenModal);
    return () => window.removeEventListener('openPrescriptionModal', handleOpenModal);
  }, []);

  useEffect(() => {
    // Check if user has already consented to cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setShowCookieBanner(false);
      // Load saved preferences if they exist
      const savedPrefs = localStorage.getItem('cookiePreferences');
      if (savedPrefs) {
        setCookiePreferences(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const handleAcceptAllCookies = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setCookiePreferences(allAccepted);
    setShowCookieBanner(false);
    setShowCookieCustomize(false);
  };

  const handleRejectAllCookies = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
    setCookiePreferences(essentialOnly);
    setShowCookieBanner(false);
    setShowCookieCustomize(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowCookieBanner(false);
    setShowCookieCustomize(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen">
            <style>{`
              @keyframes slow-zoom {
                from { transform: scale(1); }
                to { transform: scale(1.1); }
              }
              .animate-slow-zoom {
                animation: slow-zoom 10s linear infinite alternate;
              }
              @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes fade-in-down {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
              }
              .animate-fade-in-down {
                animation: fade-in-down 0.6s ease-out forwards;
              }
              .delay-150 { animation-delay: 150ms; }
              .delay-300 { animation-delay: 300ms; }
              .whatsapp-pulse {
                animation: pulse 2s infinite;
              }
              @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
            `}</style>
            <Header />
            <Hero />
            <TrustSection />
            <Services />
            <About />
            <PrescriptionUpload />
            <FAQ />
            <Contact />
            <Footer />
            
            {/* Floating WhatsApp FAB - Icon only on mobile, pill on desktop */}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99] transition-all duration-300 active:scale-95"
              aria-label="Contact via WhatsApp"
            >
              {/* Desktop: Pill button */}
              <div className="hidden md:flex items-center gap-3 bg-[#6BC049] text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(107,192,73,0.3)] hover:bg-[#5db03c] hover:scale-105 transition-all">
                <span className="font-bold text-base tracking-tight whitespace-nowrap">Need Help?</span>
                <div className="bg-black/10 rounded-full p-1 hover:bg-black/20 transition-colors">
                  <WhatsAppIcon size={24} />
                </div>
              </div>

              {/* Mobile: Icon-only circular button (56px) */}
              <div className="flex md:hidden items-center justify-center w-14 h-14 bg-[#6BC049] rounded-full shadow-[0_10px_30px_rgba(107,192,73,0.3)] hover:bg-[#5db03c] hover:scale-110 transition-all">
                <WhatsAppIcon size={28} className="text-white" />
              </div>
            </a>
            
            {/* Cookie Consent Banner - Modern design matching site theme */}
            {showCookieBanner && (
              <div className="fixed bottom-6 left-6 right-6 md:bottom-8 md:left-auto md:right-8 md:max-w-md z-[9999] animate-fade-in-up">
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                  {!showCookieCustomize ? (
                    /* Main Cookie Banner */
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-bold text-slate-900">We value your privacy</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        We use cookies to enhance your browsing experience and personalize content. By clicking "Accept All", you agree to our cookie use.{' '}
                        <Link to="/cookies" className="text-[#14B8A6] underline font-medium hover:text-[#0f9284]">Privacy Policy</Link>
                      </p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <button 
                          onClick={() => setShowCookieCustomize(true)}
                          className="px-5 py-2.5 text-slate-600 font-semibold text-sm hover:text-slate-900 transition-colors"
                        >
                          Customize
                        </button>
                        <button
                          onClick={handleRejectAllCookies}
                          className="px-5 py-2.5 text-slate-600 font-semibold text-sm hover:text-slate-900 transition-colors"
                        >
                          Reject All
                        </button>
                        <button
                          onClick={handleAcceptAllCookies}
                          className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
                        >
                          Accept All
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Cookie Customization Panel */
                    <div className="p-6 space-y-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-900">Cookie Preferences</h3>
                        <button 
                          onClick={() => setShowCookieCustomize(false)}
                          className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      
                      <p className="text-slate-500 text-sm">
                        Manage your cookie preferences. Essential cookies cannot be disabled as they are required for the website to function.
                      </p>

                      {/* Cookie Toggle Options */}
                      <div className="space-y-4">
                        {/* Essential Cookies - Always On */}
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="flex-1 pr-4">
                            <h4 className="font-semibold text-slate-900 text-sm">Essential Cookies</h4>
                            <p className="text-slate-500 text-xs mt-0.5">Required for basic site functionality</p>
                          </div>
                          <div className="relative">
                            <div className="w-11 h-6 bg-[#14B8A6] rounded-full cursor-not-allowed opacity-70">
                              <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                            </div>
                          </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                          <div className="flex-1 pr-4">
                            <h4 className="font-semibold text-slate-900 text-sm">Analytics Cookies</h4>
                            <p className="text-slate-500 text-xs mt-0.5">Help us understand how visitors use our site</p>
                          </div>
                          <button 
                            onClick={() => setCookiePreferences(prev => ({...prev, analytics: !prev.analytics}))}
                            className="relative"
                          >
                            <div className={`w-11 h-6 rounded-full transition-colors ${cookiePreferences.analytics ? 'bg-[#14B8A6]' : 'bg-slate-300'}`}>
                              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all ${cookiePreferences.analytics ? 'right-0.5' : 'left-0.5'}`}></div>
                            </div>
                          </button>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                          <div className="flex-1 pr-4">
                            <h4 className="font-semibold text-slate-900 text-sm">Marketing Cookies</h4>
                            <p className="text-slate-500 text-xs mt-0.5">Used to personalize ads and content</p>
                          </div>
                          <button 
                            onClick={() => setCookiePreferences(prev => ({...prev, marketing: !prev.marketing}))}
                            className="relative"
                          >
                            <div className={`w-11 h-6 rounded-full transition-colors ${cookiePreferences.marketing ? 'bg-[#14B8A6]' : 'bg-slate-300'}`}>
                              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all ${cookiePreferences.marketing ? 'right-0.5' : 'left-0.5'}`}></div>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => setShowCookieCustomize(false)}
                          className="flex-1 px-5 py-2.5 text-slate-600 font-semibold text-sm hover:text-slate-900 transition-colors border border-slate-200 rounded-full"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSavePreferences}
                          className="flex-1 px-6 py-2.5 bg-[#14B8A6] text-white rounded-full font-bold text-sm hover:bg-[#0f9284] transition-colors shadow-md"
                        >
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        } />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      
      {/* Prescription Upload Modal */}
      <PrescriptionModal 
        isOpen={showPrescriptionModal} 
        onClose={() => setShowPrescriptionModal(false)} 
      />
    </Router>
  );
};

export default App;
