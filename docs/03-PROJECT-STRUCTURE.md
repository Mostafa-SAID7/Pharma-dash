# Project Structure

## Directory Layout

```
Pharma-dash/
│
├── src/                          # Source code
│   ├── components/               # Reusable React components
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── PharmacyForm/         # Pharmacy-specific forms
│   │   └── ...                   # Other components
│   │
│   ├── pages/                    # Page components
│   │   ├── Dashboard.tsx         # Main dashboard
│   │   ├── Inventory.tsx         # Inventory management
│   │   ├── Prescriptions.tsx     # Prescription management
│   │   ├── Sales.tsx             # Sales tracking
│   │   └── ...                   # Other pages
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useQuery.ts           # Data fetching
│   │   ├── useForm.ts            # Form management
│   │   └── ...                   # Other hooks
│   │
│   ├── lib/                      # Utilities and helpers
│   │   ├── api.ts                # API client
│   │   ├── utils.ts              # Helper functions
│   │   └── cn.ts                 # Classname utility
│   │
│   ├── data/                     # Static data
│   │   ├── mock-data.ts          # Mock database
│   │   └── constants.ts          # Constants
│   │
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
│
├── public/                       # Static assets
│   ├── favicon.svg              # Pharmacy logo
│   └── robots.txt                # SEO robots file
│
├── docs/                         # Documentation
│   ├── 01-GETTING-STARTED.md    # Setup guide
│   ├── 02-TECH-STACK.md         # Technology details
│   ├── 03-PROJECT-STRUCTURE.md  # This file
│   ├── 04-DEVELOPMENT.md        # Development guide
│   └── 05-DEPLOYMENT.md         # Deployment guide
│
├── index.html                    # HTML entry point
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind configuration
├── eslint.config.js             # ESLint configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies
└── README.md                     # Project overview
```

## Key Files

### `src/main.tsx`
Entry point that bootstraps the React application.

### `src/App.tsx`
Root component that contains routing and main layout.

### `src/index.css`
Global CSS and Tailwind directives.

### `vite.config.ts`
Vite build configuration:
- React plugin for JSX
- Development server settings
- Build optimization

### `tsconfig.json`
TypeScript compiler options:
- React JSX support
- Path aliases for cleaner imports
- Strict mode enabled

### `tailwind.config.ts`
Tailwind CSS customization:
- Custom colors
- Custom fonts
- Theme extensions

## Component Organization

### UI Components (`src/components/ui/`)
- Reusable shadcn/ui components
- Buttons, forms, dialogs, etc.
- Customized styling per brand

### Feature Components (`src/components/`)
- Domain-specific components
- Combined UI components
- Business logic handling

### Pages (`src/pages/`)
- Route-level components
- Full page layouts
- Page-specific state

## Data Flow

```
User Input
    ↓
Components
    ↓
Hooks (useForm, useQuery)
    ↓
Services (API calls)
    ↓
State (React Query, Context)
    ↓
Re-render UI
```

## Import Aliases

TypeScript paths configured for clean imports:

```typescript
// Instead of: import { Button } from '../../../components/ui/button'
import { Button } from '@/components/ui/button'

// Available aliases:
@/components     // src/components
@/pages          // src/pages
@/hooks          // src/hooks
@/lib            // src/lib
@/data           // src/data
```

## Styling Approach

1. **Global Styles** - `src/index.css`
2. **Component Styles** - Tailwind classes
3. **Dynamic Styles** - `clsx()` or `cn()` utility
4. **Theme Variables** - CSS custom properties

## State Management

- **Local State** - React `useState`
- **Form State** - React Hook Form
- **Server State** - React Query
- **Theme State** - next-themes

## Routing Structure

Routes defined in `App.tsx` using React Router:

```
/                      → Dashboard
/inventory             → Inventory management
/inventory/:id         → Drug details
/prescriptions         → Prescription management
/sales                 → Sales tracking
/suppliers             → Supplier management
/settings              → Settings
```

## Pharmacy-Specific Features

### Inventory Module
- Drug stock tracking
- Expiry date alerts
- Low stock notifications
- Batch management

### Prescription Module
- Prescription tracking
- Dosage information
- Patient records
- Drug interaction warnings

### Sales Module
- Transaction recording
- Revenue tracking
- Daily/Monthly reports
- Customer management

### Supplier Management
- Supplier details
- Purchase orders
- Delivery tracking
- Payment terms
