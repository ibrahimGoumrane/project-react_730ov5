import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { XCircle, CheckCircle } from 'lucide-react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: newTodoText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  const toggleTodoComplete = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className='flex flex-col items-center p-4 space-y-6 min-h-[calc(100vh-4rem)]'>
      <Card className='w-full max-w-xl shadow-lg bg-card text-card-foreground'>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold text-primary'>Your Todo List</CardTitle>
          <CardDescription className='text-muted-foreground mt-2'>Organize your tasks efficiently.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex gap-2'>
            <Input
              type='text'
              placeholder='Add a new todo...'
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              onKeyDown={handleKeyDown}
              className='flex-grow border-input focus-visible:ring-ring'
            />
            <Button onClick={addTodo} className='bg-primary text-primary-foreground hover:bg-primary/90'>
              Add Todo
            </Button>
          </div>
          <div className='space-y-3 mt-4'>
            {todos.length === 0 ? (
              <p className='text-center text-muted-foreground'>No todos yet. Add one above!</p>
            ) : (
              todos.map((todo) => (
                <div key={todo.id} className='flex items-center justify-between p-3 rounded-md bg-muted/50 border border-border transition-all duration-200 hover:shadow-sm'>
                  <div className='flex items-center space-x-3'>
                    <Checkbox
                      id={`todo-${todo.id}`}
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodoComplete(todo.id)}
                      className='h-5 w-5 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
                    />
                    <Label
                      htmlFor={`todo-${todo.id}`}
                      className={`text-lg font-medium cursor-pointer ${todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}
                    >
                      {todo.text}
                    </Label>
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => deleteTodo(todo.id)}
                    className='text-destructive hover:bg-destructive/10 h-8 w-8'
                  >
                    <XCircle className='h-5 w-5' />
                    <span className='sr-only'>Delete todo</span>
                  </Button>
                </div>
              ))
            )}
          </div>
        </CardContent>
        <CardFooter className='flex justify-center text-sm text-muted-foreground'>
          {todos.filter(todo => !todo.completed).length} items left
        </CardFooter>
      </Card>
    </div>
  );
}