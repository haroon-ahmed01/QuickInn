import { useState } from 'react';
import { forgotPassword } from '../services/api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert('Reset link sent. Check your email.');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to send reset link');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="block mb-2 border p-2 w-full" />
      <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Send Reset Link</button>
    </form>
  );
}
