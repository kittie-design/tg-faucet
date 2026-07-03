import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kqibtnapvzlrevfkfgdx.supabase.co",
  "PASTE_YOUR_ANON_KEY_HERE"
);
