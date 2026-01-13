function App() {
    return (
        <div>
            <h3>Question 1 - Explain class based components in React?</h3>
            {
                // way to create components using ES6 classes.
                // older way to create classes as compared to functional components
                // can contain state and access to various lifecycle methods which executes at various points ina component life cycle.
                <Counter />
            }
            <h3>Question 2 - Explain constructor and super keywords here</h3>
            {
                // Constructor -  
                // 1.Initializing State: It's used to initialize the component's state by assigning an initial value to this.state;
                // 2. Binding event handlers or methods: It's also used to bind event handlers or methods to component instance .

                //Super - 
                // used inside constructor to call the constructor of parent class.
                // Ensures that the component's props are correctly initialized and available within the component.

            }
            <h3>Question 3 - Explain Component lifecycle methods by adding them to this Counter app</h3>
            {

            }
            <h3>Question 4 - What are function based components and What are hooks? Explain any two of them.</h3>
            {
                /**
                 * Hooks are functions that allow functional components to use state, lifecycle methods previously available only in class based components.
                 */
                <PhotoGallery />
            }
            <h3>Question 5. Convert this class based component to Function based componentand explain it.</h3>
            {
                <DataList />
            }
            <h3>Question 6. Explain state vs Props in both class and function based component</h3>
            {
                /**
                 * Props - 
                 *          Read only data passed from a parent component to a child component.
                 *          immutable and are used to communicate between components.
                 * 
                 * State - 
                 *          mutable and represents the internal state of an compoenent and its managed and controlled by         the compoenent itself.
                 */

                <>
                    <ParentComponent />
                    <Parent />
                </>
            }
            <h3>Question 7. What is a children prop?</h3>
            {
                /**
                 * - The children prop in React is a  special prop which allows us to pass content(text, components, elements) b/w opening and closing tag.
                 * - Allows you to build reusable components that can display any nested content.
                 */
                <>
                    <Card>This is card one.</Card>
                    <Card>This is card two</Card>
                </>
            }
            <h3>Question 8. Difference types of components.</h3>
            <h4>1. What are smart/stateful/container components?</h4>
            {
                <p>Compoenents that manages ststes, business logic and passing then dowm to reperestational components are smart, stateful and container components. </p>
            }
            <h4>2. What are dumb, stateless,presentational components ?</h4>
            {
                <p>Compoenents which do not have thier own states, business logica nd just displaying data based on props received is known as stateless, dumb or presentational components. </p>
            }
            <h4>3. What are Higher order compnents(HOC) ?</h4>
            {
                <>
                    <p>Components which take another component as an argument and returns enhanced version of that. for this we use with as Logger.</p>
                    <FeatureAuthCompoennet />
                </>
            }
            <h4>4. What are pure components?</h4>
            {
                <>
                <p>Optimizes the rendering performance of components by reducing the un-necessary re-render.</p>
                <Counter />
                </>
            }
            <h4>5. What are controlled components?</h4>
            {
                <>
                    <p>Value of input field is controlled by the React through state</p>
                    <ControlledComponent />
                </>
            }
            <h4>6. what are untrolled components?</h4>
            {
                <>
                    <p>input field maintains its own value through the DOM.
                    React doen't contol the value but it can still interact with the input field value using refs.</p>
                    <UnControlledComponent />
                </>
            }
        </div>
    )
}

