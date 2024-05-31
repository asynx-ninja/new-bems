import { createBrowserRouter, Outlet } from "react-router-dom";
import EventsPage from "../pages/EventsPage";

const pages = [
    { path: '/', element: <EventsPage /> }
];

const Route = createBrowserRouter([
    {
        element: <Outlet />, //replace AnimationLayout
        errorElement: <div>Error 404</div>,
        children: pages,
    },
]);

export default Route;