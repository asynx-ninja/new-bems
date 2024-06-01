import { createBrowserRouter, Outlet } from "react-router-dom";
import EventsPage from "../admin/events/events.page";
import ViewEvent from "../admin/events/view.event";
import ServicesPage from "../admin/services/services.page";
import ArchivedEventsPage from "../admin/events/archived_events.page";
import Dashboard from "../admin/dashboard/dashboard";
import StaffEventsPage from "../staff/brgy_events/staff.events.page";
import ViewStaffEvent from "../staff/brgy_events/view.staff.event";
import ArchivedStaffEventsPage from "../staff/brgy_events/archived.events";
const pages = [
    { path: '/', element: <Dashboard /> },
    { path: '/events_page', element: <EventsPage /> },
    { path: '/view_event', element: <ViewEvent /> },
    { path: '/archived_events', element: <ArchivedEventsPage /> },
    { path: '/staff_events_page', element: <StaffEventsPage /> },
    { path: '/view_staff_event', element: <ViewStaffEvent /> },
    { path: '/archived_staff_events', element: <ArchivedStaffEventsPage /> },
];

const Route = createBrowserRouter([
    {
        element: <Outlet />, //replace AnimationLayout
        errorElement: <div>Error 404</div>,
        children: pages,
    },
]);

export default Route;