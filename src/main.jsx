import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.jsx'
import ShowDetails from './pages/ShowDetails/ShowDetails.jsx'
import MyBooking from './pages/MyBooking/MyBooking.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:id',
        element: <ShowDetails />,
        loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      },
      {
        path: '/my-booking',
        element: <MyBooking />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
