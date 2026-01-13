import { useState } from "react";

const UseState = () => {
    const [count , setCount] = useState(0);
    const [value , setValue] = useState('Vishu');
    const [userData, setUserData] = useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const handleIncrement=()=>{
        // setCount(count+1); 0+1
        // setCount(count+1); 0+1
        // setCount(count+1); 0+1
        // it will not work because setCount is async is nature and val of count is 0 here but we can achieve the motive of +3 by using callback inside setState

        setCount((prevCount)=>prevCount+1);
        setCount((prevCount)=>prevCount+1);
        setCount((prevCount)=>prevCount+1);
    };

    const onValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleValue = (e) => {
        const {name,value} = e.target;
        console.log(name,value);
        setUserData({...userData , [name]:value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userData);
    }

  return (
    <div>
        <h3>useState Hook</h3>
        <h4>Question 1. Explain useState Hook in React</h4>
        {
            <>
                <p>useState is a hook in React that allows functional components to manage state by declaring state variables and providing a function to update them. </p>
                <span>Count: {count}</span>
                <button onClick={() => setCount((prev) => prev+1) }>Increment</button>
                <button onClick={() => setCount(count+1) }>Increment</button>
            </>
        }
        <h4>Question 2. What is the o/p and How to fix this?</h4>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment by 3</button>
        <h4>Question 3. What is two way data binding and how can you achieve it in React?</h4>
        {
            <>
                <p>- It a  concept that allows synchronization of data bwetween model(state) and view(UI) in both directions.</p>
                <p>- You can achieve it by combining state management with controlled components.</p>
                <input type="text" value={value} onChange={(e)=> onValueChange(e)}/>
                <span>Value: {value}</span>
            </>
        }
        <h4>Question 4. Build a Form containing First name, Last name and email. Use only one state to manage all the fields.</h4>
        {
            <form onSubmit={(e) => submitHandler(e)}>
                <div>
                    <label>First Name: </label>
                    <input type="text"  name="firstName"  onChange={(e) => handleValue(e)}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={(e) => handleValue(e)}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" onChange={(e) => handleValue(e)}/>
                </div>
                <button>Submit</button>
            </form>
        }
    </div>
  )
}

export default UseState;