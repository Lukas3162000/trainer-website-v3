import {createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Trainings from "./pages/Trainings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/trainings", element: <Trainings />},
    {path: "/über-mich", element: <About />},
    {path: "/kontakt", element: <Contact />},
    {path: "*", element: <NotFound />},
]);