# Ripple Client - System Architecture & Implementation Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture Overview](#architecture-overview)
4. [Project Structure](#project-structure)
5. [Core Systems](#core-systems)
6. [Feature Modules](#feature-modules)
7. [Component Architecture](#component-architecture)
8. [Data Flow & API Integration](#data-flow--api-integration)
9. [Type Safety & Validation](#type-safety--validation)
10. [Authentication System](#authentication-system)
11. [Styling & UI Architecture](#styling--ui-architecture)
12. [Development & Build Process](#development--build-process)
13. [Key Patterns & Conventions](#key-patterns--conventions)
14. [Future Improvements](#future-improvements)

---

## Project Overview

**Ripple Client** is a modern, full-featured frontend application for the Ripple Universe platform - a creative technology lab designed to equip creatives, technologists, and innovators with skills, community, and culture needed to thrive in AI and emerging tech.

### Core Purpose
The application serves as a comprehensive platform offering:
- **User Authentication & Profile Management** - Sign up, sign in, email verification, and profile customization
- **Educational Programs** - Browse and enroll in structured learning modules with ratings and reviews
- **Events Management** - Discover, register for, and attend physical and online events
- **E-Commerce Shop** - Purchase digital and physical products with multi-currency support
- **Content Hub** - Access blogs, articles, and podcasts
- **Job Board** - Browse career opportunities
- **Dashboard** - Personalized user dashboard with programs, purchases, and digital passes

---

## Technology Stack

### Frontend Framework & Runtime
- **Next.js 16.1.1** - React meta-framework with App Router for file-based routing and server components
- **React 19.2.3** - UI library with latest features and hooks
- **TypeScript 5** - Type-safe JavaScript development
- **Node.js Runtime** - Server-side operations and API routes

### State Management & Data Fetching
- **@tanstack/react-query v5.90.20** - Powerful data synchronization library for managing server state
  - Automatic caching, refetching, and synchronization
  - Deduplication of requests
  - Background updates and polling
- **Axios 1.13.2** - HTTP client for API communication with interceptors

### UI & Component System
- **Radix UI** - Unstyled, accessible component primitives
  - Dialog, Dropdown, Label, Slot for composability
- **Tailwind CSS 4** - Utility-first CSS framework with @tailwindcss/postcss
- **Lucide React 0.562.0** - Modern icon library with 550+ icons
- **Embla Carousel 8.6.0** - Lightweight carousel library for product and event sliders
- **class-variance-authority 0.7.1** - CSS class composition for variant management
- **clsx & tailwind-merge 3.4.0** - Utility functions for class name management

### Form & Validation
- **react-hook-form 7.71.1** - Performant, flexible form state management
  - Minimal re-renders with uncontrolled components
  - Lightweight library with excellent DX
- **@hookform/resolvers 5.2.2** - Schema validation adapters (Zod, Yup, Joi, etc.)
- **Zod 4.3.5** - TypeScript-first schema validation with static type inference
  - Declarative validation schemas
  - Automatic TypeScript type generation

### Utilities & Libraries
- **js-cookie 3.0.5** - Simple, lightweight cookie management for token storage
- **react-use 17.6.0** - Collection of essential React hooks
- **react-hot-toast 2.6.0** - Headless toast notification system
- **react-confetti 6.4.0** - Confetti animation for celebratory moments
- **react-dropzone 14.4.0** - File upload handling with drag-and-drop
- **react-h5-audio-player 3.10.1** - Audio player for podcast playback
- **nextjs-toploader 3.9.17** - NProgress-style top loader for page transitions
- **input-otp 1.4.2** - OTP input component for email verification

### Code Quality & Build Tools
- **ESLint 9** - JavaScript linting with Next.js config
- **Biome 1.9.4** - Fast formatter (disabled linting, using ESLint instead)
- **PostCSS 4** - CSS transformation with Tailwind plugin

---

## Architecture Overview

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        NEXT.JS APPLICATION                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   APP ROUTER (File-based)              │   │
│  │  ┌──────────────┬──────────────┬──────────────────────┐ │   │
│  │  │ (auth)       │ (dashboard)  │ (main) & Others      │ │   │
│  │  │ - signin     │ - dashboard  │ - about              │ │   │
│  │  │ - signup     │              │ - programs           │ │   │
│  │  │ - confirm    │              │ - events             │ │   │
│  │  │ - verify     │              │ - shop               │ │   │
│  │  └──────────────┴──────────────┴──────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           ↓                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │            COMPONENT LAYER (Feature-based)             │   │
│  │  ┌────────────┬────────────┬────────────┬────────────┐ │   │
│  │  │   Auth     │   Home     │   Events   │   Shop     │ │   │
│  │  │ Components │ Components │ Components │ Components │ │   │
│  │  │            │            │            │            │ │   │
│  │  │  Common Components Library (Reusable UI)          │ │   │
│  │  └────────────┴────────────┴────────────┴────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           ↓                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              DATA ACCESS LAYER                         │   │
│  │  ┌──────────────────┬──────────────────────────────┐  │   │
│  │  │    Helpers       │         Hooks               │  │   │
│  │  │  - auth.ts       │  - useAuth()                │  │   │
│  │  │  - events.ts     │  - useAuthenticated()       │  │   │
│  │  │  - shop.ts       │  - Query hooks (via RQ)     │  │   │
│  │  │  - programs.ts   │                             │  │   │
│  │  │  - checkout.ts   │                             │  │   │
│  │  └──────────────────┴──────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           ↓                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              HTTP CLIENT LAYER                         │   │
│  │  ┌─────────────────────────────────────────────────┐  │   │
│  │  │  Axios Instance (axiosInstance)                │  │   │
│  │  │  - Base URL: env.api.url                       │  │   │
│  │  │  - Headers: Authorization Bearer Token         │  │   │
│  │  │  - Interceptors: Error handling                │  │   │
│  │  └─────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           ↓                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           EXTERNAL SERVICES & APIs                     │   │
│  │  ┌──────────────────────────────────────────────────┐  │   │
│  │  │  Backend API: https://api.rippleuniverse.org    │  │   │
│  │  │  - Auth endpoints                               │  │   │
│  │  │  - Content endpoints (programs, events, blogs)  │  │   │
│  │  │  - Commerce endpoints (checkout, products)      │  │   │
│  │  │  - User profile endpoints                       │  │   │
│  │  └──────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

PROVIDERS & UTILITIES:
├── QueryClientProvider - React Query configuration
├── Tailwind CSS - Styling engine
├── NextTopLoader - Page transition indicator
├── React Hot Toast - Notification system
└── Cookie Management - Token persistence
```

### Architectural Principles

1. **Server-Client Boundary** - Next.js 16 App Router with selective server/client components
2. **Data Layer Separation** - Helpers handle API calls, hooks provide React interfaces
3. **Type Safety** - Zod schemas define API contracts, TypeScript ensures type correctness
4. **Reusable Components** - Feature-agnostic components in `/components/common`
5. **Single Source of Truth** - React Query manages server state synchronization
6. **Error Handling** - Centralized error parsing with user-friendly toast notifications
7. **Authentication** - Token-based with cookie storage for persistence
8. **API-First Design** - All features backed by RESTful backend API

---

## Project Structure

```
ripple-client/
├── app/                                    # Next.js App Router
│   ├── layout.tsx                         # Root layout with providers
│   ├── globals.css                        # Global styles
│   ├── (auth)/                            # Authentication routes
│   │   ├── signin/                        # Sign in page
│   │   ├── signup/                        # Sign up page
│   │   ├── confirm-email/                 # Email verification page
│   │   └── confirm-success/               # Verification success page
│   ├── (dashboard)/                       # Authenticated user routes
│   │   └── dashboard/                     # User dashboard
│   ├── (main)/                            # Public routes with main layout
│   │   ├── page.tsx                       # Homepage
│   │   ├── about/                         # About page
│   │   ├── programs/                      # Programs listing & details
│   │   ├── events/                        # Events listing & details
│   │   ├── shop/                          # Shop products
│   │   ├── jobs/                          # Job listings
│   │   ├── blogs/                         # Blog articles & podcasts
│   │   └── terms-of-use/                  # Legal pages
│   └── (under-contruction)/               # Coming soon pages
│
├── components/                             # React components (organized by feature)
│   ├── auth/                              # Authentication components
│   │   ├── signin.tsx, signup.tsx          # Auth forms
│   │   ├── auth-check.tsx                  # Auth guard wrapper
│   │   ├── auth-wrapper.tsx                # Auth layout wrapper
│   │   └── confirm-email.tsx               # Email verification
│   ├── common/                            # Reusable UI components
│   │   ├── button/                        # Button component
│   │   ├── form/                          # Form input components
│   │   ├── header/                        # Page header
│   │   ├── footer/                        # Page footer
│   │   ├── icons/                         # Custom icon components
│   │   ├── carousel/                      # Image carousel
│   │   ├── pagination/                    # Pagination controls
│   │   ├── dropdown/, sheet/, dialog/     # Modal components
│   │   ├── badge/, skeleton/              # Status components
│   │   └── [other shared components]
│   ├── home/                              # Homepage components
│   │   ├── head-section/                  # Hero section
│   │   ├── explore/                       # Featured content
│   │   ├── building/                      # Call-to-action sections
│   │   └── techlab/                       # Tech lab showcase
│   ├── programs/                          # Program listing/details
│   │   ├── hero/
│   │   └── [other program components]
│   ├── events/                            # Event components
│   ├── shop/                              # Product components
│   ├── jobs/                              # Job listing components
│   ├── blogs/                             # Blog/podcast components
│   └── dashboard/                         # User dashboard components
│       ├── dashboard-header/
│       ├── dashboard-sidebar/
│       ├── active-programs.tsx
│       └── recent-purchases.tsx
│
├── helpers/                                # API call functions (data fetching)
│   ├── auth.ts                            # Auth API: signUp, signIn, logout, etc.
│   ├── events.ts                          # Events API: getEvents, getEvent
│   ├── programs.ts                        # Programs API: getPrograms, getProgram
│   ├── shop.ts                            # Products API: getProducts, getProduct
│   ├── blogs.ts                           # Blogs API: getBlogs, getBlog
│   ├── checkout.ts                        # Checkout flows
│   ├── podcasts.ts                        # Podcasts API
│   ├── coupon.ts                          # Coupon validation
│   ├── billing-info.ts                    # Saved billing information
│   ├── invoice.ts                         # Invoice retrieval
│   ├── countries.ts                       # Countries data
│   ├── newsletter.ts                      # Newsletter API
│   ├── roles.ts                           # User roles utility
│   └── [other domain-specific helpers]
│
├── hooks/                                  # React hooks
│   ├── auth.ts                            # useAuth(), useAuthenticated()
│   ├── common/
│   │   └── toggle.ts                      # useToggle() for boolean state
│   ├── events.ts                          # Event-related query hooks
│   ├── programs.ts                        # Program-related query hooks
│   ├── shop.ts                            # Shop-related query hooks
│   ├── blogs.ts                           # Blog-related query hooks
│   ├── coupon.ts                          # Coupon validation hooks
│   ├── invoice.ts                         # Invoice fetch hooks
│   └── [other feature hooks]
│
├── lib/                                    # Utilities and core setup
│   ├── env.ts                             # Environment variables
│   ├── utils.ts                           # Core utilities:
│   │                                      # - cn() for class merging
│   │                                      # - axiosInstance() for HTTP client
│   │                                      # - errorParser() for error handling
│   │                                      # - queryClient for React Query
│   │                                      # - currencyFormatter()
│   │                                      # - debounce()
│   ├── auth.tsx                           # Auth utilities & constants
│   └── fonts/                             # Font configurations
│
├── providers/                              # Context providers
│   └── query-client.tsx                   # React Query provider wrapper
│
├── schema/                                 # Zod validation schemas
│   ├── auth.ts                            # SignUp, SignIn, UpdateProfile schemas
│   ├── checkout.ts                        # Shop, Event, Program checkout schemas
│   ├── newsletter.ts                      # Newsletter subscription schema
│   └── roles.ts                           # Role validation schemas
│
├── types/                                  # TypeScript type definitions
│   └── common.ts                          # SelectOption, Paginated, Currency types
│
├── enums/                                  # Enumeration constants
│   └── breakpoints.ts                     # Responsive design breakpoints
│
├── public/                                 # Static assets
│   ├── images/                            # Image files
│   ├── fonts/                             # Custom font files
│   └── countries.json                     # Country data
│
├── constants.ts                            # Global constants
│   └── COUNTRIES, NAV_LINKS, etc.
│
├── next.config.ts                          # Next.js configuration
│   └── Image remotePatterns for localhost and API
│
├── tailwind.config.ts                      # Tailwind CSS theme configuration
├── postcss.config.mjs                      # PostCSS plugins (Tailwind)
├── tsconfig.json                           # TypeScript configuration
├── package.json                            # Dependencies & scripts
├── pnpm-workspace.yaml                     # Monorepo workspace config
├── biome.json                              # Biome formatter config
├── eslint.config.mjs                       # ESLint configuration
├── README.md                               # Project readme
└── ARCHITECTURE.md                         # This file
```

### Directory Organization Principles

- **app/** - Follows Next.js 16 App Router conventions with route groups for layout sharing
- **components/** - Organized by feature/page, with `/common` for reusable components
- **helpers/** - Pure API integration functions, no React dependencies
- **hooks/** - React hooks that use helpers and react-query
- **lib/** - Core utilities and configuration
- **schema/** - Zod schemas co-located with their domain (auth, checkout, etc.)
- **types/** - Shared TypeScript interfaces

---

## Core Systems

### 1. Environment Configuration (`lib/env.ts`)

**Purpose**: Centralized environment variable access with defaults

```typescript
export const env = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || "Ripple",
  },
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  },
};
```

**Usage**:
- Development: API defaults to `http://localhost:8000`
- Production: Uses `https://api.rippleuniverse.org`
- All environment variables prefixed with `NEXT_PUBLIC_` for client-side access

**Setting Environment Variables**:
Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_NAME=Ripple
NEXT_PUBLIC_API_URL=https://api.rippleuniverse.org
```

---

### 2. HTTP Client Setup (`lib/utils.ts`)

**Purpose**: Centralized Axios configuration with authentication

```typescript
export const axiosInstance = () => {
  const token = Cookies.get("bearer_key");
  const AppAxios = Axios.create({
    baseURL: env.api.url,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      Accept: "application/json",
    },
    withCredentials: false,
  });
  return { AppAxios };
};
```

**Key Features**:
- Token-based authentication with Bearer scheme
- Automatic token injection from cookies
- Centralized error handling
- JSON content type enforcement
- No credentials in cookies (handled separately)

**Error Parser**:
```typescript
export const errorParser = (error: unknown): string => {
  // Converts Axios errors to user-friendly messages
  // Fallback to generic error if parsing fails
};
```

---

### 3. State Management (React Query)

**Configuration** (`providers/query-client.tsx`):
```typescript
export const queryClient = new QueryClient();
```

**Usage Pattern**:
- All server state managed through React Query
- Automatic caching and deduplication
- Request synchronization across components
- Background refetching capability

**Query Structure**:
```typescript
// In hooks/
const user = useQuery({
  queryFn: fetcher,
  queryKey: ["user"],
  enabled: !!bearer,
  retry: false,
});
```

---

### 4. Toast Notifications

**System**: react-hot-toast integrated in root layout

**Usage**:
```typescript
import toast from "react-hot-toast";

toast.success("Operation successful");
toast.error("Error message from parser");
```

**Benefits**:
- Headless design (no dependencies on UI framework)
- Automatic dismissal
- Stacking capability
- Accessible by default

---

### 5. Cookie Management (`js-cookie`)

**Authentication Token Storage**:
```typescript
// Store after login
Cookies.set("bearer_key", token, { expires: 1 });

// Retrieve for requests
const token = Cookies.get("bearer_key");

// Remove on logout
Cookies.remove("bearer_key");
```

**Site Unlock Token**:
```typescript
Cookies.set("site_unlocked_token", token, { expires: 1 });
```

---

## Feature Modules

### 1. Authentication Module

**File Structure**:
```
- helpers/auth.ts           # API calls
- hooks/auth.ts             # React hooks
- schema/auth.ts            # Zod validation
- components/auth/          # UI components
  ├── signin.tsx
  ├── signup.tsx
  ├── confirm-email.tsx
  └── email-confirmed.tsx
```

**Core Types** (`helpers/auth.ts`):
```typescript
type UserRole = "admin" | "user";

type UserProfile = {
  full_name: string;
  email: string;
  role: UserRole;
  avatar: string | null;
  email_verified_at: string | null;
  created_at: string;
};

type UserData = {
  token: string;
  user: UserProfile;
};
```

**API Functions**:
```typescript
signUp(data: SignUpSchemaType)              // Register new user
signIn(data: SignInSchemaType)              // Login user
getUser(bearerKey?: string)                 // Fetch current user
logout()                                    // Logout and clear token
verifyEmail(data: VerifyEmailSchemaType)   // Verify email with OTP
resendEmailVerification()                   // Request new OTP
updateProfile(data: UpdateProfileSchemaType) // Update profile & avatar
removeAvatar()                              // Delete user avatar
checkSiteUnlocked(token)                    // Check site lock status
unlockSite(data: UnlockSiteSchemaType)      // Unlock site with password
```

**Validation Schemas** (`schema/auth.ts`):
```typescript
SignUpSchema = {
  email: email validator,
  password: min 8 chars,
  confirmPassword: string,
  fullName: required string,
  ageConfirmation: required boolean,
  emailSubscription: boolean,
}

SignInSchema = {
  email: email validator,
  password: min 8 chars,
}

VerifyEmailSchema = {
  otp: exactly 4 digits,
}

UpdateProfileSchema = {
  fullName: required string,
  email: email validator,
  avatar: any (file object),
}
```

**Hook Usage**:
```typescript
function useAuth() {
  // Returns: { user: UseQueryResult<UserProfile> }
  // Automatically fetches user if token exists
}

function useAuthenticated() {
  // Redirects to /signin if not authenticated
  // Use as guard in protected routes
}
```

---

### 2. Programs Module

**File Structure**:
```
- helpers/programs.ts       # API calls
- hooks/programs.ts         # Query hooks
- components/programs/      # Program UI
- app/(main)/programs/      # Program pages
```

**Core Types** (`helpers/programs.ts`):
```typescript
type ExperienceLevel = "beginner" | "intermediate" | "expert";

type Program = {
  id: string;
  name: string;
  author: string;
  skills: string[];
  experience_level: ExperienceLevel;
  category: Category;
  price: Price[];
  rating: { avg_rating: number; count: number };
  featured_image: string;
  created_at: string;
};

type Module = {
  id: string;
  title: string;
  description: string;
  module_no: string;
};

type ProgramData = Program & {
  description: string;
  modules: Module[];
};

type Review = {
  id: string;
  review: string;
  rating: number;
  created_at: string;
  user: { full_name: string; avatar: string } | null;
};
```

**API Functions**:
```typescript
getProgramsCategories()         // Fetch all program categories
getPrograms(page, search, categoryId)      // Fetch programs list
getProgram(id)                  // Fetch single program details
getRelatedPrograms(slug)        // Fetch related/similar programs
getProgramReviews(slug)         // Fetch program reviews & ratings
```

**Features**:
- Multi-level categorization (6+ categories)
- Searchable and filterable listings
- User ratings and reviews system
- Module-based curriculum structure
- Multi-currency pricing

---

### 3. Events Module

**File Structure**:
```
- helpers/events.ts         # API calls
- hooks/events.ts           # Query hooks
- components/events/        # Event UI
- app/(main)/events/        # Event pages
```

**Core Types** (`helpers/events.ts`):
```typescript
type Event = {
  id: string;
  featured_image: string;
  title: string;
  description: string;
  date: string;
  access: "free" | "paid";
  type: "physical" | "online";
  created_at: string;
};

type Ticket = {
  id: string;
  name: string;
  price: { currency: "USD" | "NGN"; amount: string }[];
  features: string[];
};

type Facilitator = {
  name: string;
  role: string;
  company: string;
  description: string;
};

type EventData = Event & {
  images: string[];
  category: Category;
  what_to_expect: string[];
  who_to_expect: string[];
  agendas: string[];
  facilitators: Facilitator[];
  tickets: Ticket[];
};
```

**API Functions**:
```typescript
getEvents(page, access, type, categoryId)      // Filterable events list
getOverviewEvents()             // Featured events for homepage
getEvent(id)                    // Full event details
```

**Features**:
- Physical and online event support
- Free and paid ticket systems
- Multi-currency pricing
- Facilitator profiles
- Agenda and expectations information
- Categorization and filtering

---

### 4. Shop & E-Commerce Module

**File Structure**:
```
- helpers/shop.ts           # Products API
- helpers/checkout.ts       # Checkout flows
- hooks/shop.ts             # Product queries
- schema/checkout.ts        # Validation
- components/shop/          # Shop UI
- app/(main)/shop/          # Shop pages
```

**Core Types**:

**Products** (`helpers/shop.ts`):
```typescript
type Price = {
  currency: "USD" | "NGN";
  amount: number | string;
};

type Product = {
  id: string;
  featured_image: string;
  type: "physical" | "digital";
  title: string;
  description: string;
  about: string;
  price: Price[];
  benefits: string[];
  target_users: string[];
  how_to_use: string | null;
  access_delivery: string[];
  category: Category;
};

type Category = {
  id: string;
  name: string;
  description: string;
  slug: string;
};
```

**Checkout** (`helpers/checkout.ts`):
```typescript
shopCheckout(data: ShopCheckoutSchemaType & {
  currency: Currency;
  productId: string;
}): Promise<paymentUrl>

programCheckout(data: ProgramCheckoutSchemaType & {
  currency: Currency;
  programId: string;
}): Promise<paymentUrl>

eventCheckout(data: EventCheckoutSchemaType & {
  currency: Currency;
}): Promise<paymentUrl>
```

**Validation Schemas** (`schema/checkout.ts`):
```typescript
ShopCheckoutSchema = {
  firstName, lastName, email, phone,
  apartment, city, country,
  quantity: number,
  couponCode: optional string,
  saveBillingInfo: boolean,
}

EventCheckoutSchema = ShopCheckoutSchema & {
  tickets: TicketSchema[],
  (no quantity field, quantity per ticket)
}

ProgramCheckoutSchema = {
  couponCode: optional string,
}
```

**API Functions**:
```typescript
getCategoriesWithProducts(page)    // Products grouped by category
getProducts(page, search, categoryId, type)  // Searchable product list
getProduct(id)                      // Single product details
getAllProductCategories()           // All categories list
```

**Features**:
- Physical and digital product types
- Multi-currency support (USD, NGN)
- Product categorization and search
- Billing information storage
- Coupon code application
- Quantity management

---

### 5. Content Module (Blogs & Podcasts)

**File Structure**:
```
- helpers/blogs.ts          # Blogs API
- helpers/podcasts.ts       # Podcasts API
- hooks/blogs.ts            # Blog queries
- components/blogs/         # Blog UI
- app/(main)/blogs/         # Blog pages
```

**Core Types** (`helpers/blogs.ts`):
```typescript
type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};

type BlogItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  featured_image: string;
  created_at: string;
  read_time: string;
  category: BlogCategory;
};

type BlogData = BlogItem & {
  content: string;
  next_blog: string | null;
  prev_blog: string | null;
};
```

**API Functions**:
```typescript
getAllBlogCategories()          // Fetch all categories
getBlog(slug)                   // Get full blog content
getOverviewBlogs()              // Featured blogs for homepage
getRelatedBlogs(slug)           // Related blogs for recommendations
getBlogs(page, search, categoryId)  // Searchable blog list
```

**Features**:
- Blog article categorization
- Estimated read time
- Navigation between articles (prev/next)
- Related content recommendations
- Author information
- Search and filtering capabilities

---

### 6. Additional Modules

**Newsletter** (`helpers/newsletter.ts`):
- Email subscription management

**Billing Info** (`helpers/billing-info.ts`):
- Save/retrieve saved billing addresses
- Multiple saved addresses support

**Coupons** (`helpers/coupon.ts`):
- Validate coupon codes
- Apply discounts

**Invoices** (`helpers/invoice.ts`):
- Retrieve user invoices
- Invoice history

**Roles** (`helpers/roles.ts`):
- User role validation
- Role-based access control utilities

**Jobs** (`helpers/jobs.ts`):
- Browse job listings
- Job search and filtering

---

## Component Architecture

### 1. Component Organization

Components are organized by **feature/page**, following the feature-based structure pattern:

```
components/
├── auth/                    # Authentication UI
├── common/                  # Reusable shared components
├── home/                    # Homepage-specific
├── programs/                # Programs feature
├── events/                  # Events feature
├── shop/                    # Shop feature
├── jobs/                    # Jobs feature
├── blogs/                   # Blogs feature
├── dashboard/               # User dashboard
└── settings/                # User settings
```

### 2. Common Components Library

**Button Component** (`components/common/button/`):
```typescript
// Radix UI + Tailwind styled button with variants
<Button variant="primary" size="lg">Click me</Button>
```

**Form Components** (`components/common/form/`):
```typescript
<FormField
  label="Email"
  placeholder="name@example.com"
  error={errors.email?.message}
  {...register("email")}
/>

<FormCheckBoxField
  label="I agree to terms"
  onCheckedChange={handleChange}
/>
```

**Layout Components**:
- `Header` - Top navigation bar
- `Footer` - Page footer with links
- `Container` - Responsive content wrapper
- `Divider` - Visual separator

**Data Display Components**:
- `Pagination` - Page navigation
- `Carousel` - Image/content slider (Embla-based)
- `Skeleton` - Loading placeholder
- `Badge` - Status indicators

**Modal Components**:
- `Dialog` - Modal dialog (Radix UI)
- `Sheet` - Side drawer (Radix UI)
- `DropdownMenu` - Dropdown menu (Radix UI)

**Icons** (`components/common/icons/`):
Custom dual-tone icon components (24px, styled with Tailwind)

### 3. Feature Component Patterns

**Auth Components** - Form handling with react-hook-form:
```typescript
export const SignUp: FC = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(SignUpSchema),
  });
  
  const { mutate, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess() { navigate to confirm-email },
    onError(err) { toast error },
  });
  
  return <form>{form fields}</form>;
};
```

**Data Display Components** - Using React Query:
```typescript
export const EventsList: FC = ({ page, filters }) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getEvents(page, filters),
    queryKey: ["events", page, filters],
  });
  
  if (isLoading) return <Skeleton />;
  return <EventsGrid events={data} />;
};
```

**Dashboard Components** - Authenticated features:
```typescript
export const DashboardHome: FC = () => {
  const { user } = useAuth();
  
  if (!user.data) return <LoadingState />;
  return <UserDashboard user={user.data} />;
};
```

### 4. Styling Architecture

**Tailwind CSS with CVA (Class Variance Authority)**:
```typescript
// Define component variants
const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium",
  {
    variants: {
      variant: {
        primary: "bg-pink-600 text-white hover:bg-pink-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
```

**Class Utilities**:
```typescript
// cn() combines class names with Tailwind merge
import { cn } from "@/lib/utils";

const className = cn(
  "base-classes",
  isActive && "active-class",
  customClasses  // Handles Tailwind conflicts
);
```

---

## Data Flow & API Integration

### 1. Request Flow Diagram

```
User Interaction
       ↓
   Component (React)
       ↓
   Hook (useQuery/useMutation)
       ↓
   Helper Function (API call)
       ↓
   Axios Instance (HTTP client)
       ↓
   Backend API
       ↓
   Response Processing
       ↓
   React Query Cache
       ↓
   Component Re-render
       ↓
   Toast Notification
```

### 2. API Call Pattern - Helper Functions

**Example: Sign In Flow**

```typescript
// 1. Define in helper (helpers/auth.ts)
export const signIn = async (data: SignInSchemaType): Promise<UserProfile> => {
  const { AppAxios } = axiosInstance();
  
  const userData: UserData = await AppAxios({
    url: "/auth/sign-in",
    method: "POST",
    data,
  }).then((res) => res.data.data);

  // Store token in cookie
  Cookies.set("bearer_key", userData.token, { expires: 1 });

  return userData.user;
};

// 2. Use in component with mutation
export const SignIn: FC = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess(user) {
      queryClient.setQueryData(["user"], user);
      router.push("/dashboard");
      toast.success("Signed in successfully");
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return <form onSubmit={onSubmit}>{...}</form>;
};
```

### 3. Data Fetching Pattern - Query Hooks

**Example: Fetch Programs**

```typescript
// In helper (helpers/programs.ts)
export const getPrograms = async (
  page: string | null,
  search: string | null,
  categoryId: string | null,
): Promise<Paginated<Program[]>> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/programs",
    params: { page, search, category_id: categoryId },
  }).then((res) => res.data.data);
};

