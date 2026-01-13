const Products = [
    { name: "Laptop", price: 80000, category: "Electronics" },
    { name: "Shoes", price: 3000, category: "Footwear" },
    { name: "Watch", price: 5000, category: "Accessories" },
    { name: "Phone", price: 60000, category: "Electronics" },
    { name: "Bag", price: 2000, category: "Accessories" }
];

const arr = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob'];



function App() {
    return (
        <div>
            <h2>Rendering Lists and Conditional Operators</h2>
            <h3>
                1.Ques- How does map function work in React for rendering Lists ? Provide example.
            </h3>
            {
                <>
                    <p> - Commonly used to iterate through array of React components dynamically. </p>
                    <p>  - It allows you to create an array of new React components based on original array.</p>
                 
                    <ul>
                        {Products.map(product => (
                            <li key={product.name}>
                                <strong>{product.name}</strong> - {product.price} - {product.category}
                            </li>
                        ))}
                    </ul>
                </>
                
            }
            <h3>2.Ques - How do you filter it on the basis of Electronics category.</h3>
            {
                Products.filter(product => product.category === 'Electronics').map(product => (
                    <ul>
                        <li key={product.name}>
                            <strong>{product.name}</strong> - {product.price} - {product.category}
                        </li>
                    </ul>
                ))
            }
            <h3>How can you render summary of total prices for this product list?</h3>
            {
                <li>
                    Total price is -  {Products.reduce((acc, product) => acc + product.price, 0)}
                </li>
            }
            <h3>4.Ques- Add discountedPrice key to all the products with price more than 5000 and render it.</h3>
            {
                Products.filter(product => product.price > 5000)
                    .map(product => {
                        return { ...product, discountedPrice: product.price - (product.price * (10 / 100)) };
                    })
                    .map((product) => {
                        return (
                            <li key={product.name}>
                                <strong>{product.name}</strong> - {product.discountedPrice} discounted from {product.price}
                            </li>
                        )
                    })
            }
            <h3>
                5. Question - How can you filter and render unique elements from an array using filter in React?
            </h3>
            {
                arr.filter((name, index) => {
                    return arr.indexOf(name) === index;
                })
                    .map(name => {
                        return (
                            <li style={{ listStyleType: "disc" }} key={name}>{name}</li>
                        )
                    })
            }
            <h3>Question 6: Differenece between && and ||</h3>
            {
                <>
                    <p>&& = returns true if both the conditions are true</p>
                    <p>|| = return true if any condition is true</p>
                </>
            }
            <h3>Wuestion 7: Difference between ?.(optional chaining) and ??(nullish coalescing)</h3>
            {
                <>
                    <OptionalChaining />
                    <NullishCoalescing />
                </>
            }
        </div>
    )
}

const OptionalChaining = () => {
        let user = {
            name:'John',
            address: {
                city: 'New York',
            }
        }

        return (
            <>
                <p>{user.address.city}</p>
                <p>{user?.address?.city}</p>
            </>
        )
}

const NullishCoalescing = () => {
    let userInput = null;
    let defaultValue = "This is default value";

    return <p>{userInput ?? defaultValue}</p> // if userInput is present then print userI/p else defaultvalue
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);