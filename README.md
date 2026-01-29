# KYLE PHARM K. LTD - Kitengela

A modern, responsive healthcare and pharmacy website built for **KYLE PHARM K. LTD** in Kitengela, Kenya. Features a beautiful UI with smooth animations, WhatsApp integration, and prescription upload functionality.

![KYLE PHARM K. LTD](public/assets/medical-team.jpg)

## 🌟 Features

- **📱 Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **💬 WhatsApp Integration** - Direct messaging and prescription submission
- **📋 Prescription Upload** - Secure file upload for prescriptions
- **🏥 Service Showcase** - Comprehensive display of pharmaceutical services
- **❓ FAQ Section** - Interactive accordion for common questions
- **📍 Location Integration** - Google Maps integration with Plus Code (GX96+33)
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kyle-pharmacy-kitengela.git
   cd kyle-pharmacy-kitengela
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:3000/kylepharmacy/`

4. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### Contact & Location
Edit the constants in `src/App.tsx`:

```typescript
const PHONE_NUMBER = "+254743052401"; 
const LOCATION_ADDRESS = "Kitengela, GX96+33";
const WHATSAPP_MESSAGE = "Hi KYLE PHARM K. LTD Kitengela, I would like to make an enquiry regarding medication/services.";
```

### Branding
- **Logo**: Located at `/public/assets/logo.png`
- **Images**: Located in `/public/assets/` folder
- **Colors**: Configured in Tailwind classes (Primary: `#0B3B77`, Accent: `#14B8A6`)

## 📁 Project Structure

```
kyle-pharmacy-kitengela/
├── public/
│   └── assets/           # Logos and images
├── src/
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration (Base URL: /kylepharmacy/)
└── tailwind.config.js    # Tailwind CSS configuration
```

## 📄 License

This project is proprietary software developed for **KYLE PHARM K. LTD**, Kitengela.

---

**Contact:** +254743052401  
**Location:** Kitengela, GX96+33  
**Built with ❤️ for KYLE PHARM K. LTD**
