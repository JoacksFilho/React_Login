import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null; // Se tem usuario logado ou não.
    signin: (name: string, password: string, phone: string) => Promise<boolean> 
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);