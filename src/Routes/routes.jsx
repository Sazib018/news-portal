import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout/MainLayout";
import HomeLayout from "../Components/Layouts/HomeLayout/HomeLayout";
import About from "../Components/Pages/About/About";
import SignIn from "../Components/Pages/SignIn/SignIn";
import SignUp from "../Components/Pages/SignUp/SignUp";
import AllNews from "../Components/Categories/AllNews/AllNews";
import Arts from "../Components/Categories/Arts/Arts";
import BreakingNews from "../Components/Categories/BreakingNews/BreakingNews";
import Culture from "../Components/Categories/Culture/Culture";
import Entertainment from "../Components/Categories/Entertainment/Entertainment";
import InternationalNews from "../Components/Categories/InternationalNews/InternationalNews";
import RegularNews from "../Components/Categories/RegularNews/RegularNews";
import Sports from "../Components/Categories/Sports/Sports";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<HomeLayout></HomeLayout>,
                children:[
                    {
                        path:"/",
                        element:<AllNews></AllNews>
                    },
                    {
                        path:"/arts",
                        element:<Arts></Arts>
                    },
                    {
                        path:"/breakingNews",
                        element:<BreakingNews></BreakingNews>
                    },
                    {
                        path:"/culture",
                        element:<Culture></Culture>
                    },
                    {
                        path:"/entertainment",
                        element:<Entertainment></Entertainment>
                    },
                    {
                        path:"/internationalNews",
                        element:<InternationalNews></InternationalNews>
                    },
                    {
                        path:"/regularNews",
                        element:<RegularNews></RegularNews>
                    },
                    {
                        path:"/sports",
                        element:<Sports></Sports>
                    },
                ]
            },
            {
                path:"/about",
                element:<About></About>,
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>,
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>,
            },
        ]
    }
])