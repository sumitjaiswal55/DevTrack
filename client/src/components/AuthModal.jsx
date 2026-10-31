import { useState } from 'react';
import { loginUser, signupUser } from '../services/authApi';
import { Loader2 } from 'lucide-react';

export default function AuthModal({ onLoginSuccess }) {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('DATA_ANALYST'); // Default dost ke liye
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      let user;
      if (isSignup) {
        user = await signupUser(name, email, password, role);
      } else {
        user = await loginUser(email, password);
      }
      onLoginSuccess(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl bg-[#0E1522] border border-[#1E293B] p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-white text-center">DevTrack OS</h2>
        <p className="text-xs text-slate-400 text-center mt-1">
          {isSignup ? 'Select your role and start tracking' : 'Sign in to access your track'}
        </p>

        {error && (
          <div className="mt-3 p-2 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          {isSignup && (
            <>
              <div>
                <label className="text-xs font-semibold text-slate-300">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Sumit / Friend Name"
                  className="w-full mt-1 px-3 py-2 bg-[#0B0F17] border border-[#1E293B] rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300">Career Track</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() => setRole('DATA_ANALYST')}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                      role === 'DATA_ANALYST'
                        ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                        : 'bg-[#0B0F17] border-[#1E293B] text-slate-400'
                    }`}
                  >
                    📊 Data Analyst
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('FULL_STACK')}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                      role === 'FULL_STACK'
                        ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                        : 'bg-[#0B0F17] border-[#1E293B] text-slate-400'
                    }`}
                  >
                    💻 Full Stack Dev
                  </button>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="text-xs font-semibold text-slate-300">Email Address</label>
            <input
              type="email"
              required
              placeholder="user@example.com"
              className="w-full mt-1 px-3 py-2 bg-[#0B0F17] border border-[#1E293B] rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full mt-1 px-3 py-2 bg-[#0B0F17] border border-[#1E293B] rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isSignup ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-xs text-blue-400 hover:underline"
          >
            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}