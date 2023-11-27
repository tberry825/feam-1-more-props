### Exercise 1: Console Logging Props
**Objective:** Understand how to access and use props in a React component.
1. Create a functional React component named `LoggerComponent`.
2. This component should accept a prop named `message`.
3. Inside the component, use `console.log` to log the value of `message`.
4. Render `LoggerComponent` in the main app component and pass a string as the `message` prop.
5. Open the browser's developer console to see the logged message.

### Exercise 2: Refactoring from Static to Dynamic Content
**Objective:** Learn to refactor a component to use props for dynamic content.
1. See `UserProfile`, component that displays hardcoded user information.
2. Modify `UserProfile` to accept props like `name`, `age`, and `location`.
3. Replace the hardcoded information in the render method with the props.
4. Render `UserProfile` three times in the main app component and pass different sets of user information as props.

### Exercise 3: Adding and Rendering Multiple Props
**Objective:** Handle and render multiple props in a single component.
1. Create a `ProductCard` component that represents a product with properties like `title`, `price`, and `description`.
2. Pass these properties as props from the parent component.
3. In `ProductCard`, display these props in a structured layout (like a card format).
4. Render several `ProductCard` components with different props to display a list of products.

### Exercise 4: Props in a List Component
**Objective:** Use props to dynamically generate a list of items.
1. Create a component `ItemList` that accepts an array of items as a prop.
2. Inside `ItemList`, use the `.map` function to iterate over the array and render each item.
3. Render `ItemList` in the main app component and pass an array of strings (like shopping list items).

### Exercise 5: Reading and Understanding Code with Props
**Objective:** Enhance code reading and understanding skills.
1. Look at the `BlogPost` component 
2. Answer the following
   - What props does the component expect?
   - How will these props be used in the component?
  

