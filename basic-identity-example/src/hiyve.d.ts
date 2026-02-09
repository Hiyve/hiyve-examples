/**
 * Type declarations for @hiyve identity packages.
 * Fallback in case .d.ts files aren't resolved from the packages.
 */

declare module '@hiyve/identity-react' {
  import type { ReactNode } from 'react';
  import type { SxProps, Theme } from '@mui/material';

  export interface AuthUser {
    id: string;
    email: string;
    name?: string;
    emailVerified?: boolean;
    [key: string]: unknown;
  }

  export const IdentityProvider: React.ComponentType<{
    apiKey: string;
    environment?: 'production' | 'development';
    basePath?: string;
    tokenStorage?: 'localStorage' | 'memory';
    autoRefresh?: boolean;
    refreshBuffer?: number;
    timeout?: number;
    children: ReactNode;
  }>;

  export function useUser(): {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    status: 'loading' | 'authenticated' | 'unauthenticated';
    refreshUser: () => Promise<void>;
  };

  export function useAuthState(): {
    status: 'loading' | 'authenticated' | 'unauthenticated';
    isAuthenticated: boolean;
    isLoading: boolean;
    error: Error | null;
    tfaRequired: boolean;
    clearError: () => void;
  };

  export function useAuthActions(): {
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name?: string) => Promise<void>;
    logout: () => Promise<void>;
    verifyTfa: (code: string, type?: string) => Promise<void>;
    resendOtp: () => Promise<{ message: string; expiresIn: number }>;
    requestPasswordReset: (email: string) => Promise<{ message: string }>;
    resetPassword: (token: string, password: string) => Promise<{ message: string }>;
    verifyEmail: (token: string) => Promise<{ message: string }>;
    resendVerification: (email: string) => Promise<{ message: string }>;
  };

  export const AuthFlow: React.ComponentType<{
    initialView?: 'login' | 'register' | 'forgotPassword' | 'tfa' | 'resetPassword' | 'emailVerification';
    onAuthenticated?: (user: AuthUser) => void;
    onRegistered?: (user: AuthUser) => void;
    resetToken?: string;
    verificationToken?: string;
    showRegisterLink?: boolean;
    sx?: SxProps<Theme>;
    onError?: (error: Error) => void;
  }>;

  export const UserProfile: React.ComponentType<{
    onLogout?: () => void;
    showLogout?: boolean;
    sx?: SxProps<Theme>;
    onError?: (error: Error) => void;
  }>;

  export const LoginForm: React.ComponentType<{
    onSuccess?: (user: AuthUser) => void;
    onForgotPassword?: () => void;
    onRegister?: () => void;
    showForgotPassword?: boolean;
    showRegisterLink?: boolean;
    sx?: SxProps<Theme>;
    onError?: (error: Error) => void;
  }>;

  export const RegisterForm: React.ComponentType<{
    onSuccess?: (user: AuthUser) => void;
    onLogin?: () => void;
    showLoginLink?: boolean;
    requireName?: boolean;
    sx?: SxProps<Theme>;
    onError?: (error: Error) => void;
  }>;
}

declare module '@hiyve/utilities';
declare module '@hiyve/identity-client';
