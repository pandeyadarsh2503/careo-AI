import { create } from 'zustand';
import { User } from '@/types';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  
  login: (email: string, password: string) => {
    // Mock login - replace with API call later
    console.log('Login attempt:', email, password);
    
    // Simulate successful login
    set({
      isAuthenticated: true,
      user: {
        id: '1',
        name: 'John Doe',
        email: email,
        role: 'jobseeker',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      },
    });
  },
  
  logout: () => {
    set({
      isAuthenticated: false,
      user: null,
    });
  },
  
  register: (name: string, email: string, password: string) => {
    // Mock registration - replace with API call later
    console.log('Registration attempt:', name, email, password);
    
    // Simulate successful registration
    set({
      isAuthenticated: true,
      user: {
        id: '1',
        name: name,
        email: email,
        role: 'jobseeker',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      },
    });
  },
}));
