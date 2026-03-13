import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oocjgrtzmyuwuledyfnr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vY2pncnR6bXl1d3VsZWR5Zm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NjAzMTIsImV4cCI6MjA4ODQzNjMxMn0.5byRFukvi726iclz3Wj-E0rnlFrbqqmqKOKp4uKP3go';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
