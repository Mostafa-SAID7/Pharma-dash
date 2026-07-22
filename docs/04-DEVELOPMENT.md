# Development Guide

## Development Workflow

### 1. Start Development Server
```bash
npm run dev
```

Opens app at `http://localhost:5173` with hot reload.

### 2. Make Changes
- Edit components in `src/`
- Changes auto-reload in browser
- Check console for errors

### 3. Test Locally
- Test in different browsers
- Test responsive design
- Check accessibility

### 4. Lint Code
```bash
npm run lint
```

Fixes style issues and enforces code standards.

## Creating Components

### Using shadcn/ui
```bash
# Components are already included in the project
# Import and use directly:

import { Button } from '@/components/ui/button'

export function MyComponent() {
  return <Button>Click me</Button>
}
```

### Creating Custom Components
```typescript
// src/components/MyComponent.tsx
import { FC } from 'react'
import { Button } from '@/components/ui/button'

interface MyComponentProps {
  title: string
  onClick: () => void
}

export const MyComponent: FC<MyComponentProps> = ({
  title,
  onClick,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Button onClick={onClick}>Action</Button>
    </div>
  )
}
```

## Working with Forms

### Using React Hook Form
```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const schema = z.object({
  drugName: z.string().min(1),
  quantity: z.number().min(1),
  price: z.number().positive(),
})

export function DrugForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('drugName')} placeholder="Drug Name" />
      {errors.drugName && <span>{errors.drugName.message}</span>}
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## Data Fetching

### Using React Query
```typescript
import { useQuery } from '@tanstack/react-query'

export function DrugList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['drugs'],
    queryFn: async () => {
      const res = await fetch('/api/drugs')
      return res.json()
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data?.map((drug) => (
        <li key={drug.id}>{drug.name} - ${drug.price}</li>
      ))}
    </ul>
  )
}
```

## Styling with Tailwind

### Basic Usage
```jsx
<div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
  <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
  <Button>Add Drug</Button>
</div>
```

### Responsive Design
```jsx
<div className="
  w-full 
  md:w-1/2 
  lg:w-1/3
  p-4 
  md:p-6 
  lg:p-8
">
  Content
</div>
```

### Dark Mode
```jsx
<div className="
  bg-white 
  dark:bg-gray-900
  text-gray-900 
  dark:text-white
">
  Content
</div>
```

## Using Icons

### Lucide React Icons
```typescript
import { Package, ShoppingCart, TrendingUp, Users } from 'lucide-react'

export function IconExample() {
  return (
    <div className="flex gap-4">
      <Package className="w-6 h-6" />
      <ShoppingCart className="w-6 h-6" />
      <TrendingUp className="w-6 h-6" />
      <Users className="w-6 h-6" />
    </div>
  )
}
```

## Adding Animations

### Framer Motion
```typescript
import { motion } from 'framer-motion'

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      Animated Content
    </motion.div>
  )
}
```

## Toast Notifications

### Using Sonner
```typescript
import { toast } from 'sonner'

export function MyComponent() {
  return (
    <button onClick={() => toast.success('Drug added successfully!')}>
      Show Toast
    </button>
  )
}
```

## Environment Variables

Create `.env.local`:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Pharma Dashboard
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Debugging

### React DevTools
Browser extension for React debugging.

### Vite Debug
```bash
# With source maps enabled (default in dev)
npm run dev
```

### Console Logging
```typescript
console.log('Debug:', value)
console.error('Error:', error)
console.warn('Warning:', warning)
```

## Code Quality

### Run Linter
```bash
npm run lint
```

### Fix Linting Issues
```bash
npm run lint -- --fix
```

## Performance Tips

1. Use `React.memo()` for expensive components
2. Split code with React Router lazy loading
3. Optimize images before using
4. Use React Query for efficient data fetching
5. Avoid inline function definitions in renders
6. Use Tailwind's JIT mode (enabled by default)

## Pharmacy-Specific Patterns

### Drug Inventory Form
```typescript
const drugSchema = z.object({
  name: z.string().min(1),
  quantity: z.number().min(0),
  expiryDate: z.date(),
  price: z.number().positive(),
})
```

### Prescription Handler
```typescript
const prescriptionSchema = z.object({
  patientName: z.string().min(1),
  drugs: z.array(z.object({
    drugId: z.string(),
    dosage: z.string(),
    frequency: z.string(),
  })),
})
```

## Useful Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [React Router Docs](https://reactrouter.com)
- [React Query Docs](https://tanstack.com/query/latest)
