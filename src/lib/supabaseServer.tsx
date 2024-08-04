
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (supabaseUrl === '' || supabaseServiceKey === '') {
  throw new Error('Supabase URL or Service Key is not set. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey)
