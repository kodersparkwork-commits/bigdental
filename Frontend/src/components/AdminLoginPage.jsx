import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Lock } from 'lucide-react';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const result = await login(email, password);

        if (result.success) {
            if (result.user.role === 'admin') {
                navigate('/admin');
            } else {
                setError("Access Denied: This portal is for Administrators only.");
            }
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 font-sans">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="text-center mb-8">
                    <div className="inline-flex p-4 rounded-full bg-slate-900 text-white mb-4 shadow-lg shadow-slate-900/30">
                        <Shield size={32} />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900">Admin Portal</h2>
                    <p className="text-slate-500 mt-2 font-medium">Secure Access Only</p>
                </div>

                {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-semibold border border-red-100 flex items-center gap-2">
                    <Lock size={16} /> {error}
                </div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Admin Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 outline-none transition-all bg-slate-50 text-slate-900 font-medium"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 outline-none transition-all bg-slate-50 text-slate-900 font-medium"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg shadow-slate-900/20 transform hover:-translate-y-1">
                        Authenticate Access
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
