import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApi = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

export const SupaBaseDB = createClient(supabaseUrl, supabaseApi);