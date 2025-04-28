
import { createClient } from '@supabase/supabase-js';

// Use the Supabase URL and anonymous key from your connected project
const supabaseUrl = 'https://qaamibpwyzqcixgxmfzy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhYW1pYnB3eXpxY2l4Z3htZnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDgwMTQsImV4cCI6MjA2MTQyNDAxNH0.oComJn5zKiPN7jNAdq0AjqyqlrdERnFm5s2WjUl-SSw';

// Create a client with the proper credentials
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        hd: 'grietcollege.com' // This restricts to @grietcollege.com domain
      }
    }
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  if (!checkSupabaseConfig()) {
    throw new Error('Supabase is not configured properly. Please add your Supabase credentials.');
  }

  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
