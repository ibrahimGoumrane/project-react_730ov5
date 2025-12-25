import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='bg-background border-b border-border shadow-sm py-4 px-6 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <NavLink to='/' className='text-2xl font-bold text-primary hover:text-primary/90 transition-colors duration-200'>
          Project React
        </NavLink>
        <nav className='flex space-x-4 md:space-x-6'>
          <NavLink to='/' end className={({ isActive }) =>
            `text-lg font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
          }>
            <Button variant='link' className='text-lg'>Home</Button>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) =>
            `text-lg font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
          }>
            <Button variant='link' className='text-lg'>About</Button>
          </NavLink>
          <NavLink to='/todos' className={({ isActive }) =>
          `text-lg font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
          }>
          <Button variant='link' className='text-lg'>Todos</Button>
          </NavLink>
            <NavLink to='/auth/login' className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
            }>
              <Button variant='link' className='text-lg'>Login</Button>
            </NavLink>
            <NavLink to='/auth/signup' className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`
            }>
              <Button variant='link' className='text-lg'>Sign Up</Button>
            </NavLink>
        </nav>
      </div>
    </header>
  );
}