# Project Structure

```text
react-template/
├── src/                   # Source files
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (Button, etc. - shadcn/ui)
│   │   └── layout/       # Layout-specific components (Header, Footer)
│   ├── pages/            # Page components for routing (Home, About, NotFound)
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions and helpers
│   ├── types/            # TypeScript type definitions
│   ├── styles/           # Global styles with Tailwind CSS
│   │   └── index.css     # Main CSS file with Tailwind imports
│   ├── App.tsx           # Main App component with routing
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite type definitions
├── public/               # Static assets (images, icons, etc.)
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration with path aliases
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
├── .eslintrc.cjs         # ESLint configuration
├── package.json          # Dependencies and scripts
├── package-lock.json
├── components.json       # shadcn/ui configuration
├── README.md
└── .gitignore
```