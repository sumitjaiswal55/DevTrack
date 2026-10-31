import AsyncStorage from '@react-native-async-storage/async-storage';

// Local testing: Android Emulator ke liye 10.0.2.2, Real Device ke liye apne laptop ka Wi-Fi IP (jaise: 'http://192.168.1.5:5000/api')
const BASE_URL = 'http://10.0.2.2:5000/api';

export const ApiService = {
  // 1. User Register (Signup)
  async register(name, email, password, role = 'DATA_ANALYST') {
    try {
      const res = await fetch(`${BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Signup failed');
      }
      if (data.token) {
        await AsyncStorage.setItem('user_token', data.token);
        await AsyncStorage.setItem('user_profile', JSON.stringify(data.user));
      }
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  // 2. User Login
  async login(email, password) {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }
      if (data.token) {
        await AsyncStorage.setItem('user_token', data.token);
        await AsyncStorage.setItem('user_profile', JSON.stringify(data.user));
      }
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  // 3. Log Daily Activity
  async logActivity(title, category, durationMinutes, isProductive = true) {
    try {
      const token = await AsyncStorage.getItem('user_token');
      if (!token) throw new Error('User not authenticated');

      const res = await fetch(`${BASE_URL}/activity/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          category,
          durationMinutes,
          isProductive,
          loggedFrom: 'APP',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to log activity');
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  // 4. Fetch Today's Activities
  async getTodayActivities() {
    try {
      const token = await AsyncStorage.getItem('user_token');
      if (!token) throw new Error('User not authenticated');

      const res = await fetch(`${BASE_URL}/activity/today`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch activities');
      return { success: true, activities: data.activities, role: data.role };
    } catch (err) {
      return { success: false, error: err.message, activities: [] };
    }
  },

  // 5. Get Saved User Profile
  async getCurrentUser() {
    try {
      const userStr = await AsyncStorage.getItem('user_profile');
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  },

  // 6. Logout
  async logout() {
    try {
      await AsyncStorage.removeItem('user_token');
      await AsyncStorage.removeItem('user_profile');
      return true;
    } catch {
      return false;
    }
  },
};