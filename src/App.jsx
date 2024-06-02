import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/context/useAuthContext';
import LoginPage from './home/login.page';
import EventsPage from './admin/events/events.page';
import ViewEvent from './admin/events/view.event';
import ArchivedEventsPage from './admin/events/archived_events.page';
import StaffEventsPage from './staff/brgy_events/events.page';
import ThemesPage from './components/themes/themes.page';

function App() {
  const { credentials } = useAuthContext();

  return (
    <div className='App'>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={!credentials ? <LoginPage /> : <EventsPage />}
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
              element={credentials ? <ArchivedEventsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/:brgy/events_page"
              element={credentials ? <StaffEventsPage /> : <Navigate to="/" />}
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
              path="/:brgy/themes"
              element={credentials ? <ThemesPage /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
