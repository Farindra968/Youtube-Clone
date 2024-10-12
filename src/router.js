import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import YTHome from "./Pages/Home";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route index element={<Home/>} />
    </Route>

))
return (
    <RouterProvider router={router}/>
)