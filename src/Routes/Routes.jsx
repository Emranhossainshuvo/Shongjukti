import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBlog from "../pages/AddBlog/AddBlog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/', 
                element: <Home />
            }, 
            {
                path: '/about', 
                element: <About />
            }, 
            {
                path:"/login",
                element: <Login />
            }, 
            {
                path: "/register",
                element: <Register />
            }, 
            {
                path: "/addBlog",
                element: <AddBlog />
            }
        ]
    },
]);