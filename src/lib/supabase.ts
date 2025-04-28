
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and anonymous key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Check if we're using placeholder values and provide a helpful message
const isUsingPlaceholders = 
  supabaseUrl.includes('your-project') || 
  supabaseAnonKey.includes('your-anon-key');

// Create a client only if we have valid credentials
export const supabase = isUsingPlaceholders 
  ? null 
  : createClient(supabaseUrl, supabaseAnonKey);

// Helper function to check if Supabase is properly configured
const checkSupabaseConfig = () => {
  if (isUsingPlaceholders) {
    console.error('Supabase is not configured. Please add your Supabase URL and anon key to the environment variables.');
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
