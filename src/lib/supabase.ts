import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  short_description: string;
  tech_stack: string[];
  image_url: string;
  live_url?: string;
  github_url?: string;
  category: string;
  featured: boolean;
  order_index: number;
  created_at: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  order_index: number;
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  company: string;
  role: string;
  testimonial_text: string;
  avatar_url?: string;
  rating: number;
  featured: boolean;
  created_at: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  description: string;
  location: string;
  start_date: string;
  end_date?: string;
  technologies: string[];
  order_index: number;
  created_at: string;
};

export type ContactSubmission = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
