const SUPABASE_URL =
  "https://tuvnhvtohwzedevluujx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_NuuG7u9XUp-K399CTqn48g_i_DAY_Lg";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );