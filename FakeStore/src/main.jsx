import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Cart from './components/Cart.jsx'
import ProductPage from './components/ProductPage.jsx'
import Product from './components/Product.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter([
  {
    path:'/',
    element : <App/>,
    children :
    [
      {
        path:"/",
        element:<Product/>
      },
      {
        path:"/dashboard" ,
        element : <Dashboard/>
      },
      {
        path:"/cart" ,
        element : <Cart/>
      },
      {
        path:"/products/:id" ,
        element : <ProductPage/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>,
  </Provider>
)
