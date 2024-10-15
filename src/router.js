import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Mainlayout from "./layout/Mainlayout";
import YoutubeVideoData from "./Pages/Youtube";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Mainlayout/>}>
        <Route index element={<Home />} />
        <Route path='/youtubevideodata' element={<YoutubeVideoData />}/>
    </Route>

))
return (
    <RouterProvider router={router}/>
)