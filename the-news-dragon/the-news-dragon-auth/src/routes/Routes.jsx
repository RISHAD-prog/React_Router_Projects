import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../pages/NewsLayout/NewsLayout";
import News from "../pages/NewsLayout/News/News";
import Loginlayout from "../layout/Loginlayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Register/Register";
import Terms from "../shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Loginlayout></Loginlayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0" ></Navigate>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [

            {
                path: ":id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute> <News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])
export default router;