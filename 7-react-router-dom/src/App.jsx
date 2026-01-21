import './App.css';
import { BrowserRouter, createBrowserRouter,Routes, Route, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import PostLists, { PostsLoader } from './pages/PostLists';
import PostComments from './pages/PostComments';
import Headers from './components/Headers';
import Error from './components/Error';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RequireAuth from './components/RequireAuth';
import Products from './components/Products';
import ErrorComponent from './components/ErrorComponent';

function App() {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />, 
      errorElement: <Error />,
      children: [
        { path: '/auth', element: <Home /> ,children: [
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <SignUp />}
        ]},
        { 
          path: '/posts', 
          element:<RequireAuth>
                    <PostLists />
                  </RequireAuth>, 
        loader: PostsLoader,
        errorElement:<ErrorComponent />
        },
        { path: '/posts/:id', element: <PostComments /> },
        { path:'/products', element: <Products /> }
      ]
    }
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
    // Ques1 - Convert  modern to older routes
    // <BrowserRouter>
    //  <Headers />
    //   <Routes>
    //     <Route index element= {<Home />} />
    //     <Route path='/posts' element = {<PostLists />} />
    //     <Route path='/posts/:id' element = {<PostComments />} />
    //   </Routes>
    // </BrowserRouter>

    //Ques2 - Create a login form and onSubmit route them to a different page.
    // refer - Home.jsx

    //Ques3 - Design a Error/ 404 Not found page for not found routes

    //Ques4 - Give Example of nested route in react-router dom

    //Ques5 - Create protected Route which redirects to a login page

    //Ques 6 - How will you design a product page where user selects the specs and shares the link to the opthere users, it opens exact way as it was for original user?

  )
}

export default App
