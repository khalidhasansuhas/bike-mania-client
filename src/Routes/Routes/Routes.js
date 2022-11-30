import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import Allsellers from "../../Pages/Dashboard/Allsellers/Allsellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import CategoryDetails from "../../Pages/Home/Category/CategoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Error from "../../Pages/Shared/Error/Error";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
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
        },
        {
            path: '/dashboard/allusers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path: '/dashboard/allbuyers',
            element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
        },
        {
            path: '/dashboard/allsellrs',
            element:<AdminRoute><Allsellers></Allsellers></AdminRoute>
        },
        {
            path: '/dashboard/reporteditems',
            element:<AdminRoute><ReportedItems></ReportedItems></AdminRoute>
        },
    ]
}
])

export default router;