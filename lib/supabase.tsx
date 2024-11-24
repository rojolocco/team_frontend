import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseRole = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseKey || !supabaseRole) {
    throw new Error('Supabase URL, anon key, and service role key must be provided.');
}

export function supabaseClient() {
    return createClient(supabaseUrl, supabaseKey);
}

export function supabaseAdmin() {
    return createClient(supabaseUrl, supabaseRole);
}

const _supabase = supabaseAdmin();
const adminAuthClient = _supabase.auth.admin;

export async function fetchEmployeeIds() {
    const { data: { users }, error } = await adminAuthClient.listUsers({ page: 1, perPage: 100 });

    if (error) {
        console.error('Error fetching user IDs:', error);
        return [];
    }

    return users.map((user) => user.id);
}