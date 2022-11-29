import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import CategoryDetails from "../../Pages/Home/Category/CategoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Error from "../../Pages/Shared/Error/Error";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
{
    path:'/',
    errorElement:<Error></Error>,
    loader: async ()=>{

        return  fetch('http://localhost:5000/bikes')
      },
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/home',
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
        {
            path: '/blog',
            element:<Blog></Blog>
        },
        {
            path: '/category/:id',
            element:<PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>
        },
    ]
},
{
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
        {
            path: '/dashboard',
            element:<MyOrders></MyOrders>
        }
    ]
}
])

export default router;