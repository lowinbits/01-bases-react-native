export const AuthStatus = {
    CHECKING: 'checking',
    AUTHENTICATED: 'authenticated',
    UNAUTHENTICATED: 'unauthenticated'
} as const;

export type Status = typeof AuthStatus[keyof typeof AuthStatus];