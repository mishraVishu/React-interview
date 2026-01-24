function App() {

  return (
    <div>
      <h2>Redux Interview Questions in React</h2>

      <h3>Question 1. What is Redux ?</h3>
      {
        <p>Redux is a state management library oftenly used with React. It helps in mamanging the application state by centralizing the state in a single store, enabling easy debug and testing.</p>
      }

      <h3>Question 2. How does Redux state management works?</h3>
      {
        <p>
          Redux works by keeping the entire application state in a single JavaScript object called the <b>store</b>. Components dispatch <b>actions</b> (plain objects describing what happened) to signal state changes. These actions are handled by <b>reducers</b> (pure functions) that take the current state and the action, and return a new state. The store notifies all subscribed components when the state changes, so they can re-render with the new data. This unidirectional data flow makes state changes predictable and easier to debug.
        </p>
      }

      <h3>Question 3. How do you define an action in Redux?</h3>
      {
        // const incrementAction = {
        //     type: "Increment",
        //     payload: "data"
        //   }
      }

      <h3>Question 4. What is a reducer in Redux? Show an example.</h3>
      {
        // const countReducer = (state=0, action) => {
        //   switch(action.type){
        //     case "Increment":
        //       return state += 1;
        //     case "Decrement": 
        //       return state-1;
        //     default:
        //       return state
        //   }
        // }
      }

      <h3>Question 5. How to create a redux store?</h3>
      {
        <>
        <pre style={{background:'#f4f4f4', padding:'1rem'}}>
          {
          `// Modern Redux (Redux Toolkit) example:
            import { configureStore, createSlice } from '@reduxjs/toolkit';

            // Create a slice
            const counterSlice = createSlice({
              name: 'counter',
              initialState: 0,
              reducers: {
                increment: state => state + 1,
                decrement: state => state - 1
              }
            });

            // Create the store
            const store = configureStore({
              reducer: counterSlice.reducer
            });
          `}
        </pre>
        <p style={{fontSize:'0.95em', color:'#555'}}>Redux Toolkit is the recommended way to write Redux logic. It simplifies store setup and reduces boilerplate.</p>
        </>
      }

      <h3>Question 6. How do you use Redux state and dispatch actions in a React component?</h3>
      {
        <>
        <pre style={{background:'#f4f4f4', padding:'1rem'}}>
          {`// In your React component:
          import { useSelector, useDispatch } from 'react-redux';
          import { counterSlice } from './path/to/slice';

          function Counter() {
            const count = useSelector(state => state); // or state.counter if combined reducers
            const dispatch = useDispatch();

            return (
              <div>
                <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
              </div>
            );
          }
          `}
        </pre>
        <p style={{fontSize:'0.95em', color:'#555'}}>Use <b>useSelector</b> to read state and <b>useDispatch</b> to dispatch actions from your React components.</p>
        </>
      }
    </div>
  )
}

export default App
