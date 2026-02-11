import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AIInterview from './pages/AIInterview';
import CareerAdvisor from './pages/CareerAdvisor';
import ProtectedRoute from './components/ProtectedRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'jobs', element: <Jobs /> },
      { path: 'jobs/:id', element: <JobDetails /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },

      // ---- PROTECTED ROUTES BELOW ----
      {
        element: <ProtectedRoute />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'ai-interview', element: <AIInterview /> },
          { path: 'career', element: <CareerAdvisor /> },
        ],
      },
    ],
  },
]);
