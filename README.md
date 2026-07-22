# 💊 Pharma Dashboard

> Professional pharmacy and pharmaceutical management system

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## ✨ Features

- 📊 **Real-time Dashboard** - Drug inventory, sales, and metrics overview
- 💊 **Inventory Management** - Track drugs, stock levels, expiry dates
- 📋 **Prescription Tracking** - Manage prescriptions and patient records
- 💰 **Sales Tracking** - Record transactions and generate revenue reports
- 🏢 **Supplier Management** - Manage suppliers and purchase orders
- 📈 **Advanced Analytics** - Charts and insights for data-driven decisions
- 🔐 **Type-Safe** - Full TypeScript support
- 🎭 **Dark Mode** - Light and dark theme support
- ♿ **Accessible** - WCAG compliant components
- 🚀 **Production Ready** - Optimized and deployed easily

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **bun** package manager

### Installation

```bash
# Clone repository
git clone https://github.com/Mostafa-SAID7/Pharma-dash
cd Pharma-dash

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser at `http://localhost:5173` 🎉

## 📦 Available Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🏗️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 18 + TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Components** | shadcn/ui + Radix UI |
| **State** | React Query + React Hook Form |
| **Routing** | React Router 6 |
| **Charts** | Recharts 2 |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |

## 📁 Project Structure

```
Pharma-dash/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilities
│   ├── data/            # Static data
│   └── App.tsx          # Main component
├── public/              # Static assets
├── docs/                # Documentation
└── index.html           # Entry point
```

## 📚 Documentation

Complete documentation available in the `docs/` folder:

- **[Getting Started](./docs/01-GETTING-STARTED.md)** - Setup and installation
- **[Tech Stack](./docs/02-TECH-STACK.md)** - Technology details
- **[Project Structure](./docs/03-PROJECT-STRUCTURE.md)** - Directory layout
- **[Development](./docs/04-DEVELOPMENT.md)** - Development guide
- **[Deployment](./docs/05-DEPLOYMENT.md)** - Deployment guide

## 🎯 Core Features

### Dashboard
- Drug inventory overview
- Sales metrics
- Stock alerts
- Revenue tracking
- Prescription statistics

### Inventory Management
- Track drug stock levels
- Monitor expiry dates
- Batch management
- Low stock alerts
- Cost tracking

### Prescription Management
- Record prescriptions
- Patient information
- Dosage tracking
- Drug interaction warnings
- Prescription history

### Sales Tracking
- Transaction recording
- Daily/Monthly reports
- Revenue analytics
- Customer sales history
- Payment tracking

### Supplier Management
- Supplier details
- Purchase orders
- Delivery tracking
- Payment terms
- Contact information

### Analytics & Reports
- Inventory trends
- Sales analysis
- Revenue reports
- Popular drugs
- Supplier performance

## 🌐 Deployment

### One-Click Deployment

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mostafa-SAID7/Pharma-dash)

### Manual Deployment

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Docker**
```bash
docker build -t pharma-dash .
docker run -p 3000:80 pharma-dash
```

See [Deployment Guide](./docs/05-DEPLOYMENT.md) for more details.

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.ts` to customize colors and theme.

### Components
All UI components in `src/components/ui/` can be customized.

### Dark Mode
Dark mode is enabled by default via `next-themes`.

## 📖 Development

### Creating Components
```typescript
import { Button } from '@/components/ui/button'

export function MyComponent() {
  return <Button>Click me</Button>
}
```

### Using Forms
```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
```

### Data Fetching
```typescript
import { useQuery } from '@tanstack/react-query'
```

See [Development Guide](./docs/04-DEVELOPMENT.md) for more examples.

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Pharma Dashboard
```

### Vite Config
Customize build in `vite.config.ts`

### TypeScript
Update `tsconfig.json` for type definitions

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 5174
```

### Clear Cache
```bash
rm -rf node_modules .vite dist
npm install
```

### Build Issues
```bash
npm run lint
npm run build
```

See [Getting Started Guide](./docs/01-GETTING-STARTED.md#troubleshooting) for more help.

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## 🔒 Security & Compliance

- Type-safe data handling
- Environment variable protection
- HTTPS recommended for production
- Regular security updates
- Audit-ready structure

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

**Original Author:** [Mostafa SAID7](https://github.com/Mostafa-SAID7)

**Technologies:**
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## 📞 Support

- 📖 [Documentation](./docs)
- 🐛 [Report Issues](https://github.com/Mostafa-SAID7/Pharma-dash/issues)
- 💬 [Discussions](https://github.com/Mostafa-SAID7/Pharma-dash/discussions)

---

**Made with ❤️ for pharmacy professionals**
