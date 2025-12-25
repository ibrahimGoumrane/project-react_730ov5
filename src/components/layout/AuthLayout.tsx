import { Outlet } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export default function AuthLayout() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background p-4'>
      <Card className='w-full max-w-md shadow-lg'>
        <CardContent className='p-6'>
          <Outlet />
        </CardContent>
      </Card>
    </div>
  );
}
