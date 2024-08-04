import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Xtensions from './pages/Xtensions.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart';
//import { CartProvider } from './CartContext.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import Care from './pages/Care.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index: true,
        element: <Home />
      }
    ,{
      path:'xtensions',
      element:<Xtensions/>
    },
    {
      path: 'cart',
      element: <Cart />, 
    },
    {
      path: 'care',
      element: <Care />, 
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
