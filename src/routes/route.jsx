import { createBrowserRouter, Outlet } from "react-router-dom";
import EventsPage from "../admin/events/events.page";
import ViewEvent from "../admin/events/view.event";
import ServicesPage from "../admin/services/services.page";
import ArchivedEventsPage from "../admin/events/archived_events.page";
import Dashboard from "../admin/dashboard/dashboard";
import StaffEventsPage from "../staff/brgy_events/staff.events.page";
import ViewStaffEvent from "../staff/brgy_events/view.staff.event";
import ArchivedStaffEventsPage from "../staff/brgy_events/archived.events";
import PatawagPage from "../staff/patawags/patawag.page";
import StaffInquiries from "../staff/inquiries/staff.inquiries";
import StaffBrgyOfficials from "../staff/mange_information/brgy_officials/staff.brgy.officials";
import BrgyStaffManagement from "../staff/mange_information/brgy_staffs/brgy.staff.management";
import BrgyResidentsManagement from "../staff/mange_information/brgy_residents/brgy.residents.management";
import StaffBrgyInformation from "../staff/mange_information/brgy_information/staff.brgy.information";
import StaffProfileSettings from "../staff/profile_settings/staff.profile.settings";
import ThemesPage from "../components/themes/themes.page";

const pages = [
    { path: '/', element: <Dashboard /> },
    { path: '/events_page', element: <EventsPage /> },
    { path: '/view_event', element: <ViewEvent /> },
    { path: '/archived_events', element: <ArchivedEventsPage /> },
    { path: '/staff_events_page', element: <StaffEventsPage /> },
    { path: '/view_staff_event', element: <ViewStaffEvent /> },
    { path: '/archived_staff_events', element: <ArchivedStaffEventsPage /> },
    { path: '/patawags_page', element: <PatawagPage /> },
    { path: '/staff_inquiries', element: <StaffInquiries /> },
    { path: '/brgy_officials', element: <StaffBrgyOfficials /> },
    { path: '/brgy_staff_management', element: <BrgyStaffManagement /> },
    { path: '/brgy_residents_management', element: <BrgyResidentsManagement /> },
    { path: '/staff_brgy_information', element: <StaffBrgyInformation /> },
    { path: '/staff_profile_settings', element: <StaffProfileSettings /> },
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