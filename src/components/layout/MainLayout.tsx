import { Outlet, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '@/context/AuthContext';

const MainLayout = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to='/signin' replace />;
  }

  return (
    <div className='min-h-screen flex flex-col bg-background'>
      <Navbar />
      <main className='flex-grow container mx-auto px-4 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
