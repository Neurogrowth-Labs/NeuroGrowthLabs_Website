import { createClient } from '@supabase/supabase-js';

// Read exclusively from environment variables, falling back safely if not configured
const SUPABASE_URL = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const SUPABASE_ANON_KEY = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
