# Dev Stack

A modern React Application that helps developers explore and build their development stack. Developers can explore different frontend, backend, database and tooling technologies. Users can add technologies to their stack, manage selections in a clean interface.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Daisy UI
- React Icons
- React Toastify
- Vite

## Key Features

1. Build Your Ideal Stack

   Users can explore technologies and add them to their stack.

2. Stack Management

   Technologies can be removed individually or all at once with instant toast notifications.

3. Responsive UI

   The application is responsive on desktop and mobile devices.

# React Questions & Answers

1. What is JSX, and why is it used in React?

   JSX is a syntax that allows us to write HTML like code inside JavaScript. It is used in React because it makes componenets easier to read and write.

2. What is the difference between props and state?

   Props are used to pass data from parent component to child component. State is used to store and manage data which can change over time.

3. What does the useState hook do, and where did you use it in this project?

   useState hook allows us to store and manage data in a component. In this project i have used useState inside Tech.tsx (src\components\Technologies\Tech.tsx) component at line 12 to manage the selectedTechs array.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

   useEffect runs code after a component renders. It helps load data without causing unnecessary re-renders. But in this project i didnot use useEffect.

5. Why does every item in a .map() list need a unique key prop?

   Unique key prop helps in identifying which item has changed, removed or added. It also prevents rendering issues.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

   Conditional rendering means showing difeerent ui based on a condition. For Example: in TechStack.tsx component when no technologies is selected it shows "Your Stack is empty" and when a stack is added it shows the stack. Also the text no technologies selected yet changes to 1 or 2 ... Technology/Technologies selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

   Data is passed from parent component to child component by using props. A child can send data back by calling a function passed down from the parent as a prop.