// In hook (hooks/programs.ts)
export const usePrograms = (
  page: string,
  search?: string,
  categoryId?: string,
) => {
  return useQuery({
    queryFn: () => getPrograms(page, search, categoryId),
    queryKey: ["programs", page, search, categoryId],
  });
};

// In component
export const ProgramsListing: FC = () => {
  const { data, isLoading, error } = usePrograms(
    currentPage,
    searchTerm,
    selectedCategory
  );

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorState />;

  return (
    <>
      {data?.data.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
      <Pagination total={data?.meta.lastPage} />
    </>
  );
};
```

### 4. Pagination Pattern

**Response Structure**:
```typescript
type Paginated<T> = {
  data: T;
  meta: {
    total: number;
    currentPage: number;
    perPage: number;
    lastPage: number;
    from: number;
    to: number;
  };
};
```

**Component Usage**:
```typescript
export const PaginatedList: FC = () => {
  const [page, setPage] = useState("1");
  const { data } = useQuery({
    queryFn: () => getItems(page),
    queryKey: ["items", page],
  });

  return (
    <>
      {data?.data.map((item) => (...))}
      <Pagination
        currentPage={data?.meta.currentPage}
        totalPages={data?.meta.lastPage}
        onPageChange={(newPage) => setPage(String(newPage))}
      />
    </>
  );
};
```

### 5. Error Handling

**Central Error Parser**:
```typescript
export const errorParser = (error: unknown): string => {
  const DEFAULT_ERROR = "An error occurred";
  
  if (error instanceof AxiosError) {
    const errorData = error.response?.data;
    return "message" in errorData ? errorData.message : DEFAULT_ERROR;
  }
  if (error instanceof Error) {
    return error.message;
  }

  return DEFAULT_ERROR;
};
```

**Usage in Components**:
```typescript
const { mutate } = useMutation({
  mutationFn: actionFn,
  onError(err) {
    toast.error(errorParser(err));
  },
});
```

### 6. Authentication Flow

```
User enters credentials
       ↓
SignIn component validates with Zod
       ↓
Call signIn() helper
       ↓
Backend validates and returns token + user
       ↓
Store token in cookie (bearer_key)
       ↓
Update React Query cache with user
       ↓
Redirect to dashboard
       ↓
useAuth() hook automatically includes token in headers
       ↓
All subsequent requests include Authorization header
```

---

## Type Safety & Validation

### 1. Zod Schema System

**Benefits**:
- Schema-driven validation (single source of truth)
- Automatic TypeScript type inference
- Runtime validation
- Clear error messages
- Works with react-hook-form

**Example Schema**:
```typescript
// schema/auth.ts
export const SignUpSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  fullName: z.string().min(1, "Full name is required"),
  ageConfirmation: z.boolean().refine((val) => val, {
    message: "Age confirmation is required",
  }),
  emailSubscription: z.boolean(),
});

