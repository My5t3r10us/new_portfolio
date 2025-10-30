/*
  # Portfolio Database Schema

  ## Overview
  This migration creates the complete database schema for a full-stack developer portfolio website.
  It includes tables for projects, services, testimonials, contact submissions, and work experience.

  ## Tables Created

  ### 1. projects
  Stores portfolio project information including case studies and live demos
  - `id` (uuid, primary key) - Unique project identifier
  - `title` (text) - Project name
  - `description` (text) - Detailed project description
  - `short_description` (text) - Brief summary for card display
  - `tech_stack` (text[]) - Array of technologies used
  - `image_url` (text) - Main project image
  - `live_url` (text, optional) - Link to live project
  - `github_url` (text, optional) - Repository link
  - `category` (text) - Project category (web, mobile, fullstack, etc.)
  - `featured` (boolean) - Whether to highlight this project
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ### 2. services
  Lists development services offered
  - `id` (uuid, primary key) - Unique service identifier
  - `title` (text) - Service name
  - `description` (text) - Service description
  - `icon_name` (text) - Lucide icon identifier
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ### 3. testimonials
  Stores client testimonials and reviews
  - `id` (uuid, primary key) - Unique testimonial identifier
  - `client_name` (text) - Client full name
  - `company` (text) - Client company name
  - `role` (text) - Client job title
  - `testimonial_text` (text) - Review content
  - `avatar_url` (text, optional) - Client photo
  - `rating` (integer) - Star rating (1-5)
  - `featured` (boolean) - Whether to highlight
  - `created_at` (timestamptz) - Creation timestamp

  ### 4. contact_submissions
  Stores contact form submissions
  - `id` (uuid, primary key) - Unique submission identifier
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `status` (text) - Submission status (new, read, replied)
  - `created_at` (timestamptz) - Submission timestamp

  ### 5. experience
  Stores work experience and employment history
  - `id` (uuid, primary key) - Unique experience identifier
  - `company` (text) - Company name
  - `role` (text) - Job title
  - `description` (text) - Role description and achievements
  - `location` (text) - Work location
  - `start_date` (date) - Employment start date
  - `end_date` (date, optional) - Employment end date (null for current)
  - `technologies` (text[]) - Technologies used in role
  - `order_index` (integer) - Display order (most recent first)
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - All tables have Row Level Security (RLS) enabled
  - Public read access is granted for all tables (portfolio content is public)
  - Contact submissions table allows anonymous inserts
  - No update or delete policies (content managed via Supabase dashboard)

  ## Important Notes
  - All IDs use gen_random_uuid() for automatic generation
  - Timestamps default to now() for automatic tracking
  - Arrays are used for tech_stack and technologies for flexible storage
  - Boolean fields default to false
  - Status field in contact_submissions defaults to 'new'
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  tech_stack text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL,
  live_url text,
  github_url text,
  category text NOT NULL DEFAULT 'web',
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon_name text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  testimonial_text text NOT NULL,
  avatar_url text,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at timestamptz DEFAULT now()
);

-- Create experience table
CREATE TABLE IF NOT EXISTS experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  role text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  technologies text[] NOT NULL DEFAULT '{}',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;

-- Create policies for projects table
CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for services table
CREATE POLICY "Anyone can view services"
  ON services
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for testimonials table
CREATE POLICY "Anyone can view testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for contact_submissions table
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policies for experience table
CREATE POLICY "Anyone can view experience"
  ON experience
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(order_index);
CREATE INDEX IF NOT EXISTS idx_experience_order ON experience(order_index);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);