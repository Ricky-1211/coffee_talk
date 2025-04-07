# ☕ Brew Heaven - Coffee Shop Application

## Project Overview

A production-ready, responsive web application for coffee shop management, featuring secure authentication, inventory management, product catalog with advanced filtering, and a comprehensive admin interface.

## Architecture & Technical Stack

### Frontend
- **Build System**: Vite 5.x (optimized bundling with module federation)
- **Language**: TypeScript 5.3+ (strict mode enabled)
- **UI Framework**: React 18.x (with Server Components)
- **Component System**: shadcn-ui (headless components with Radix UI primitives)
- **Styling**: Tailwind CSS 3.x (with custom theming and design tokens)
- **State Management**: Context API + React Query 5.x (with query invalidation strategies)
- **Routing**: React Router 6.x (with lazy loading and code splitting)
- **Form Handling**: React Hook Form + Zod validation
- **Testing**: Vitest + React Testing Library + Playwright for E2E

### Performance Optimizations
- Code splitting and lazy loading
- Image optimization with modern formats (WebP/AVIF)
- Memoization patterns for expensive renders
- Progressive enhancement strategy

## Development Setup

### 🛠️ Prerequisites
- Node.js ≥ 18.x LTS
- npm ≥ 9.x or equivalent package manager
- Git ≥ 2.40.x

### Development Workflow Options

#### 1. Lovable AI Platform (Recommended)
``
some changes via Lovable are automatically committed with conventional commit messages.


#### 3. GitHub Integration Options
- **Direct Editing**: Use GitHub's editor for quick changes
- **Codespaces**: Launch a pre-configured development environment in the browser
- **Pull Requests**: Follow the branching strategy (feature/fix/refactor prefixes)

## Project Structure
```
brew-heaven/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   │   ├── ui/        # Base UI components
│   │   └── layout/    # Layout components
│   ├── context/       # React Context definitions
│   ├── data/          # Static data and API schemas
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and services
│   ├── pages/         # Route components
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Helper utilities
│   ├── App.tsx        # Root component
│   └── main.tsx       # Entry point
├── tests/
│   ├── unit/          # Unit tests
│   ├── integration/   # Integration tests
│   └── e2e/           # End-to-end tests
├── .env.example       # Example environment variables
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Core Features

### Authentication & Authorization
- JWT-based authentication with refresh token rotation
- Role-based access control (Customer, Staff, Admin)
- OAuth integration for social login
- Session management with secure HTTP-only cookies

### Product Catalog
- Faceted search with real-time filtering
- Product variants (size, type, customizations)
- Dynamic pricing based on selections
- Inventory tracking with stock alerts

### User Experience
- Optimistic UI updates for immediate feedback
- Form validation with error recovery
- Responsive design with mobile-first approach
- Accessibility compliance (WCAG 2.1 AA)

### Admin Dashboard
- Sales analytics with data visualization
- Inventory management
- User administration
- Content management for menu items

## Environment Configuration
The application requires the following environment variables:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000

# Authentication
VITE_AUTH_TOKEN_NAME=auth_token
VITE_REFRESH_TOKEN_NAME=refresh_token

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NEWSLETTER=true
```

## CI/CD Pipeline
This project implements a comprehensive CI/CD workflow:

1. **Continuous Integration**:
   - Linting and type checking
   - Unit and integration tests
   - Code coverage reports
   - Bundle size analysis

2. **Continuous Deployment**:
   - Automatic deployment to staging on PR merge to `develop`
   - Manual promotion to production from `main` branch
   - Canary deployments for major features

## Deployment

### Quick Deployment
1. Navigate to [Lovable Project](https://lovable.dev/projects/a2c00049-2c9a-4824-891f-aecb86e629b9)
2. Click Share → Publish
3. Monitor deployment status in the project dashboard

### Custom Domain Setup
1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"
3. Configure DNS records (A record or CNAME)
4. Set up SSL certificate (automatic with Let's Encrypt)

## Performance Monitoring & Analytics
- Lighthouse CI for performance regression testing
- Error tracking with source maps
- User behavior analytics (optional, privacy-focused)

## Contributing

### Branching Strategy
- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: New features
- `fix/*`: Bug fixes
- `refactor/*`: Code improvements

### Pull Request Process
1. Create a branch from `develop`
2. Implement changes with tests
3. Submit PR with conventional commit messages
4. Pass CI checks and code review
5. Squash and merge to `develop`

### Code Standards
- Follow project ESLint configuration
- Maintain 90%+ test coverage for business logic
- Use TypeScript strictly (no `any` types)
- Document complex logic with JSDoc

## Troubleshooting
- **CORS Issues**: Ensure API URLs are correctly configured
- **Build Failures**: Check Node.js and npm versions
- **Performance Issues**: Run Lighthouse audits for insights
- **State Management Problems**: Enable React DevTools

## License
MIT License - See LICENSE file for details

## Support
For questions or issues, please open a GitHub issue or contact the project maintainers.