# Score Smart IELTS Academy - Website

A modern, responsive website for Score Smart IELTS Academy built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## 🎯 Features

- ✨ **Smooth Animations** - Scroll-triggered entrance animations for all sections
- 📱 **Fully Responsive** - Desktop, tablet, and mobile optimized
- 🎨 **Modern UI** - Beautiful gradient designs and smooth transitions
- 💬 **WhatsApp Integration** - Direct messaging for inquiries
- 🔗 **SEO Optimized** - Next.js metadata configuration
- ⚡ **Fast Performance** - Optimized images and code splitting
- 📊 **Course Information** - Detailed program descriptions
- 👥 **Testimonials** - Student success stories
- 📝 **Enrollment Form** - Contact form integrated with WhatsApp

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/score-smart-website.git
cd score-smart-website/score-smart
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your WhatsApp number if needed.

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
score-smart/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── download/
│   │   │   └── page.tsx       # Download page
│   │   ├── api/
│   │   │   └── download/
│   │   │       └── route.ts   # Download API
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles & animations
│   ├── components/
│   │   ├── DownloadButton.tsx
│   │   └── sections/
│   │       ├── header.tsx
│   │       ├── hero.tsx
│   │       ├── about-coach.tsx
│   │       ├── programs.tsx
│   │       ├── features.tsx
│   │       ├── testimonials.tsx
│   │       ├── process-steps.tsx
│   │       ├── evaluation-cta.tsx
│   │       ├── enrollment-form.tsx
│   │       └── footer.tsx
│   └── hooks/
│       └── useScrollAnimation.ts
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   └── faseeha.png
├── .env.local             # Local env vars (not committed)
├── .env.example           # Example env vars (committed)
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## 🎨 Animations

All sections feature smooth scroll-triggered animations:
- **Fade In** - Smooth opacity transition
- **Slide In** - Directional entrance (up, down, left, right)
- **Scale In** - Zoom entrance effect
- **Staggered Timing** - Sequential element animations

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Run production build
npm start

# Linting
npm run lint
```

## 📦 Dependencies

- **Next.js 15.1.6** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **jszip** - File compression

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/score-smart-website.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Set root directory to `score-smart`
   - Click "Deploy"

3. **Configure Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_WHATSAPP_PHONE=923158999139`

### Deploy to Netlify

1. Build the project
```bash
npm run build
```

2. Deploy `.next` folder to Netlify, or use:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

## 📝 Environment Variables

Create a `.env.local` file:

```env
# WhatsApp Configuration (Public - safe to expose)
NEXT_PUBLIC_WHATSAPP_PHONE=923158999139

# Optional: Supabase for custom images
# NEXT_PUBLIC_SUPABASE_URL=your_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

Variables starting with `NEXT_PUBLIC_` are exposed to the browser.

## 🔧 Configuration Files

### `next.config.ts`
- Remote image patterns (Unsplash, Supabase)

### `tailwind.config.ts`
- Custom color theme
- Animation utilities
- Responsive breakpoints

### `tsconfig.json`
- TypeScript settings
- Path aliases (`@/*` → `src/*`)

## 📸 Images

- **Unsplash** - Background images (public, no auth needed)
- **Supabase** - Coach portrait and other assets

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally: `npm run dev`
4. Build test: `npm run build`
5. Push and create a Pull Request

## 📞 Contact

WhatsApp: +92 315 899 9139

## 📄 License

Private project - Contact for usage rights

## 🔐 Security Notes

- **Never commit `.env.local`** - Already in `.gitignore`
- Use `.env.example` as a template
- Vercel will set env vars in dashboard
- All `NEXT_PUBLIC_*` vars are visible in browser (don't store secrets!)

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -r .next node_modules
npm install
npm run build
```

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Animations not working?**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check console for errors

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
