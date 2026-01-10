

function Counter () {
    const [count, setCount] = React.useState(0);
    return(
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => {setCount(count+1)}}>Increment</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Counter />);