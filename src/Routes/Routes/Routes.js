import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Error from "../../Pages/Shared/Error/Error";

const router = createBrowserRouter([
{
    path:'/',
    errorElement:<Error></Error>,
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
    ]
}
])

export default router;