// Automatic type generation
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
// Equals:
// {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   fullName: string;
//   ageConfirmation: boolean;
//   emailSubscription: boolean;
// }
```

**Integration with react-hook-form**:
```typescript
const form = useForm<SignUpSchemaType>({
  resolver: zodResolver(SignUpSchema),
  // TypeScript knows all valid field names
  // IDE provides autocomplete for register()
});

// register("email") ✓ Valid
// register("invalid") ✗ TypeScript error
```

### 2. API Response Types

**Programmatic Type Definition**:
```typescript
// Helper defines return types
export const getProgram = async (id: string): Promise<ProgramData> => {
  // ...
};

// Types are exported and reused
export type ProgramData = {
  id: string;
  name: string;
  // ... all fields defined
};
```

**Usage in Components**:
```typescript
export const ProgramDetail: FC<{ program: ProgramData }> = ({ program }) => {
  // TypeScript ensures program has all ProgramData properties
  return <div>{program.name}</div>;
};
```

### 3. Generic Types

**Pagination Generic**:
```typescript
type Paginated<T> = {
  data: T;
  meta: { /* ... */ };
};

// Usage
type EventsResponse = Paginated<Event[]>;
type ProductResponse = Paginated<Product[]>;
```

---

## Authentication System

### 1. Authentication States

```
UNAUTHENTICATED
├── User on public pages (home, about)
├── User on auth pages (signin, signup)
└── Token not in cookies

         ↓ (Sign Up/In)

