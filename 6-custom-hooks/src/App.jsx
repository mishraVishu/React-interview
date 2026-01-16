import Counter from './components/Counter';
import PostDataUsingPOSTMethod from './components/PostDataUsingPOSTMethod';
import PostsList from './components/postsList';
import useWindowSize from './hooks/useWindowSize';
import DebouncedInput from './components/debouncedInput';
import UserInfo from './components/UserInfo';
import IntersectionElement from './components/IntersectionElement';


function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Custom Hooks Interview Questions</h2>
      <h3>What are custom hooks?</h3>
      {
        <>
          <p>Custom hooks in React are functions that allows you to extract and reuse stateful logic from components.</p>
          <Counter />
        </>
      }
      <h3>Why do we use custom hooks? </h3>
      {
        <>
          <strong>Reuse stateful logic:</strong>
          <p>Custom hooks let you extract and share logic (like fetching data, handling forms, timers, etc.) across multiple components, without repeating code.</p>

          <strong>Keep components clean:</strong>
          <p>By moving complex logic into a custom hook, your component code stays focused on rendering UI, making it easier to read and maintain.</p>

          <strong>Encapsulate side effects:</strong>
          <p>You can group related state and effects together in a hook, keeping concerns separated.</p>

          <strong>Share logic between function components:</strong>
          <p>Unlike mixins or HOCs, custom hooks work naturally with function components and hooks.</p>

          Summary:
          Custom hooks help you write DRY (Don’t Repeat Yourself), modular, and maintainable React code by reusing and organizing stateful logic outside of components.
        </>
      }
      <h3>Build a custom hook to efficiently track and update window dimensions dynamically.</h3>
      {
        <>
          <p>Width: {width}</p>
          <p>Height: {height}</p>
        </>
      }
      <h3>Build a custom hook to fetch data from a given URL and handle loadinga nd error states as well.</h3>
      {
        <>
          <PostsList />
          <PostDataUsingPOSTMethod />
        </>
      }
      <h3>Build a custom hook that delays updating a value until a specified time has passed afgter the last change?</h3>
      {
        <>
          <DebouncedInput />
        </>
      }
      <h3>Build a custom hook that stores and retrieves data from the browser localstorage.</h3>
      {
        <>
          <UserInfo />
        </>
      }
      <h3>Build a custom hook that observes when an element comes into the viewport.</h3>
      {
        <>
          <IntersectionElement />
        </>
      }
    </div>
  )
};

export default App;