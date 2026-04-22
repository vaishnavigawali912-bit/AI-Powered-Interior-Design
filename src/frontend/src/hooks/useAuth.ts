import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import type { Identity } from "@icp-sdk/core/agent";

export interface AuthState {
  identity: Identity | undefined;
  isAuthenticated: boolean;
  isInitializing: boolean;
  isLoggingIn: boolean;
  login: () => void;
  logout: () => void;
}

export function useAuth(): AuthState {
  const {
    identity,
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    login,
    clear,
  } = useInternetIdentity();

  return {
    identity,
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    login,
    logout: clear,
  };
}