AUTHENTICATED
├── User has valid bearer_key cookie
├── useAuth() provides UserProfile
└── Access to protected pages

         ↓ (Logout)

UNAUTHENTICATED
```

### 2. Protected Routes Pattern

**Method 1: Client-side Check**:
```typescript
export default function DashboardLayout({ children }) {
  useAuthenticated(); // Redirects to /signin if no token
  
  return <main>{children}</main>;
}
```

**Method 2: Auth Wrapper**:
```typescript
export const AuthCheck: FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  
  if (!user.isLoading && !user.data) {
    return <Redirect to="/signin" />;
  }
  
  return <>{children}</>;
};

// Usage
export default function Dashboard() {
  return (
    <AuthCheck>
      <DashboardContent />
    </AuthCheck>
  );
}
```

### 3. Token Management

**Storage**:
```typescript
// After login
Cookies.set("bearer_key", token, { expires: 1 }); // 1 day expiry

// Before requests
const token = Cookies.get("bearer_key");

// On logout
Cookies.remove("bearer_key");
```

**Token in Headers**:
```typescript
const AppAxios = Axios.create({
  headers: {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  },
});
```

### 4. Email Verification Flow

```
User signs up
    ↓
Receive verification token
    ↓
Redirect to /confirm-email
    ↓
