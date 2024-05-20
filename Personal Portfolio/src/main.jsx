import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import Projects from './routes/Projects.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {path: "/About", element: <About/>},
  {path: "/Contact", element: <Contact/>},
  {path: "/Projects", element: <Projects/>}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
