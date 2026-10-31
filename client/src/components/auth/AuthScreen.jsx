import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AuthApi } from '../../services/authApi';

export function AuthScreen({ onAuthSuccess }) {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('DATA_ANALYST'); // Default dost ke liye Data Analyst
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password || (isSignup && !name)) {
      Alert.alert('Required', 'Kripya saari details fill karein.');
      return;
    }

    setLoading(true);
    let result;

    if (isSignup) {
      result = await AuthApi.signup(name, email, password, role);
    } else {
      result = await AuthApi.login(email, password);
    }

    setLoading(false);

    if (result.success) {
      Alert.alert('Success', `Welcome ${result.data.user.name}!`);
      if (onAuthSuccess) onAuthSuccess(result.data.user);
    } else {
      Alert.alert('Error', result.error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.inner}>
        
        <Text style={styles.title}>Personal AI Life Manager</Text>
        <Text style={styles.subtitle}>
          {isSignup ? 'Naya account create karein' : 'Apne account me login karein'}
        </Text>

        {isSignup && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Aapka Naam (Full Name)"
              placeholderTextColor="#64748B"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.roleLabel}>Track / Role Chuniye:</Text>
            <View style={styles.roleRow}>
              <TouchableOpacity
                style={[styles.roleBtn, role === 'DATA_ANALYST' && styles.roleBtnActive]}
                onPress={() => setRole('DATA_ANALYST')}>
                <Text style={[styles.roleText, role === 'DATA_ANALYST' && styles.roleTextActive]}>
                  📊 Data Analyst
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.roleBtn, role === 'FULL_STACK' && styles.roleBtnActive]}
                onPress={() => setRole('FULL_STACK')}>
                <Text style={[styles.roleText, role === 'FULL_STACK' && styles.roleTextActive]}>
                  💻 Full Stack Dev
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#64748B"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#64748B"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#0B0F19" />
          ) : (
            <Text style={styles.submitBtnText}>{isSignup ? 'Account Banayein' : 'Login Karein'}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.switchModeBtn} onPress={() => setIsSignup(!isSignup)}>
          <Text style={styles.switchModeText}>
            {isSignup
              ? 'Pehle se account hai? Login karein'
              : 'Naya account banana hai? Signup karein'}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F19' },
  inner: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 26, fontWeight: '800', color: '#F8FAFC', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#94A3B8', marginBottom: 20 },
  input: {
    backgroundColor: '#131C2E',
    borderWidth: 1,
    borderColor: '#1E293B',
    color: '#F8FAFC',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    fontSize: 15,
  },
  roleLabel: { color: '#94A3B8', fontSize: 13, marginBottom: 8, fontWeight: '600' },
  roleRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  roleBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#131C2E',
    borderWidth: 1,
    borderColor: '#1E293B',
    alignItems: 'center',
  },
  roleBtnActive: { borderColor: '#38BDF8', backgroundColor: '#0C4A6E' },
  roleText: { color: '#94A3B8', fontWeight: '600', fontSize: 13 },
  roleTextActive: { color: '#F8FAFC', fontWeight: '700' },
  submitBtn: {
    backgroundColor: '#38BDF8',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  submitBtnText: { color: '#0B0F19', fontWeight: '700', fontSize: 16 },
  switchModeBtn: { marginTop: 20, alignItems: 'center' },
  switchModeText: { color: '#38BDF8', fontSize: 13 },
});