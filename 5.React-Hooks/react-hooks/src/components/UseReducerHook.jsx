import React, { useReducer } from 'react'

const UseReducerHook = () => {
    const countReducer = (state,action) => {
        switch (action.type){
            case "Increment":
                return {
                    ...state,
                    count: state.count + action.payload
                }
            case "Decrement":
                return {
                    ...state,
                    count: state.count - action.payload
                }
            default:
                return state;
        }
    }

    const initialCount = {
        count:0,
    }

    const [state, dispatch] = useReducer(countReducer,initialCount);
  return (
    <>
    <h3>useReducer Hook</h3>
    <h4>Question 1. what is useReducer Hook in React ?</h4>
    {
        <>
            <p>- It is a hook used for managing complex state logic using reducer function.</p>
            <p>- Alternative to useState and provide a way to update state based on defined actions.</p>
            <h5>Count: {state.count}</h5>
            <button onClick={()=>dispatch({type:'Increment', payload: 5})}>Increment</button>
            <button onClick={() => dispatch({type:'Decrement', payload: 5})}>Decrement</button>
        </>
    }
    <h4>Question 2. When should you use useReducer instaed of useState ?</h4>
    {
        <>
        <p> - When managing complex state transtitions or logic that involves multiple sub-values.</p>
        </>
    }
    <h4>Question 3. Give Example of useReducer for Shopping cart state management.</h4>
    {
        <ShoppingCart />
    } 
    </>
  )
};

const products = [
    {id:1, name:'Product 1'},
    {id:2, name:'Product 2'},
    {id:3, name:'Product 3'}
]

const initialState = {
    cart:[]
}

const cartReducer = (state, action) => {
    switch (action.type){
        case "Add Item":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "Remove Item": 
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case "Clear Cart":
            return {
                ...state,
                cart: []
            }
    }
}

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <div>
            <ul>
                {state.cart.map(item=>(
                    <>
                        <li key={item.id}>{item.name} <button onClick={() => {dispatch({type:'Remove Item', payload: item})}}>Remove Item</button></li>
                    </>)
                )}
            </ul>
            {products.map(prod => <button key={prod.id} onClick={() => {dispatch({type:'Add Item', payload:prod})}}>{prod.name}</button>)}
            <button onClick={() => {dispatch({type:'Clear Cart'})}}>Clear Cart</button>
        </div>
    )
}

export default UseReducerHook