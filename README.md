# 01-Bases - React + TypeScript Fundamentals

Learning project to practice React fundamentals with TypeScript. Each concept is implemented as an isolated component that can be toggled on/off in `App.tsx`.

## Tech Stack

- **React 19** with **TypeScript 5.9**
- **Vite 7** with SWC as compiler
- **Tailwind CSS v4** (Vite plugin, no config file needed)
- **Axios** for HTTP requests
- **React Hook Form** for form handling
- **ESLint** with React Hooks and React Refresh plugins

## Installation and Usage

```bash
npm install
npm run dev       # Start dev server
npm run build     # Type-check + production build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

### Environment Variables

Copy `.env.template` to `.env.local` and configure:

```env
VITE_REQRES_API_KEY=your_api_key_here
```

## Covered Concepts

### 1. Basic TypeScript Types
**Component:** `BasicTypes`

Primitive types (`string`, `number`, `boolean`) and typed arrays (`string[]`). Basic conditional rendering with ternary operator.

### 2. Typed Functions
**Component:** `BasicFunctions`

Arrow functions with typed parameters and return values. Example: function that receives two numbers and returns a string using template literals.

### 3. Object Literals & Interfaces
**Component:** `ObjectLiterals`
**Interfaces:** `Person`, `Address`

Typed objects with custom interfaces. Interfaces with optional properties (`city?`). Rendering with `JSON.stringify`.

### 4. useState & Custom Hooks
**Component:** `Counter`
**Hook:** `useCounter`

- `useState` with generic type (`useState<number>`)
- Logic extraction into a reusable custom hook
- State validation (prevent negative values with `Math.max`)
- Separation of business logic and presentation

### 5. Context API & Authentication
**Component:** `LoginPage`
**Context:** `AuthProvider` / `useAuthContext`
**Enums:** `AuthStatus` (`checking`, `authenticated`, `unauthenticated`)

- `createContext` with `AuthState` typing
- Provider with authentication state using `useState` and `useEffect`
- Enum pattern with `as const` and derived type (`Status`)
- Full flow: checking -> login/logout -> conditional rendering
- Shared methods via context (`loginWithEmailPassword`, `logout`)

### 6. API Consumption with Pagination
**Component:** `UserPage`, `UserRow`
**Hook:** `useUsers`
**Action:** `loadUsersAction`

- HTTP requests with **axios** to REST API (`reqres.in`)
- Environment variables with `import.meta.env`
- Custom hook with `useState`, `useEffect` and `useRef` for pagination
- Table component with list rendering (`map`)
- Typed props with `Props` interface
- Actions pattern to separate the data layer

### 7. Forms with React Hook Form
**Component:** `FormsPage`

- **react-hook-form** integration with TypeScript
- Custom `FormInputs` type for form fields
- Usage of `register`, `handleSubmit` and `defaultValues`
- Validation with `required`

## Project Structure

```text
src/
├── actions/              # Async functions for API calls
├── context/              # React Context providers
├── enums/                # Enums and const types
├── interfaces/           # Shared TypeScript interfaces
├── typescript/
│   ├── components/       # Feature components for each concept
│   └── hooks/            # Reusable custom hooks
├── App.tsx               # Root component (concept toggling)
└── main.tsx              # Entry point
```

## Workflow Pattern

Each concept is developed as an independent component. In `App.tsx`, components are toggled by commenting/uncommenting imports and JSX, allowing focus on one topic at a time.
