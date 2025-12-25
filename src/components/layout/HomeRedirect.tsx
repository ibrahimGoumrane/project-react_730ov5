import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Loader2 } from 'lucide-react';

const HomeRedirect = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/todos', { replace: true });
    } else {
      navigate('/signin', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  // Optionally render a loading spinner while redirecting
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Loader2 className='h-8 w-8 animate-spin text-primary' />
    </div>
  );
};

export default HomeRedirect;
