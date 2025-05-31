
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = https:'mojdchqmjpezfsgrekpf.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vamRjaHFtanBlemZzZ3Jla3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MDU3ODYsImV4cCI6MjA2NDI4MTc4Nn0.SBE3-V-DO64BBuyzEjGC46vfZe18765ewl-4oyFLIJM';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
