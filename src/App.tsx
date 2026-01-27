
import React, { useState, useEffect } from 'react';
import { 
  Phone, Pill, MessageCircle, CheckCircle2, ClipboardList, 
  Stethoscope, Briefcase, Truck, Camera, Send, CreditCard, 
  ArrowRight, Award, ShieldCheck, HeartPulse, MapPin, Clock, 
  Mail, PhoneCall, Facebook, Instagram, Twitter, ChevronDown,
  Upload, FileText, X, Star, Activity, Droplets, UserCheck, Menu, ChevronLeft, ChevronRight,
  ExternalLink
} from 'lucide-react';

const BRAND_NAME = "Farpoint Healthcare";
const PHONE_NUMBER = "+254743052401"; 
const LOCATION_ADDRESS = "Kitengela, GX97+QFM";
const MAP_LINK = "https://www.google.com/maps/search/GX97%2BQFM+Kitengela";
const WHATSAPP_MESSAGE = "Hi Farpoint Healthcare Kitengela, I would like to make an enquiry regarding medication/services.";
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const CALL_LINK = `tel:${PHONE_NUMBER}`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Prescriptions', href: 'prescription' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <button 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group outline-none"
          >
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-[#0B3B77]' : 'bg-white'}`}>
              <Activity className={`${isScrolled ? 'text-white' : 'text-[#0B3B77]'} w-6 h-6`} />
            </div>
            <span className={`text-xl sm:text-2xl font-bold tracking-tight font-heading transition-colors ${isScrolled ? 'text-[#0B3B77]' : 'text-white'}`}>
              Farpoint
            </span>
          </button>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-lg">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#14B8A6] hover:after:w-full after:transition-all outline-none ${isScrolled ? 'text-slate-600 hover:text-[#14B8A6]' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0f9284] text-white px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg font-semibold text-sm"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a 
              href={CALL_LINK}
              className={`p-2.5 rounded-full transition-colors ${isScrolled ? 'bg-slate-100 text-[#0B3B77] hover:bg-slate-200' : 'bg-white/20 text-white hover:bg-white/30'}`}
            >
              <Phone size={20} />
            </a>
            <button 
              className={`md:hidden p-2 outline-none ${isScrolled ? 'text-slate-600' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-2 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="block w-full text-left text-lg font-medium text-slate-700 hover:text-[#14B8A6] py-2 outline-none"
            >
              {link.name}
            </button>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#14B8A6] text-white py-3 rounded-xl font-bold mt-4"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2400",
      title: "Professional Healthcare Services",
      subtitle: "Expert medical care and pharmaceutical services in Kitengela."
    },
    {
      url: "https://images.unsplash.com/photo-1631549916768-4119b295f78b?auto=format&fit=crop&q=80&w=2400",
      title: "Trusted Clinical Consultations",
      subtitle: "Private expert advice at our modern facility in Kitengela."
    },
    {
      url: "https://images.unsplash.com/photo-1587854234472-751648028bb3?auto=format&fit=crop&q=80&w=2400",
      title: "Comprehensive Pharmaceutical Care",
      subtitle: "Professional support for your family's health in Kitengela."
    },
    {
      url: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=2400",
      title: "Your Trusted Pharmacy Partner",
      subtitle: "Quality medications and wellness products for Kitengela families."
    },
    {
      url: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=2400",
      title: "Advanced Medical Technology",
      subtitle: "State-of-the-art diagnostic and pharmaceutical services."
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2400",
      title: "Expert Pharmacist Consultation",
      subtitle: "Professional medication guidance and health advice in Kitengela."
    },
    {
      url: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=2400",
      title: "Fast & Secure Delivery",
      subtitle: "Prompt medicine delivery across Kitengela and surrounding areas."
    },
    {
      url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2400",
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

  const scrollToPrescription = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('prescription');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2 relative z-20 pt-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-sm animate-fade-in-down">
            <UserCheck className="text-[#14B8A6] w-5 h-5" />
            <span className="text-white text-sm sm:text-base font-bold uppercase tracking-widest">Kitengela's Premier Clinical Care</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-[1.1] font-heading animate-fade-in-up">
            Your Health, <span className="text-[#14B8A6]">Our Priority.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed font-light animate-fade-in-up delay-150">
            {images[currentSlide].subtitle} Farpoint Healthcare offers premium pharmaceutical services and clinical wellness delivered with integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-300">
            <button 
              onClick={scrollToPrescription}
              className="flex items-center justify-center gap-3 bg-[#14B8A6] hover:bg-[#0f9284] text-white px-10 py-5 rounded-xl text-xl font-bold transition-all shadow-xl hover:shadow-[#14B8A6]/30 active:scale-[0.98] outline-none"
            >
              <MessageCircle size={26} />
              WhatsApp Orders
            </button>
            <a 
              href={CALL_LINK}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-xl font-bold transition-all border border-white/20"
            >
              <Phone size={26} />
              Talk to a Pharmacist
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 overflow-hidden backdrop-blur-sm">
                  <img src={`https://i.pravatar.cc/150?img=${i + 30}`} alt="Patient" />
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

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
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
    <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
      <div className="grid md:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-1 border-r border-slate-100 pr-8 hidden md:block">
          <h2 className="text-2xl font-bold text-[#0B3B77] font-heading">Setting New Standards in Care</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:col-span-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-[#0B3B77] rounded-xl flex items-center justify-center flex-shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Expert Staff</h4>
              <p className="text-sm text-slate-500">Board-certified clinical pharmacists.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-50 text-[#14B8A6] rounded-xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Genuine Meds</h4>
              <p className="text-sm text-slate-500">100% verified source-direct drugs.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Truck size={24} />
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
      title: "Clinical Consults", 
      desc: "Private consultations for medication reviews and chronic disease management in Kitengela.", 
      icon: Stethoscope, 
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2400" 
    },
    { 
      title: "Direct Home Delivery", 
      desc: "Secure delivery of all pharmaceutical items across Kitengela and neighboring areas.", 
      icon: Truck, 
      img: "https://images.unsplash.com/photo-1585909665970-212111575b76?auto=format&fit=crop&q=80&w=2400" 
    },
    { 
      title: "Diagnostic Checks", 
      desc: "In-center BP, BMI, and Glucose monitoring by professional medical staff.", 
      icon: Activity, 
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2400" 
    },
    { 
      title: "Wellness Products", 
      desc: "Exclusive range of verified vitamins, health supplements and skincare.", 
      icon: HeartPulse, 
      img: "https://images.unsplash.com/photo-1550572017-ed20015ade30?auto=format&fit=crop&q=80&w=2400" 
    },
    { 
      title: "Prescription Care", 
      desc: "Digital records and automated refill reminders for long-term health management.", 
      icon: ClipboardList, 
      img: "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?auto=format&fit=crop&q=80&w=2400" 
    },
    { 
      title: "Health Referrals", 
      desc: "Guidance and referrals to leading medical specialists in Kenya when needed.", 
      icon: UserCheck, 
      img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=2400" 
    }
  ];

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('prescription');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-[#0B3B77] mb-4 font-heading tracking-tight">Our Professional Services</h2>
          <p className="text-slate-500 text-xl">Advancing healthcare in Kitengela through professional integrity and personalized patient care.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  onClick={handleLearnMore}
                  className="inline-flex items-center gap-2 text-[#14B8A6] font-bold text-sm hover:translate-x-1 transition-transform outline-none"
                >
                  Learn More <ArrowRight size={16} />
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
    <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0B3B77]/5 rounded-full blur-2xl"></div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=2400" 
              alt="Medical Team 1" 
              className="rounded-3xl shadow-xl w-full h-80 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2400" 
              alt="Clinical Environment" 
              className="rounded-3xl shadow-xl w-full h-80 object-cover mt-12"
            />
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 text-center w-64">
            <h4 className="text-[#0B3B77] text-3xl font-bold font-heading mb-1">Farpoint</h4>
            <p className="text-[#14B8A6] text-xs font-bold uppercase tracking-wider">Kitengela Wellness Hub</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#0B3B77] font-heading leading-tight">Driven by <span className="text-[#14B8A6]">Patient-Centric</span> Values.</h2>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              Farpoint Healthcare was established to bridge the gap between retail pharmacy and clinical healthcare. Based in Kitengela, we provide more than just medications; we offer personalized health strategies that ensure better patient outcomes.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-[#14B8A6]/5 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#14B8A6] flex-shrink-0 group-hover:scale-110 transition-transform">
                <HeartPulse size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Our Mission</h4>
                <p className="text-slate-500 text-base">To provide accessible, high-quality pharmaceutical care that empowers Kitengela residents to lead healthier lives.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-[#0B3B77]/5 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0B3B77] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Activity size={24} />
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  return (
    <section id="prescription" className="py-16 bg-[#0B3B77] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14B8A6]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-1 sm:px-1 lg:px-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading leading-tight">Direct <span className="text-[#14B8A6]">Prescription</span> Fulfillment.</h2>
            <p className="text-blue-100 text-xl leading-relaxed">Skip the queue in Kitengela. Upload your prescription for a professional clinical review and get your medications delivered securely to your location.</p>
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
            <div className={`relative border-2 border-dashed rounded-3xl p-8 sm:p-12 transition-all duration-300 ${file ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'}`}>
              {!file ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white shadow-md text-[#14B8A6] rounded-2xl flex items-center justify-center mb-6">
                    <Camera size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 font-heading">Submit Prescription</h4>
                  <p className="text-slate-500 mb-8 text-center text-sm max-w-[250px]">Upload an image or PDF of your doctor's prescription.</p>
                  <label className="bg-[#14B8A6] text-white px-8 py-3.5 rounded-2xl font-bold cursor-pointer hover:bg-[#0f9284] transition-all shadow-lg hover:shadow-teal-100 w-full text-center">
                    Upload Document
                    <input type="file" className="hidden" accept="image/*,application/pdf" onChange={handleFileChange} />
                  </label>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 bg-white shadow-lg text-[#14B8A6] rounded-2xl flex items-center justify-center mb-4">
                    <FileText size={40} />
                    <button onClick={() => setFile(null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg border-2 border-white hover:bg-red-600">
                      <X size={14} />
                    </button>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1 truncate max-w-full px-2">{file.name}</h4>
                  <p className="text-[#14B8A6] text-sm font-semibold mb-8">Ready for review.</p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-green-200 w-full"
                  >
                    <MessageCircle size={22} />
                    Submit via WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Where exactly are you located in Kitengela?", a: "Farpoint Healthcare is located in Kitengela town center. You can find us using the Plus Code GX97+QFM. We are centrally positioned to serve the entire Kitengela community." },
    { q: "How fast is the delivery service in Kitengela?", a: "We aim for ultra-fast delivery. Within Kitengela and its immediate environs, deliveries typically take 30-60 minutes after order confirmation. We operate a dedicated dispatch team." },
    { q: "Can I consult with a professional through Farpoint?", a: "While we are a clinical pharmacy, we have a private consultation space where our clinical pharmacists provide medication reviews, wellness checks, and general health monitoring. We also provide referrals to specialists." },
    { q: "Are my medications sourced legally?", a: "Absolutely. We are fully licensed by the Pharmacy and Poisons Board of Kenya. We only source medications directly from verified manufacturers and official distributors, ensuring 100% authenticity." }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#14B8A6]/10 rounded-[2.5rem] blur-2xl opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1579165466511-70e21a47b611?auto=format&fit=crop&q=80&w=2400" 
              alt="Pharmacy Professional" 
              className="rounded-[2rem] shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#0B3B77] mb-4 font-heading">Patient Resources</h2>
              <p className="text-slate-500 text-base">Everything you need to know about our healthcare services in Kitengela.</p>
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
                    <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-50 text-base">
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

const Contact = () => (
  <section id="contact" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#0B3B77] font-heading leading-tight">Connect with <span className="text-[#14B8A6]">Farpoint Kitengela.</span></h2>
            <p className="text-xl text-slate-500 leading-relaxed">Our medical professionals are ready to assist you. Whether you have a question or need to visit our center, we are here for you in the heart of Kitengela.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0B3B77]/5 rounded-xl text-[#0B3B77] flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Address</h4>
                  <p className="text-slate-500 text-base leading-relaxed">{LOCATION_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#14B8A6]/5 rounded-xl text-[#14B8A6] flex items-center justify-center flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-500 text-base leading-relaxed">Mon - Sat: 7am - 10pm<br />Sun: 9am - 6pm</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-500 text-base leading-relaxed">{PHONE_NUMBER}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-xl text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp</h4>
                  <p className="text-slate-500 text-base leading-relaxed">Available for prompt enquiries</p>
                </div>
              </div>
            </div>
          </div>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#14B8A6] text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-teal-100 hover:scale-105 transition-all"
          >
            <MessageCircle size={24} />
            Start Chat Now
          </a>
        </div>
        <div className="h-[550px] bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-2xl border-8 border-white group">
          <img 
            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=2400" 
            alt="Pharmacy Store Front" 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-[#0B3B77]/10"></div>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="bg-white/95 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl text-center max-w-sm border border-white">
              <div className="w-16 h-16 bg-[#14B8A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                <MapPin size={32} />
              </div>
              <h4 className="font-bold text-slate-900 text-2xl mb-2 font-heading">Find Us in Kitengela</h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">Use our Plus Code <strong>GX97+QFM</strong> for precise navigation to our facility.</p>
              <a 
                href={MAP_LINK}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#0B3B77] text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#072a55] transition-colors shadow-lg"
              >
                Navigate via Maps <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
    <footer className="bg-[#0B3B77] text-white pt-16 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-lg">
                <Activity className="text-[#0B3B77] w-8 h-8" />
              </div>
              <span className="text-3xl font-bold text-white font-heading tracking-tight">Farpoint</span>
            </div>
            <p className="text-blue-100 max-w-sm leading-relaxed font-light text-xl">
              Farpoint Healthcare: Elevating standards of clinical care and pharmaceutical distribution in Kitengela. Dedicated to your lifelong wellness.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button 
                  key={i} 
                  onClick={(e) => e.preventDefault()}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#14B8A6] transition-all border border-white/10 outline-none"
                >
                  <Icon size={22} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 font-heading text-[#14B8A6]">Healthcare</h4>
            <ul className="space-y-4 text-blue-100/80">
              <li><button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#14B8A6] transition-colors outline-none">About Us</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'services')} className="hover:text-[#14B8A6] transition-colors outline-none">Medical Services</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'prescription')} className="hover:text-[#14B8A6] transition-colors outline-none">Prescriptions</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#14B8A6] transition-colors outline-none">Find Pharmacy</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 font-heading text-[#14B8A6]">Connect</h4>
            <ul className="space-y-4 text-blue-100/80">
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#14B8A6] transition-colors">WhatsApp Order</a></li>
              <li><a href={CALL_LINK} className="hover:text-[#14B8A6] transition-colors">Call Pharmacist</a></li>
              <li><button onClick={(e) => handleNavClick(e, 'faq')} className="hover:text-[#14B8A6] transition-colors outline-none">FAQs</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="hover:text-[#14B8A6] transition-colors outline-none">Health Tips</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-blue-200/40 text-xs text-center">
          <p>© {new Date().getFullYear()} Farpoint Healthcare. Kitengela, Kenya. Licensed by the Pharmacy and Poisons Board.</p>
          <div className="flex gap-8">
            <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors outline-none">Privacy Policy</button>
            <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors outline-none">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
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
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <About />
        <Services />
        <PrescriptionUpload />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp FAB */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all whatsapp-pulse"
        aria-label="Contact Farpoint Healthcare"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
