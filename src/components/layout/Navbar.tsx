import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const handleLogout = () => {
    // TODO: Implement actual logout logic later
    console.log('User logged out');
  };

  return (
    <nav className='bg-background border-b border-border p-4 shadow-sm'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/todos' className='text-2xl font-bold text-primary'>
          Todo App
        </Link>
        <Button onClick={handleLogout} variant='outline'>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
