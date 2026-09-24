const SUPABASE_URL = "https://ijozzgcyhpvflucakanr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_aKpdHMD5Giq4pFdZeh1MLw_gwMIOoku";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
