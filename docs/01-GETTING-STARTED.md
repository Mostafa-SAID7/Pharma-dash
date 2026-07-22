# Getting Started

## Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **bun** package manager
- **Git** for version control

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/Mostafa-SAID7/Pharma-dash
cd Pharma-dash
```

### 2. Install Dependencies
```bash
npm install
# or
bun install
```

### 3. Start Development Server
```bash
npm run dev
# or
bun run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
Pharma-dash/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helpers
│   ├── data/           # Static data
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── docs/               # Documentation
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

## Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Build & Deployment

### Production Build
```bash
npm run build
```

Output files will be in the `dist/` folder.

### Preview Before Deploy
```bash
npm run preview
```

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 5174
```

### Clear Cache
```bash
# Remove node_modules and lock files
rm -rf node_modules package-lock.json
npm install
```

### Clear Vite Cache
```bash
rm -rf .vite
npm run dev
```
