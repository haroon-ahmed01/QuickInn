import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
    </div>
  );
};

export default Dashboard;
