import {createBrowserRouter} from 'react-router';
import Login from '../Components/login/login';
import Register from '../Components/Register/register/register';
import Products from '../Components/product/products/products';
import ViewAll from '../Components/product/viewAll/viewAll';
import Viewall2 from '../Components/product/viewAll2/viewall2';
import ProductDetail from '../Components/product/item/item';

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path:"/products/viewAll",
    element: <ViewAll/>
  },
  {
    path:"/viewall2",
    element:<Viewall2/>
  },
  {
    path: "login/products",
    element: <Products />
  },
   {
    path: "register/products",
    element: <Products />
  },
  {
    path:"item/:id",
    element:<ProductDetail/>
  }
])

export default routes