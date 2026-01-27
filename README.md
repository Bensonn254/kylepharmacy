# Farpoint Healthcare - Kitengela

A modern, responsive healthcare and pharmacy website built for Farpoint Healthcare in Kitengela, Kenya. Features a beautiful UI with smooth animations, WhatsApp integration, and prescription upload functionality.

![Farpoint Healthcare](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200)

## 🌟 Features

- **📱 Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **🖼️ Dynamic Hero Carousel** - 8 high-quality images showcasing healthcare services
- **💬 WhatsApp Integration** - Direct messaging and prescription submission via WhatsApp
- **📋 Prescription Upload** - Easy prescription submission with file upload
- **🏥 Service Showcase** - Comprehensive display of healthcare services
- **❓ FAQ Section** - Interactive accordion for common questions
- **📍 Location Integration** - Google Maps integration with Plus Code
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times
- **🎯 SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 19** - Latest React with modern hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Unsplash** - High-quality stock photography

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/farpoint-healthcare-kitengela.git
   cd farpoint-healthcare-kitengela
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Import your GitHub repository
2. Vercel will auto-detect Vite settings
3. Deploy!

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## ⚙️ Configuration

### Update Contact Information

Edit the constants in `src/App.tsx`:

```typescript
const PHONE_NUMBER = "+254743052401"; 
const LOCATION_ADDRESS = "Kitengela, GX97+QFM";
const MAP_LINK = "https://www.google.com/maps/search/GX97%2BQFM+Kitengela";
const WHATSAPP_MESSAGE = "Hi Farpoint Healthcare Kitengela, I would like to make an enquiry regarding medication/services.";
```

### Customize Branding

- **Colors**: Edit Tailwind classes in components (primary: `#0B3B77`, accent: `#14B8A6`)
- **Fonts**: Google Fonts (Poppins for headings, Inter for body) loaded in `index.html`
- **Images**: Replace Unsplash URLs with your own images

## 📁 Project Structure

```
farpoint-healthcare-kitengela/
├── src/
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Application entry point
│   └── index.css         # Global styles and Tailwind config
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎨 Key Components

- **Header** - Sticky navigation with scroll effects
- **Hero** - Full-screen carousel with 8 rotating images
- **TrustSection** - Key trust indicators and badges
- **Services** - Grid of healthcare services with images
- **About** - Company mission and vision
- **PrescriptionUpload** - File upload with WhatsApp integration
- **FAQ** - Accordion-style frequently asked questions
- **Contact** - Contact information and map integration
- **Footer** - Site links and social media

## 📱 WhatsApp Integration

The site includes deep WhatsApp integration:
- Click-to-chat buttons throughout
- Prescription submission via WhatsApp
- Pre-filled message templates
- Floating WhatsApp FAB (Floating Action Button)

## 🎯 SEO Features

- Semantic HTML5 structure
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Descriptive title and meta descriptions
- Proper heading hierarchy
- Alt text for all images
- Fast loading times

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality

- TypeScript for type safety
- React best practices
- Component-based architecture
- Responsive design patterns

## 📄 License

This project is proprietary software developed for Farpoint Healthcare, Kitengela.

## 👨‍💻 Developer

Built with ❤️ for Farpoint Healthcare

---

**Contact:** +254743052401  
**Location:** Kitengela, GX97+QFM  
**Website:** [Coming Soon]
