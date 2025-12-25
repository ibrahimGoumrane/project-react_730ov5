import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ClipboardList, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-12 py-16 px-4 md:px-8 flex-grow'>
      {/* Hero Section */}
      <section className='max-w-4xl space-y-6'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary'>
          Organize Your Life, One Todo at a Time
        </h1>
        <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed'>
          Project React is your intuitive partner for managing tasks, tracking progress, and boosting productivity.
        </p>
        <Button asChild size='lg' className='group text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105'>
          <Link to='/todos'>
            Start Managing Tasks <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
          </Link>
        </Button>
      </section>

      {/* Feature Cards Section */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full'>
        <Card className='p-6 flex flex-col items-center text-center space-y-4 shadow-md hover:shadow-lg transition-shadow duration-300'>
          <ClipboardList className='h-12 w-12 text-accent-foreground' />
          <CardHeader>
            <CardTitle className='text-2xl font-semibold'>Intuitive Task Management</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-base text-muted-foreground'>
              Easily add, edit, and categorize your tasks. Stay on top of your daily goals with a clean, simple interface.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className='p-6 flex flex-col items-center text-center space-y-4 shadow-md hover:shadow-lg transition-shadow duration-300'>
          <Rocket className='h-12 w-12 text-accent-foreground' />
          <CardHeader>
            <CardTitle className='text-2xl font-semibold'>Boost Your Productivity</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-base text-muted-foreground'>
              Achieve more by breaking down complex projects into manageable steps. Experience a new level of efficiency.
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}