import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { signup as authSignup } from '@/utils/auth'; // Alias to avoid name collision
import { Loader2 } from 'lucide-react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await authSignup({ name, email, password });
      toast({
        title: 'Success',
        description: response.message + ' Redirecting to home page.',
      });
      navigate('/'); // Redirect to home page after successful registration
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className='w-full max-w-md shadow-lg rounded-lg'>
      <CardHeader className='text-center'>
        <CardTitle className='text-3xl font-bold text-primary'>Sign Up</CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              type='text'
              placeholder='John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className='flex justify-center text-sm text-muted-foreground'>
        Already have an account?{' '}
        <Link to='/signin' className='text-primary hover:underline ml-1'>
          Sign In
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
