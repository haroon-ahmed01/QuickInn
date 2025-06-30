import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/api';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, newPassword);
      alert('Password reset successful');
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.message || 'Reset failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input onChange={(e) => setNewPassword(e.target.value)} type="password" placeholder="Enter new password" className="block mb-2 border p-2 w-full" />
      <button type="submit" className="bg-purple-500 text-white p-2 rounded">Reset Password</button>
    </form>
  );
}


