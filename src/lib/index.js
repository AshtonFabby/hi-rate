// place files you want to import through the `$lib` alias in this folder.

import { createClient } from '@supabase/supabase-js';

// @ts-ignore
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
