import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminUser {
  id: string;
  username: string;
}

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing session
    const token = sessionStorage.getItem('admin_token');
    const adminData = sessionStorage.getItem('admin_user');
    
    if (token && adminData) {
      setAdmin(JSON.parse(adminData));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    setError(null);
    setIsLoading(true);

    try {
      const { data, error: invokeError } = await supabase.functions.invoke('admin-auth', {
        body: { username, password },
      });

      if (invokeError) {
        throw new Error(invokeError.message);
      }

      if (data.error) {
        setError(data.error);
        setIsLoading(false);
        return false;
      }

      sessionStorage.setItem('admin_token', data.token);
      sessionStorage.setItem('admin_user', JSON.stringify(data.admin));
      setAdmin(data.admin);
      setIsAuthenticated(true);
      setIsLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_user');
    setAdmin(null);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    admin,
    error,
    login,
    logout,
  };
};
