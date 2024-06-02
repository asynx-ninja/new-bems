import { createBrowserRouter, Outlet } from "react-router-dom";
import EventsPage from "../admin/events/events.page";
import ViewEvent from "../admin/events/view.event";
import InquiryPage from "../admin/inquiries/inquiry.page";
import ServicesPage from "../admin/services/services.page";
import ArchivedEventsPage from "../admin/events/archived_events.page";
import Dashboard from "../admin/dashboard/dashboard";
import StaffEventsPage from "../staff/brgy_events/events.page";
import ViewStaffEvent from "../staff/brgy_events/view.event";
import ArchivedStaffEventsPage from "../staff/brgy_events/archived.events";
import ThemesPage from "../components/themes/themes.page";

const pages = [
    { path: '/', element: <Dashboard /> },
    { path: '/events_page', element: <EventsPage /> },
    { path: '/view_event', element: <ViewEvent /> },
    { path: '/view_inquiry', element: <InquiryPage /> },
    { path: '/archived_events', element: <ArchivedEventsPage /> },
    { path: '/:brgy/events_page', element: <StaffEventsPage /> },
    { path: '/view_brgy_event', element: <ViewStaffEvent /> },
    { path: '/archived_brgy_events', element: <ArchivedStaffEventsPage /> },
    { path: '/themes', element: <ThemesPage /> }
];

const Route = createBrowserRouter([
    {
        element: <Outlet />, //replace AnimationLayout
        errorElement: <div>Error 404</div>,
        children: pages,
    },
]);

export default Route;