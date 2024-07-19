import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'About', element: <div>About</div> },
      { path: 'Skills', element: <div>Skills</div> },
    ],
  },
]);

export default router;
