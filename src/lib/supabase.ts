
import { createClient } from '@supabase/supabase-js';

// Use the Supabase URL and anonymous key from your connected project
const supabaseUrl = 'https://qaamibpwyzqcixgxmfzy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhYW1pYnB3eXpxY2l4Z3htZnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDgwMTQsImV4cCI6MjA2MTQyNDAxNH0.oComJn5zKiPN7jNAdq0AjqyqlrdERnFm5s2WjUl-SSw';

// Create a client with the proper credentials
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    storage: localStorage
  }
});

// Helper function to check if Supabase is properly configured
const checkSupabaseConfig = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase is not configured. Please add your Supabase URL and anon key.');
    return false;
  }
  return true;
};

export const signInWithGoogle = async () => {
  if (!checkSupabaseConfig()) {
    throw new Error('Supabase is not configured properly. Please add your Supabase credentials.');
  }

  console.log('Attempting to sign in with Google...');
  console.log('Redirect URL:', window.location.origin);
  
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    });

    if (error) {
      console.error('Sign-in error details:', error);
      throw error;
    }
    
    console.log('Sign-in successful, data:', data);
    return data;
  } catch (error) {
    console.error('Caught error during sign-in:', error);
    throw error;
  }
};

export const signOut = async () => {
  if (!checkSupabaseConfig()) {
    throw new Error('Supabase is not configured properly. Please add your Supabase credentials.');
  }

  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
