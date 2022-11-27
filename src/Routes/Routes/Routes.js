import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryCard from "../../Pages/Home/Category/CategoryCard";
import CategoryDetails from "../../Pages/Home/Category/CategoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Error from "../../Pages/Shared/Error/Error";
import SignUp from "../../Pages/SignUp/SignUp";

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
            path: '/category/:id',
            element:<CategoryDetails></CategoryDetails>
        },
    ]
}
])

export default router;