class Counter extends React.Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        // Called before every render, both on mount and update
        // Use to update state based on props (rarely needed)
        // Example: reset count if a prop is set
        if (nextProps.reset) {
            return { count: 0, count1: 0 };
        }
        return null; // No state update
    }

    constructor(props) {
        super(props);
        this.state = {
            count: 0, 
            count1: 0
        };
        // Good place to initialize state and bind methods
    }

    handleCounter = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleCounter1 = () => {
        this.setState({ count1: this.state.count1 + 1 });
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Called before every re-render. Return false to skip re-render.
        // Example: Only re-render if count or count1 changes
        return nextState.count !== this.state.count || nextState.count1 !== this.state.count1;
    }

    componentDidMount() {
        // Called once after initial render. Good for network requests, subscriptions, timers
        console.log('Component Mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        // Called after every update (state or props change)
        // Compare previous and current state/props before running side effects
        if (prevState.count !== this.state.count)
            console.log('Component Updated')
    }

    componentWillUnmount() {
        // Called just before component is removed from DOM. Good for cleanup (timers, subscriptions)
        console.log('Component unmounted');
    }

    render() {
        // Pure function: returns JSX. No side effects here.
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleCounter}>Increment</button>
                <button onClick={this.handleCounter1}>Increment1</button>
                <MemoizedClassComponent />
                <MemoizedFunction />
            </div>
        )
    }
}

const PhotoGallery = () => {
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await res.json();
        setPhotos(photos);
        console.log(photos);

    }

    return (
        <div>
            <h3>Photo Gallery</h3>
            {photos.splice(0, 5).map(photo => {
                return <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
            })}
        </div>
    )
}

const DataList = () => {
    const [state, setState] = React.useState({
        data: [],
        isLoading: true,
        error: null
    });

    React.useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            setState(prevState => ({ ...prevState, data: posts, isLoading: false }));
        } catch (error) {
            setState(prevState => ({ ...prevState, error: 'Error fetching posts', isLoading: false }));
        }
    };

    if (state.isLoading) {
        return <p>Loading...</p>;
    }

    if (state.error) {
        return <p>{state.error}</p>;
    }

    return (
        <div>
            <h3>DataList</h3>
            <ul>
                {state.data.slice(0, 5).map(data => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
        </div>
    );
}

// Parent component(Class based)
class ParentComponent extends React.Component {
    render() {
        return <ChildComponent name="John" age="34" />
    }
}

//Child Component
class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name} , Age:{this.props.age}</p>
            </div>
        )
    }
}

function Parent() {
    return (
        <Child name="john" age="35"></Child>
    )
}

function Child(props) {
    const { name, age } = props;
    return (
        <div>
            <p>Name:{name}, Age:{age}</p>
        </div>
    )
}

// children prop
function Card(props) {
    return <div style={{ color: 'red' }}>{props.children}</div>
}

// Higher order component
const withLogger = (WrappedCompoenet) => {
    return function WithLogger(props) {
        const login = () => {
        console.log('loggedIn successfully.')
    };

    const logout = () => {
        console.log('loggedout successfuly');
    };

    return (
        <div>
            <WrappedCompoenet {...props} login={login} logout={logout} />
        </div>
    )
    }
}

const FeatureComponent = (props) => { 
    return(
        <>
            <button onClick={props.login}>Login</button>
            <button onClick={props.logout}>Logout</button>
        </>
    )
}

const FeatureAuthCompoennet = withLogger(FeatureComponent);

//Pure compoenents consider Counter example

class MemoizedClassComponent extends React.PureComponent {
    constructor(props){
        super(props)
        console.log('Memoized class compoenent');
    }
    
    render() {
        return (
            <div>
                MemoizedClassComponent (PureComponent Example)
            </div>
        );
    }
}

const MemoizedFunction = React.memo(() => {
    console.log('Memoized fn component');
    
    return(
        <div>Memoizedfunction based compoennet</div>
    )
});

//Controlled components
const ControlledComponent = () => {
    const [value , setValue] = React.useState('Vishu');

    const onValChangeHandler = (e) => {
        const val = e.target.value;
        setValue(val);
        console.log(value);
    }

    return(
        <div>
            <input type="text" value={value} onChange={(e) => onValChangeHandler(e)}></input>
            <p>{value}</p>
        </div>
    )
}

const UnControlledComponent = () => {
    const val = React.useRef(null);

    const handleClick = () => {
        console.log(val.current.value);
    }

    return (
        <div>
            <input type="text" ref={val}></input>
            <button onClick={handleClick}>Get Value</button>
            {/*<p>{val?.current?.value}</p> (this will not worl because its not state so it will not change isn real time. ) */ } 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);