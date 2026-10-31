// client/src/services/authApi.js

const BASE_URL = 'http://localhost:5000/api'; // ya jo bhi tumhara server URL ho

export async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Login failed');
  localStorage.setItem('user_token', data.token);
  localStorage.setItem('user_profile', JSON.stringify(data.user));
  return data.user;
}

export async function signupUser(name, email, password, role) {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Signup failed');
  localStorage.setItem('user_token', data.token);
  localStorage.setItem('user_profile', JSON.stringify(data.user));
  return data.user;
}

export function getCurrentUser() {
  const user = localStorage.getItem('user_profile');
  return user ? JSON.parse(user) : null;
}

export function logoutUser() {
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_profile');
}