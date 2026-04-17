import { createClient } from '@supabase/supabase-js'

const URL = 'https://lbhuujogebkcgqkbndff.supabase.co'
const API_KEY = 'sb_publishable_uidA9fj83chslNj86nyS_g_5G5qG_Il'

export const supabase = createClient(URL, API_KEY)