User enters 4-digit OTP
    ↓
Call verifyEmail(otp)
    ↓
If success: redirect to /confirm-success
If error: show error toast, allow retry
    ↓
User can resend OTP via resendEmailVerification()
```

**Schema**:
```typescript
const VerifyEmailSchema = z.object({
  otp: z.string()
    .min(4, "Minimum of 4 digits")
    .max(4, "Maximum of 4 digits"),
});
```

---

## Styling & UI Architecture

### 1. Tailwind CSS Configuration

**PostCSS Pipeline**:
```mjs
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**Global Styles** (`app/globals.css`):
- Base CSS variables
- Global utility classes
- Theme configuration
- Animation definitions

### 2. Responsive Design

**Breakpoints** (`enums/breakpoints.ts`):
```typescript
// Used in component styling
className="p-2 md:p-4 lg:p-6"
```

**Mobile-First Approach**:
- Default: Mobile layout
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large (1280px+)

### 3. Color System

**Tailwind Utilities**:
```typescript
// Background
bg-background, bg-black, bg-pink-600

// Text
text-white, text-black, text-gray-700

// Borders
border-gray-200, rounded-2xl

// Spacing
p-2, px-4, py-6, m-auto, gap-12
```

### 4. Dark Mode & Theming

**Global CSS Variables**:
```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --primary: #de03b5;
  /* ... other variables */
}
```

