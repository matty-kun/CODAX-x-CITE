# CODAX-x-CITE Project AI Assistant Instructions

## Project Overview
CODAX-x-CITE is a React-TypeScript application for a tech education platform. The project uses:
- Vite for build tooling
- TailwindCSS for styling
- Framer Motion for animations
- Supabase for backend services
- EmailJS for email functionality

## Architecture

### Core Components
- `src/App.tsx`: Main application container
- `src/components/`: Feature-specific components
  - `Hero.tsx`: Landing page hero section
  - `Programs.tsx`: Educational programs showcase
  - `About.tsx`: About section
  - `Footer.tsx`: Site footer

### Data Flow
- Supabase client (`src/supabaseClient.ts`) manages database operations
- Program data is fetched from Supabase tables:
  - `programs`: Available educational paths
  - `program_interests`: User program selections
  - `startup_submissions`: Startup program applications

## Key Development Patterns

### Component Structure
- Components use functional style with React hooks
- Framer Motion animations wrapped in `motion.div` components
- TailwindCSS classes for styling (prefer utility classes over custom CSS)

### State Management
- Local state with `useState` for component-level state
- Supabase for persistent data storage
- Form state handled with controlled components

### Data Fetching
```typescript
const { data, error } = await supabase
  .from('table_name')
  .select('*')
```

### Styling Conventions
- Use TailwindCSS utility classes
- Follow existing gradient patterns for cards:
```tsx
className={`bg-gradient-to-br ${gradientColor} text-white`}
```

## Developer Workflow
1. Development server: `npm run dev`
2. Build: `npm run build`
3. Preview build: `npm run preview`
4. Linting: `npm run lint`

## Environment Setup
Required environment variables (`.env.local`):
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Common Patterns
- Use motion.div for animated components
- Place icons at top-left of cards
- Implement responsive designs using Tailwind breakpoints
- Handle loading and error states for Supabase queries
