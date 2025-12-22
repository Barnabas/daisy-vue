This project is a Vue wrapper for [daisyUI](https://daisyui.com/) components.
The main libraries in use are Vue 3.5, Tailwind 4, and daisyUI 5.

# Code Conventions

* Components should be Vue SFCs using TypeScript in the src/components directory.
* Use src/components/Button.vue as a pattern.
* You must only use daisyUI classes in components, not Tailwind utility classes. Demo pages may use Tailwind classes, however.
* Use PascalCase for components in templates, not kebab-case.
* When it makes sense, create child components for the main component; for example, a Tabs component may contain a TabItem child. However, for simple blocks, use named or default slots.
* Use pnpm to manage dependencies and run scripts.
* When creating a new component, make a corresponding demo in src/views/demos, update the routes in src/router.ts, and the navigation in src/App.vue.
* When refactoring a component, update its demo if necessary.
* After code changes are complete, run the script `pnpm format` to format the code.