**Usage**:
```typescript
className="bg-background text-foreground"
```

### 5. Component Styling Pattern

**With CVA**:
```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("base-styles", {
  variants: {
    variant: {
      primary: "primary-styles",
      secondary: "secondary-styles",
    },
    size: {
      sm: "small-styles",
      lg: "large-styles",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ variant, size, children }) => (
  <button className={buttonVariants({ variant, size })}>
    {children}
  </button>
);
```

---

## Development & Build Process

### 1. Development Setup

**Install Dependencies**:
```bash
# Using pnpm (recommended)
pnpm install

# Or npm
npm install
```

**Environment Setup**:
Create `.env.local`:
```env
NEXT_PUBLIC_APP_NAME=Ripple
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Start Development Server**:
```bash
pnpm dev
```

Access at `http://localhost:3000`

### 2. Build Process

**Production Build**:
```bash
pnpm build
```

**Start Production Server**:
```bash
pnpm start
```

### 3. Code Quality

**ESLint**:
```bash
pnpm lint
```

Checks:
- Next.js best practices
- TypeScript errors
- Web vitals compliance

**Biome Formatter** (Optional):
- Code formatting
- Configured in `biome.json`
- Currently linting disabled (using ESLint)

### 4. TypeScript Compilation

**Configuration** (`tsconfig.json`):
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Path Aliases**:
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/helpers` → `./helpers`

All imports use `@/` prefix for cleaner, consistent paths.

### 5. Build Optimization

**Next.js Features**:
- Image optimization with next/image
- Automatic code splitting
- Font optimization
- Script optimization

**Custom Configuration** (`next.config.ts`):
```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "8000",
      },
      {
        hostname: "api.rippleuniverse.org",
        protocol: "https",
      },
    ],
  },
};
```

---

## Key Patterns & Conventions

### 1. File Naming Conventions

- **Components**: PascalCase (e.g., `SignUp.tsx`, `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.ts`, `usePrograms.ts`)
- **Helpers**: camelCase (e.g., `auth.ts`, `checkout.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`, `env.ts`)
- **Types**: PascalCase (e.g., `UserProfile`, `EventData`)
- **Schemas**: PascalCase with `Schema` suffix (e.g., `SignUpSchema`)

### 2. Component Structure

**Functional Component Pattern**:
```typescript
import { FC } from "react";

