# Deployment Guide

## Production Build

### Build the Application
```bash
npm run build
```

Creates optimized production build in `dist/` folder:
- Code minification
- Tree-shaking
- CSS optimization
- Asset optimization

### Preview Build Locally
```bash
npm run preview
```

Test production build before deploying.

## Deployment Platforms

### Vercel (Recommended)

1. **Connect Repository**
   - Push to GitHub
   - Import repo in [Vercel Dashboard](https://vercel.com)

2. **Configure Project**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy**
   - Automatic deployment on every push
   - Preview builds for pull requests

### Netlify

1. **Connect Repository**
   - Import site from Git
   - Select repository

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Deploy**
   - Netlify automatically deploys on push
   - Custom domain available

### GitHub Pages

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

**Note:** Add to `vite.config.ts`:
```typescript
export default {
  base: '/pharma-dash/',
  // ... other config
}
```

### Docker Deployment

**Dockerfile**
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build & Deploy**
```bash
docker build -t pharma-dash .
docker run -p 80:80 pharma-dash
```

## Environment Configuration

### Production Variables (.env.production)
```env
VITE_API_URL=https://api.pharma-dash.com
VITE_APP_NAME=Pharma Dashboard
```

### Build with Environment
```bash
# Build for production
npm run build

# Build for development (includes debug info)
npm run build:dev
```

## Performance Optimization

### Bundle Analysis
```bash
# Install analyzer
npm install --save-dev rollup-plugin-visualizer

# Use in vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer'

export default {
  plugins: [visualizer()]
}
```

### Lazy Loading Routes
```typescript
import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Inventory = lazy(() => import('@/pages/Inventory'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Suspense>
  )
}
```

### Image Optimization
```typescript
// Use optimized images
<img 
  src="/images/optimized.webp" 
  alt="Description"
  loading="lazy"
/>
```

## Security

### Environment Variables
- Never commit `.env.local`
- Use platform secrets management
- Rotate API keys regularly

### HTTPS
- Always use HTTPS in production
- Enable HSTS headers
- Use secure cookies

### Content Security Policy
Add to `index.html`:
```html
<meta 
  http-equiv="Content-Security-Policy" 
  content="default-src 'self'; script-src 'self' 'unsafe-inline'"
/>
```

### Data Protection
- Encrypt sensitive pharmaceutical data
- Implement proper authentication
- Use secure API endpoints
- Follow HIPAA compliance if needed

## Monitoring

### Error Tracking
Integrate error monitoring:
- Sentry
- Rollbar
- Bugsnag

### Analytics
Track user behavior:
- Google Analytics
- Mixpanel
- PostHog

### Performance
Monitor performance:
- Web Vitals
- Lighthouse
- PageSpeed Insights

## CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v2
        with:
          name: dist
          path: dist/
```

## Rollback Strategy

### Version Control
Always tag releases:
```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### Rollback Command
Most platforms support:
```bash
# Vercel
vercel rollback

# Netlify
netlify deploy --production --dir=dist
```

## Post-Deployment Checklist

- [ ] Verify all features working
- [ ] Check responsive design
- [ ] Test on multiple browsers
- [ ] Verify API connections
- [ ] Check performance metrics
- [ ] Monitor error logs
- [ ] Verify data backups
- [ ] Test pharmacy-specific features
- [ ] Update documentation

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

### Deployment Hangs
- Check build logs
- Verify environment variables
- Check file permissions
- Increase timeout settings

### Routing Issues
- Ensure `base` path correct in `vite.config.ts`
- Configure server redirects for SPA
- Check `_redirects` file for Netlify

## Performance Tips

1. Enable gzip compression
2. Use CDN for static assets
3. Cache static files aggressively
4. Minify and bundle code
5. Optimize images (WebP format)
6. Remove unused dependencies
7. Enable browser caching
8. Monitor Core Web Vitals

## Compliance & Data Security

- Store drug data securely
- Implement audit logs
- Maintain transaction records
- Follow pharmaceutical regulations
- Backup data regularly
- Document security measures
