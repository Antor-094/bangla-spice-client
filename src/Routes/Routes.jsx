import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Blog from "../Components/Blog";
import Chef_Recipes  from "../Components/Chef_Recipes ";
import NotFound from "../Components/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/recipes/:id',
                element:<PrivateRoute><Chef_Recipes></Chef_Recipes></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)
            },
        ]
    }
])

export default router;