interface ComponentProps {
  name: string;
  onAction?: () => void;
}

export const MyComponent: FC<ComponentProps> = ({ name, onAction }) => {
  return <div>{name}</div>;
};
```

**Usage of `FC` Type**:
- Explicit React.FC typing
- IntelliSense for props
- Clear prop documentation

### 3. Hook Composition

**Combining Multiple Hooks**:
```typescript
export function useProgramsList(page: string) {
  const [filters, setFilters] = useState({});
  const query = usePrograms(page, filters);
  
  return {
    programs: query.data,
    isLoading: query.isLoading,
    setFilters,
  };
}
```

### 4. Error Handling Pattern

```typescript
try {
  const result = await apiCall();
} catch (error) {
  toast.error(errorParser(error));
}

// Or with mutations
useMutation({
  mutationFn: apiCall,
  onError(err) {
    toast.error(errorParser(err));
  },
});
```

### 5. Loading States

**Skeleton Pattern**:
```typescript
if (isLoading) {
  return <Skeleton />;
}

if (error) {
  return <ErrorState message={errorParser(error)} />;
}

return <Content data={data} />;
```

### 6. Conditional Rendering

```typescript
// Boolean
{isActive && <Component />}

// Ternary for 2 states
{isLoading ? <Spinner /> : <Content />}

