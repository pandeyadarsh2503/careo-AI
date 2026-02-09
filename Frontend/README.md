# CareerAI - Job Portal Frontend

A modern, production-ready job portal frontend built with React, TypeScript, and AI-powered features.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Router v6** - Client-side routing
- **Zustand** - Lightweight state management
- **Axios** - HTTP client for API calls
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
job-portal/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Navbar, Footer, Sidebar
│   │   ├── jobs/         # Job-related components
│   │   └── ai/           # AI-powered components
│   ├── pages/            # Route pages
│   ├── store/            # Zustand stores
│   ├── lib/              # Utilities & API setup
│   ├── types/            # TypeScript definitions
│   ├── router.tsx        # Route configuration
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── Configuration files
```

## 🎯 Features

- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Full routing setup with React Router
- ✅ Authentication flow (Login/Register)
- ✅ Job listing with filters and search
- ✅ Sliding panels for job details
- ✅ AI-powered chat interface
- ✅ Mock interview practice
- ✅ Career advisor chatbot
- ✅ User dashboard with stats
- ✅ Smooth animations with Framer Motion
- ✅ State management with Zustand
- ✅ Ready for API integration

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Extract the ZIP file**
   ```bash
   unzip job-portal.zip
   cd job-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Key Pages

- **/** - Landing page with hero section
- **/jobs** - Job listings with filters
- **/jobs/:id** - Individual job details
- **/login** - User login
- **/register** - User registration
- **/dashboard** - User dashboard
- **/ai-interview** - AI interview practice
- **/career** - AI career advisor

## 🔌 API Integration

The project is set up for easy API integration:

1. **Axios instance** configured in `src/lib/axios.ts`
2. **Base URL** currently set to `http://localhost:8000`
3. **Auth interceptors** ready for token handling
4. Replace mock data in pages with API calls

## 🎯 Next Steps

1. Set up your backend API
2. Replace mock data with real API calls
3. Implement actual authentication
4. Add error handling and loading states
5. Configure environment variables
6. Set up CI/CD pipeline

## 🎨 Customization

### Colors
Edit `src/index.css` to customize the color scheme using CSS variables.

### Components
All components are in `src/components/` - fully customizable and well-documented.

### Routes
Add new routes in `src/router.tsx` and create corresponding page components.

## 📦 Production Build

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to deploy to any static hosting service.

## 🤝 Contributing

This is a production scaffold ready for your customization. Feel free to modify any part to fit your needs.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Built with ❤️ using modern web technologies**
