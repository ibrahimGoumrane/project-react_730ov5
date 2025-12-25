# Code Style and Conventions

## General
- Uses TypeScript for type safety.
- Follows React naming conventions.
- Keeps components small and focused.
- Uses custom hooks for reusable logic.
- Uses proper semantic HTML.
- Optimizes images and assets.

## Styling
- **Tailwind CSS**: Utility-first styling with `tailwind.config.js` for customization.
- **CSS Variables**: Uses `--background` and `--foreground` for consistent theming in `src/styles/index.css`.
- **Dark Mode**: Automatic dark mode support via `prefers-color-scheme` and Tailwind CSS classes (e.g., `dark:from-gray-900`).

## Project Structure
- Organized into `src/components`, `src/pages`, `src/hooks`, `src/utils`, `src/types`, `src/styles`.
- UI components (like Shadcn/ui) are expected in `src/components/ui`.

## Imports
- **Path Aliases**: `@/*` maps to `./src/*` for clean absolute imports.
  - Examples:
    - `@/components/*` maps to `./src/components/*`
    - `@/utils/*` maps to `./src/utils/*`
    - `@/types/*` maps to `./src/types/*`
    - `@/hooks/*` maps to `./src/hooks/*`
    - `@/pages/*` maps to `./src/pages/*`

## Linting
- **ESLint**: Configured with React-specific and TypeScript-specific rules.