// Multiple conditions
{status === "idle" && <Idle />}
{status === "loading" && <Loading />}
{status === "success" && <Success />}
{status === "error" && <Error />}
```

### 7. Form Handling Pattern

```typescript
const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: {},
});

const { mutate, isPending } = useMutation({
  mutationFn: submitFn,
  onSuccess: () => {
    toast.success("Success");
    form.reset();
  },
  onError: (err) => {
    toast.error(errorParser(err));
  },
});

const onSubmit = form.handleSubmit((data) => {
  mutate(data);
});
```

### 8. API Versioning

**Endpoint Structure**:
```typescript
// Base URL: https://api.rippleuniverse.org
/auth/sign-in              // Authentication
/events                    // Events CRUD
/programs                  // Programs CRUD
/products                  // Shop products
/blogs                     // Content
/checkout/shop             // Checkout flows
```

### 9. Query Key Convention

```typescript
// Single resource
queryKey: ["user"]

// With parameters
queryKey: ["programs", page, searchTerm, categoryId]

// Related resource
queryKey: ["programs", programId, "reviews"]

// Cache invalidation on mutation
queryClient.invalidateQueries({ queryKey: ["programs"] })
```

---

## Future Improvements

### High Priority

1. **Forgot Password Flow**
   - Add password reset endpoint integration
   - Create reset email form
   - Update auth.ts helpers

2. **Dashboard Security Settings**
   - Two-factor authentication
   - Session management
   - Login history
   - Device management

3. **User Profile Completion**
   - Additional profile fields
   - Preferences and settings
   - Privacy controls

### Medium Priority

1. **Enhanced Search**
   - Full-text search across all content
   - Filters and faceted search
   - Recent searches storage

2. **Wishlist/Favorites**
   - Save programs and products
   - Personalized recommendations
   - Share wishlists

3. **Reviews & Ratings**
   - User reviews on programs
   - User reviews on products
   - Rating system with moderation

4. **Payment Integration**
   - Multiple payment methods
   - Subscription support
   - Refund management

5. **Notifications**
   - Email notifications
   - In-app notifications
   - Notification preferences

### Lower Priority

1. **Social Features**
   - User profiles visibility
   - Follow system
   - Messaging

2. **Analytics**
   - Event tracking
   - User behavior analytics
   - Conversion funnels

3. **PWA Features**
   - Offline support
   - Install as app
   - Push notifications

4. **Internationalization**
   - Multi-language support
   - Localization
   - RTL language support

5. **Accessibility**
   - WCAG 2.1 AA compliance
   - Keyboard navigation
   - Screen reader testing

---

## Conclusion

The Ripple Client is a well-structured, modern React application built with Next.js that demonstrates best practices in:

- **Type Safety**: Zod schemas and TypeScript throughout
- **State Management**: React Query for server state
- **Code Organization**: Feature-based structure with clear separation of concerns
- **API Integration**: Centralized helpers and hooks pattern
- **User Experience**: Toast notifications, loading states, error handling
- **Performance**: Code splitting, caching, memoization
- **Developer Experience**: Clear conventions, TypeScript intellisense, composable components

The architecture allows for easy scaling, adding new features, and maintaining code quality as the application grows. Each layer (API, data fetching, components) has a clear responsibility, making the codebase predictable and maintainable.

### Quick Reference Commands

```bash
# Development
pnpm dev              # Start dev server (port 3000)
pnpm build           # Create production build
pnpm start           # Start production server
pnpm lint            # Run ESLint



# File structure
src/
  helpers/           # API calls
  hooks/             # React hooks
  components/        # React components
  lib/               # Core utilities
  schema/            # Zod validation
  types/             # TypeScript types
  app/               # Next.js routes
```

### Key Contacts & Resources

- **API Documentation**: Backend API at `https://api.rippleuniverse.org`
- **Frontend**: Runs on `http://localhost:3000` (development)
- **Styling Guide**: Tailwind CSS official documentation
- **Component Library**: Radix UI primitives
- **Form Management**: react-hook-form documentation
- **Validation**: Zod schema validation
