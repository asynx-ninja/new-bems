import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/context/useAuthContext";
import LoginPage from "./home/login.page";
import EventsPage from "./admin/events/events.page";
import ViewEvent from "./admin/events/view.event";
import ArchivedEventsPage from "./admin/events/archived_events.page";

// BRGY

import ThemesPage from "./components/themes/themes.page";
import BrgyDashboard from "./brgy/dashboard/BrgyDashboard";
import BrgyEventsPage from "./brgy/events/brgy.events.page";
import BrgyViewEvent from "./brgy/events/brgy.view.event.page";
import BrgyArchivedEventsPage from "./brgy/events/brgy.archived.events.page";
import BrgyInquiries from "./brgy/inquiries/brgy.inquiries.page";
import BrgyPatawag from "./brgy/patawags/brgy.patawag.page";
import BrgyInformation from "./brgy/mange_information/brgy.info.page";
import BrgyOfficials from "./brgy/mange_information/brgy.officials.page";
import BrgyStaff from "./brgy/mange_information/brgy.staff.page";
import BrgyResidents from "./brgy/mange_information/brgy.residents.page";
import BrgyProfileSettings from "./brgy/profile_settings/brgy.profile.page";
import BrgyServicesPage from "./brgy/services/brgy.services.page";
import BrgyViewService from "./brgy/services/brgy.view.service.page";
import BrgyArchivedServicesPage from "./brgy/services/brgy.archived.services.page";

function App() {
  const { credentials } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={
                !credentials ? (
                  <LoginPage />
                ) : (
                  <Navigate
                    to={
                      credentials.user.account_type === "Barangay Staff" ||
                      credentials.user.account_type === "Barangay Admin"
                        ? "/brgy/dashboard"
                        : "/admin/dashboard"
                    }
                  />
                )
              }
            />
            <Route
              path="/municipal/events_page"
              element={credentials ? <EventsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/municipal/view_event"
              element={credentials ? <ViewEvent /> : <Navigate to="/" />}
            />
            <Route
              path="/municipal/archived_events"
              element={
                credentials ? <ArchivedEventsPage /> : <Navigate to="/" />
              }
            />

            {/* STAFF */}
            <Route
              path="/brgy/dashboard"
              element={credentials ? <BrgyDashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/brgy/events"
              element={credentials ? <BrgyEventsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/brgy/view_event"
              element={credentials ? <BrgyViewEvent /> : <Navigate to="/" />}
            />
            <Route
              path="/brgy/archived_event"
              element={
                credentials ? <BrgyArchivedEventsPage /> : <Navigate to="/" />
              }
            />

            <Route
              path="/brgy/services"
              element={credentials ? <BrgyServicesPage /> : <Navigate to="/" />}
            />

             <Route
              path="/brgy/view_service"
              element={credentials ? <BrgyViewService /> : <Navigate to="/" />}
            />
            <Route
              path="/brgy/archived_services"
              element={
                credentials ? <BrgyArchivedServicesPage /> : <Navigate to="/" />
              }
            />

            <Route
              path="/brgy/inquiries"
              element={credentials ? <BrgyInquiries /> : <Navigate to="/" />}
            />
            <Route
              path="/brgy/patawag"
              element={credentials ? <BrgyPatawag /> : <Navigate to="/" />}
            />

            <Route
              path="/brgy/brgy_info"
              element={credentials ? <BrgyInformation /> : <Navigate to="/" />}
            />
            <Route
              path="/brgy/officials"
              element={credentials ? <BrgyOfficials /> : <Navigate to="/" />}
            />
            <Route
              path="/brgy/staffs"
              element={credentials ? <BrgyStaff /> : <Navigate to="/" />}
            />
            <Route
              path="/brgy/residents"
              element={credentials ? <BrgyResidents /> : <Navigate to="/" />}
            />

            <Route
              path="/brgy/settings"
              element={
                credentials ? <BrgyProfileSettings /> : <Navigate to="/" />
              }
            />
            {/* <Route
              path="/:brgy/view_brgy_event"
              element={credentials ? <ViewStaffEvent /> : <Navigate to="/" />}
            /> */}
            {/*<Route
            path="/:brgy/archived_brgy_events"
            element={credentials ? <ArchivedStaffEventsPage /> : <Navigate to="/" />}
            /> */}
            <Route
              path="/themes"
              element={credentials ? <ThemesPage /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
