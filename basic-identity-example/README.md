# Basic Identity Example

The simplest possible authentication application using the Hiyve Identity SDK. This example demonstrates user registration, login, and a protected page with no server-side setup required.

## Quick Start

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh basic-identity-example
```

This handles authentication, dependencies, and environment setup automatically.

### Option B: Manual Setup

#### 1. Authenticate with Hiyve

The `@hiyve/*` packages require authentication:

```bash
npx hiyve-cli login
```

Enter your Hiyve API key when prompted. Get one at [console.hiyve.dev](https://console.hiyve.dev).

#### 2. Install Dependencies

```bash
pnpm run setup
```

#### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your Hiyve public API key:

```env
VITE_HIYVE_API_KEY=pk_test_your-key-here
VITE_HIYVE_ENVIRONMENT=development
```

#### 4. Start the App

```bash
pnpm run dev
```

Open http://localhost:5173

## Features

This is a minimal authentication example:

- User registration with email and password
- Login with email and password
- Two-factor authentication (if enabled on the account)
- Password reset flow
- Protected dashboard page
- User profile display with logout

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/identity-react` | Authentication UI components and hooks |
| `@hiyve/utilities` | Shared utilities |
| `@hiyve/identity-client` | Underlying authentication client library |

## Architecture

```
src/
├── main.tsx              # IdentityProvider setup with API key
├── App.tsx               # Routes between AuthFlow and Dashboard
├── hiyve.d.ts            # Type declarations for @hiyve packages
└── components/
    └── Dashboard.tsx     # Protected page with UserProfile
```

### Component Flow

```
IdentityProvider (main.tsx)
  └── App.tsx
      ├── AuthFlow        # When not authenticated
      │   ├── LoginForm
      │   ├── RegisterForm
      │   ├── ForgotPassword
      │   └── TfaVerification
      └── Dashboard       # When authenticated
          └── UserProfile
```

### No Server Required

Unlike the other examples that require an Express server for room token generation, this example communicates directly with the Hiyve Identity API using a public API key (`pk_test_*` or `pk_live_*`). No server-side setup is needed.

## Code Overview

### Provider Setup (main.tsx)

```tsx
import { IdentityProvider } from '@hiyve/identity-react';

<IdentityProvider
  apiKey={import.meta.env.VITE_HIYVE_API_KEY}
  environment="development"
>
  <App />
</IdentityProvider>
```

### Auth Flow (App.tsx)

```tsx
import { useUser, AuthFlow } from '@hiyve/identity-react';

const { isAuthenticated, isLoading } = useUser();

// Show AuthFlow when not authenticated, Dashboard when authenticated
```

### Protected Page (Dashboard.tsx)

```tsx
import { useUser, UserProfile } from '@hiyve/identity-react';

const { user } = useUser();

<UserProfile />  // Shows avatar, email, name, and logout button
```

## Hooks Reference

### Used in This Example

```tsx
// User state - check authentication and get user info
const { user, isAuthenticated, isLoading } = useUser();
```

### Advanced (Not Used Here)

These hooks are available for more complex implementations:

```tsx
// Auth actions - programmatic login/register/logout
const { login, register, logout, verifyTfa } = useAuthActions();

// Auth state - detailed auth lifecycle state
const { status, error, tfaRequired, clearError } = useAuthState();
```

## Development

```bash
# Start the app (port 5173)
pnpm run dev
```

### Toggle Between Local and Registry Packages

For development with local `hiyve-sdk`:

```bash
# From the hiyve-examples root directory:
./toggle-packages.sh dev    # Use local packages
./toggle-packages.sh prod   # Use registry packages
./toggle-packages.sh status # Check current mode
```

## TypeScript Support

This example includes TypeScript type declarations for all `@hiyve/*` packages in `src/hiyve.d.ts`. These declarations provide type safety while the SDK packages are in development.

The declarations cover:
- `@hiyve/identity-react` - IdentityProvider, AuthFlow, UserProfile, hooks
- `@hiyve/utilities` - Shared utilities
- `@hiyve/identity-client` - Authentication client

## Troubleshooting

### "API Key Required" screen
Create a `.env` file with your `VITE_HIYVE_API_KEY`. See the Quick Start section.

### Module errors
Clear Vite cache and restart:
```bash
rm -rf node_modules/.vite
pnpm run dev
```

### "Must be used within IdentityProvider" error
Ensure `IdentityProvider` wraps all components using identity hooks. Check `main.tsx`.

## Next Steps

Once you understand this identity example, check out:

- **basic-example** - Minimal video conferencing with WebRTC
- **full-example** - All features: chat, recording, transcription, file sharing, Q&A, whiteboard
- **token-room-example** - Invite links with token-based joining

## Learn More

- [Hiyve SDK Documentation](https://sdk.hiyve.dev)
- [Full Example README](../full-example/README.md)
