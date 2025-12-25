import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-4rem)] p-4'>
      <Card className='w-full max-w-2xl shadow-lg'>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold text-primary'>About Project React</CardTitle>
          <CardDescription className='text-muted-foreground mt-2'>Our Mission and Vision</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6 p-6'>
          <section>
            <h3 className='text-2xl font-semibold mb-3 text-secondary-foreground'>Our Mission</h3>
            <p className='text-lg leading-relaxed text-gray-700'>
              Project React aims to provide a simple, efficient, and user-friendly Todo application that helps you stay organized and productive.
              We believe in creating tools that are intuitive and enhance your daily workflow without unnecessary complexity.
            </p>
          </section>
          <section>
            <h3 className='text-2xl font-semibold mb-3 text-secondary-foreground'>Our Vision</h3>
            <p className='text-lg leading-relaxed text-gray-700'>
              To be the go-to task management solution for individuals and small teams, known for its reliability, performance, and delightful user experience.
              We are continuously working on adding features that truly matter, making task management effortless and enjoyable.
            </p>
          </section>
          <section>
            <h3 className='text-2xl font-semibold mb-3 text-secondary-foreground'>Technology Stack</h3>
            <p className='text-lg leading-relaxed text-gray-700'>
              Built with modern web technologies including React, TypeScript, Tailwind CSS, and shadcn/ui, Project React leverages the best tools to deliver a robust and scalable application.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}