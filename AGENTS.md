This project is a Vue wrapper for [daisyUI](https://daisyui.com/) components.
It uses Vue 3.5, Tailwind 4, and daisyUI 5.

# Code Conventions

* Components should be single file components using TypeScript in the src/components directory.
* Use src/components/Button.vue as a pattern.
* You must only use daisyUI classes in components, not Tailwind utility classes. Demo pages may use Tailwind classes, however.
* Use PascalCase for components in templates, not kebab-case.
* Use upper SNAKE_CASE for constants, PascalCase for types, and camelCase for other variables and functions.
* When it makes sense, create child components for the main component; for example, a Tabs component may contain a TabItem child. However, for simple blocks, use named or default slots.
* Use pnpm to manage dependencies and run scripts.
* When creating a new component, make a corresponding demo page in src/views/demos and add it to src/utils/components.ts. There is no need to make a separate route or update the navigtation.
* When refactoring a component, update its demo page if necessary.
* After code changes are complete, run the script `pnpm format` to format the code.
