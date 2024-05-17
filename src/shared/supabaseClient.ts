import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseAnonKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
