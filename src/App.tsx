import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Todos from '@/pages/Todos';
import Header from '@/components/layout/Header';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import NotFound from '@/pages/NotFound';
import AuthLayout from '@/components/layout/AuthLayout';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

function Layout() {
  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col'>
      <Header />
      <main className='flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <Outlet />
        </main>
    <Footer />
    <Toaster />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='todos' element={<Todos />} />
      </Route>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
