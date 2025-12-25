interface UserCredentials {
  email: string;
  password?: string;
}

interface SignUpCredentials extends UserCredentials {
  name: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const mockUsers: User[] = [
  { id: '1', name: 'Test User', email: 'test@example.com' },
];

const findUserByEmail = (email: string) => mockUsers.find(user => user.email === email);

export const login = ({ email, password }: UserCredentials): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUserByEmail(email);
      if (user && password === 'password123') { // Simple mock password check
        resolve(user);
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
};

export const signup = ({ name, email, password }: SignUpCredentials): Promise<{ message: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (findUserByEmail(email)) {
        reject(new Error('Email already registered'));
      } else if (password && password.length < 6) {
        reject(new Error('Password must be at least 6 characters long'));
      }
      else if (!password) {
        reject(new Error('Password is required'));
      }
      else {
        const newUser: User = { id: (mockUsers.length + 1).toString(), name, email };
        mockUsers.push(newUser); // Add to mock users
        resolve({ message: 'Registration successful' });
      }
    }, 1000);
  });
};
