# Bolashak College Website

## Overview

This is a modern, responsive website for Bolashak College built with React, TypeScript, and Express.js. The application features a bilingual interface (English/Kazakh), accessibility controls, and a contact form system. The project uses a full-stack architecture with a React frontend and Express.js backend, designed for educational institutions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Animation**: Framer Motion for smooth animations
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **API**: RESTful API design
- **Session Management**: PostgreSQL-based session storage

## Key Components

### UI Components
- **Component Library**: Comprehensive shadcn/ui components including buttons, forms, dialogs, cards, and navigation elements
- **Theme System**: Dark/light mode toggle with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Built-in accessibility controls including zoom functionality

### Language System
- **Internationalization**: Custom language provider supporting English and Kazakh
- **Translation Management**: Centralized translation system with context-based keys
- **Language Persistence**: Local storage for user language preferences

### Page Sections
- **Hero Section**: Video background with college branding
- **About Section**: Institution overview with feature highlights
- **Specialties**: Program offerings (Engineering, Business, Sciences, Arts)
- **Activities**: Student life and campus events
- **Student Resources**: Portal access and support services
- **Application Process**: Step-by-step enrollment guidance
- **Contact Form**: Interactive contact system with form validation

## Data Flow

### Contact Form Workflow
1. User fills out contact form with name, email, subject, and message
2. Frontend validates data using Zod schema
3. Form data is sent to `/api/contact` endpoint
4. Backend validates and stores message in database
5. Success/error feedback displayed to user

### Data Storage
- **Users Table**: User authentication data (currently using in-memory storage)
- **Contact Messages**: Form submissions with timestamps
- **Session Management**: PostgreSQL-based session storage for scalability

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **Animation**: Framer Motion for page transitions and interactions
- **Data Fetching**: TanStack Query for server state management
- **Date Handling**: date-fns for date formatting
- **Form Validation**: Zod for schema validation

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for API request validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with HMR
- **TypeScript**: Real-time type checking and compilation
- **Database**: Environment-based DATABASE_URL configuration
- **Replit Integration**: Built-in Replit development tools and error overlay

### Production Build
- **Frontend**: Vite production build with optimized assets
- **Backend**: esbuild compilation to ESM format
- **Database Migrations**: Drizzle Kit for schema management
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Build Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema synchronization

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```