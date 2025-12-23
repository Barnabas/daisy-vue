This project is a TypeScript/Vue wrapper for [daisyUI](https://daisyui.com/) components.
It uses Vue 3.5, Tailwind 4, and daisyUI 5.
There will eventually be at least one component here for each daisyUI component.

# Code Conventions

* Components should be single file components using TypeScript in the src/components directory.
* For each component, maintain a corresponding demo page in src/views/demos and entry in src/utils/components.ts.
* Use src/components/Accordion.vue as a component pattern and src/views/demos/AccordionDemo.vue as a demo page pattern.
* You must only use daisyUI classes in components, not Tailwind utility classes. Demo pages may use Tailwind classes, however.
* For template markup, use PascalCase for Vue components, not kebab-case.
* In TypeScript, use upper SNAKE_CASE for constants, PascalCase for types, and camelCase for other variables and functions.
* Prioritize using record constants rather than if statements; for example, VARIANT_CLASSES in src/components/Tabs.vue.
* For complex nested components, create child components for the main component; for example, Tabs/TabItem or Accordion/AccordionItem.
* For simple blocks such as the title and content of a TabItem, use named slots or default slots.

## Parent-Child Component Patterns

* When parent components need to share state with children (like Accordion or Tabs), use Vue's provide/inject pattern.
* Use `useId()` to generate unique names for radio button groups or other shared identifiers.
* Parent components should use `defineModel()` for v-model support and provide the model to children.
* Match daisyUI's HTML structure closely, especially when using native form elements like radio inputs or checkboxes for state management.

## Component Props and Slots

* Use descriptive prop names that match daisyUI terminology (e.g., `variant` for style variants like 'bordered', 'lifted', 'boxed').
* Support `title` prop with a corresponding `#title` slot for flexibility in child components.
* Default slot should contain the main content of the component.
* Always check daisyUI documentation for the canonical HTML structure and adapt it to Vue patterns.

# Development Environment

* Assume a dev server is always running.
* Use pnpm to manage dependencies and run scripts.
