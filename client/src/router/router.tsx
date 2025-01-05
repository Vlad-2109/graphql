import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/home/Home';
import { Settings } from '../pages/settings/Settings';
import { Recommendation } from '../pages/recommendation/Recommendation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'settings', element: <Settings /> },
      { path: 'recommendation', element: <Recommendation /> },
    ],
  },
]);
