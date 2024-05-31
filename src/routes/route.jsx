import { createBrowserRouter, Outlet } from "react-router-dom";
import EventsPage from "../admin/events/events.page";
import ViewEvent from "../admin/events/view.event";
import ServicesPage from "../admin/services/services.page";
import ArchivedEventsPage from "../admin/events/archived_events.page";

const pages = [
    { path: '/', element: <EventsPage /> },
    { path: '/view_event', element: <ViewEvent /> },
    { path: '/archived_events', element: <ArchivedEventsPage /> }
];

const Route = createBrowserRouter([
    {
        element: <Outlet />, //replace AnimationLayout
        errorElement: <div>Error 404</div>,
        children: pages,
    },
]);

export default Route;