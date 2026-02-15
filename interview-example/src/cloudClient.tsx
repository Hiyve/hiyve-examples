/**
 * @fileoverview CloudClient React context provider and hook.
 * @module interview-example/cloudClient
 *
 * Creates a CloudClient instance with generateCloudToken and provides it
 * via React context. Components use useCloudClient() to get the instance
 * for useAnalysis and useSearch hooks.
 */

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { CloudClient } from '@hiyve/cloud';

const CLOUD_ENVIRONMENT = (import.meta.env.VITE_HIYVE_ENVIRONMENT || 'development') as 'production' | 'development';

async function generateCloudToken(): Promise<string> {
  const response = await fetch('/api/generate-cloud-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Failed to generate cloud token');
  }
  return data.cloudToken;
}

const CloudClientContext = createContext<CloudClient | null>(null);

export function CloudClientProvider({ children }: { children: ReactNode }) {
  const cloud = useMemo(
    () => new CloudClient({ generateCloudToken, environment: CLOUD_ENVIRONMENT }),
    []
  );
  return (
    <CloudClientContext.Provider value={cloud}>
      {children}
    </CloudClientContext.Provider>
  );
}

export function useCloudClient(): CloudClient | null {
  return useContext(CloudClientContext);
}
