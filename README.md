# DigitalDekamond Dashboard

A authentication system built with Next.js 15, TypeScript, and Framer Motion, following clean architecture principles.

## ✨ Features

- **Clean Architecture**: Separation of concerns with proper layering
- **Type-Safe**: Full TypeScript implementation with Zod validation
- **Modern UI/UX**: Inspired by design masters (Dieter Rams, Jony Ive, Don Norman)
- **Professional Animations**: Smooth micro-interactions with Framer Motion
- **Mobile-First**: Responsive design optimized for all devices
- **SSG Optimized**: Static Site Generation for better performance and SEO
- **Dynamic Loading**: Code splitting for optimal bundle size
- **Accessibility**: WCAG compliant with proper ARIA attributes

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion
- **Validation**: Zod + React Hook Form
- **Conditional Rendering**: react-if
- **Fonts**: Montserrat + Open Sans (Google Fonts)
- **Architecture**: Clean Architecture principles

## 📁 Project Structure

\`\`\`
├── app/
│   ├── auth/                 # Authentication page (SSG)
│   ├── dashboard/            # Protected dashboard (Dynamic)
│   ├── layout.tsx           # Root layout with providers
│   └── globals.css          # Design tokens and global styles
├── components/
│   ├── auth/                # Authentication components
│   │   ├── auth-shell.tsx   # Client-side auth logic
│   │   └── auth-guard.tsx   # Route protection
│   ├── dashboard/           # Dashboard components
│   │   └── dashboard-shell.tsx
│   └── ui/                  # Reusable UI components
├── contexts/
│   └── auth-context.tsx     # Global auth state management
├── hooks/
│   └── use-auth-redirect.ts # Authentication redirects
├── lib/
│   ├── auth-service.ts      # API service layer
│   ├── validation.ts        # Zod schemas
│   ├── animation-variants.ts # Framer Motion variants
│   └── routes.ts           # Route constants
└── types/
    └── auth.ts             # TypeScript interfaces
\`\`\`

## 🛠️ Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd digital-dekamond-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### Authentication Flow

1. **Login Page** (`/auth`)
   - Enter a valid mobile number (11 digits starting with "09")
   - Real-time validation with smooth error feedback
   - Animated form interactions following Disney's 12 principles

2. **Dashboard** (`/dashboard`)
   - Protected route with automatic redirects
   - Displays user information from RandomUser API
   - Smooth page transitions and micro-interactions

### Phone Number Validation

The system validates mobile numbers with the following rules:
- Must be exactly 11 digits
- Must start with "09"
- Real-time validation with visual feedback

## 🎨 Design System

### Color Palette
- **Primary**: Cyan-800 (`#155e75`)
- **Secondary**: Emerald-600 (`#059669`)
- **Neutrals**: Gray scale with proper contrast ratios
- **Success**: Emerald variants
- **Error**: Red variants

### Typography
- **Headings**: Montserrat (600, 700 weights)
- **Body**: Open Sans (400, 500 weights)
- **Hierarchy**: Clear size progression with proper line heights

### Animation Principles
- **Easing**: Natural, physics-inspired curves
- **Duration**: 200-300ms for micro-interactions
- **Purpose**: Functional feedback, not decoration
- **Accessibility**: Respects `prefers-reduced-motion`

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality. The system uses the RandomUser API for demo purposes.

### Customization
- **Colors**: Modify `app/globals.css` design tokens
- **Fonts**: Update `app/layout.tsx` font imports
- **Animation**: Adjust `lib/animation-variants.ts`
- **Validation**: Modify schemas in `lib/validation.ts`

## 🏗️ Architecture Principles

### Clean Architecture
- **Separation of Concerns**: Clear boundaries between layers
- **Dependency Inversion**: High-level modules don't depend on low-level modules
- **Single Responsibility**: Each component has one reason to change

### Performance Optimizations
- **SSG**: Static generation for auth page
- **Dynamic Imports**: Code splitting for dashboard
- **Tree Shaking**: Optimized bundle size
- **Font Optimization**: Preloaded Google Fonts

### Accessibility
- **WCAG AA**: Minimum 4.5:1 contrast ratios
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and roles
- **Motion**: Respects user preferences

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript strict mode
- Use ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features


---
