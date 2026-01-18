import { useState } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import PostLists, { PostsLoader } from './pages/PostLists';
import PostComments from './pages/PostComments';

function App() {
  const routes = createBrowserRouter([
    {element:<AppLayout />, children:[
      {path:'/', element: <Home />},
      {path:'/posts', element: <PostLists />,loader: PostsLoader},
      {path:'/posts/:id', element: <PostComments />},
    ]}
  ])
  
  return (
   <RouterProvider router={routes}>

   </RouterProvider>
  )
}

export default App
