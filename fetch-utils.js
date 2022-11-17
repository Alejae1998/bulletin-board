const SUPABASE_URL = 'https://iunwdtvnyfagysjwguun.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bndkdHZueWZhZ3lzandndXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODU4OTQsImV4cCI6MTk2Nzg2MTg5NH0.CfqXGd7NFGJGUzPx4v2oZGFHZXj4mWe7rp7FFmI2YHA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}
export async function checkAuth() {}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function redirectIfLoggedIn() {}

export async function fetchPosts() {
    const response = await client.from('post').select('*');
    return response.data;
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}

