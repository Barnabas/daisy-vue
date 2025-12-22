This project is a TypeScript/Vue wrapper for [daisyUI](https://daisyui.com/) components.
It uses Vue 3.5, Tailwind 4, and daisyUI 5.
There will eventually be one component here for each daisyUI component.

# Code Conventions

* Components should be single file components using TypeScript in the src/components directory.
* Use src/components/Button.vue as a pattern.
* You must only use daisyUI classes in components, not Tailwind utility classes. Demo pages may use Tailwind classes, however.
* For template markup, use PascalCase for Vue components, not kebab-case.
* In TypeScript, use upper SNAKE_CASE for constants, PascalCase for types, and camelCase for other variables and functions.
* Prioritize using record constants rather than if statements.
* For complex nested components, create child components for the main component; for example, a Tabs component may contain a TabItem child. 
* For simple blocks such as the title and content of a TabItem, use named slots or default slots.
* For each component, maintain a corresponding demo page in src/views/demos and entry in src/utils/components.ts.

# Development Environment

* Assume a dev server is always running.
* Use pnpm to manage dependencies and run scripts.
