import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Error from './components/Error/Error.jsx';
import BackPage from './components/BackPage/BackPage.jsx';
import About from './components/About/About.jsx';
import Books from './components/Books/Books.jsx';

const router= createBrowserRouter([

   {
    path:'/',
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <BackPage></BackPage>
      },

      {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch ('https://api.itbook.store/1.0/new')
      },

      {
        path: 'about',
        element: <About></About>
      }


    ]
   }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}  ></RouterProvider>
  </React.StrictMode>,
)
