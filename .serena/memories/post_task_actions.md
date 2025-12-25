# Post-Task Actions

After completing a task or making changes, the following commands should be run to ensure code quality, type safety, and proper functionality before committing or deploying:

1.  **Linting**: `npm run lint`
2.  **Type Checking**: `npm run type-check`
3.  **Testing**: `npm run test` (or `npm run test:watch` during development)
4.  **Local Development Server Check**: `npm run dev` (to visually inspect changes)
5.  **Build Verification**: `npm run build` followed by `npm run preview` (to ensure production build works as expected)