import { create } from 'zustand';
import api from '@/lib/axios';
import { User } from '@/types';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  loadUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,

  login: async (email, password) => {
    const res = await api.post('/api/auth/login', { email, password });

    localStorage.setItem('token', res.data.token);

    set({
      isAuthenticated: true,
      user: res.data.user,
    });
  },

  register: async (name, email, password) => {
    const res = await api.post('/api/auth/register', {
      name,
      email,
      password,
    });

    localStorage.setItem('token', res.data.token);

    set({
      isAuthenticated: true,
      user: res.data.user,
    });
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ isAuthenticated: false, user: null });
  },

  loadUser: async () => {
    try {
      const res = await api.get('/api/auth/me');
      set({ isAuthenticated: true, user: res.data });
    } catch {
      set({ isAuthenticated: false, user: null });
    }
  },
}));
