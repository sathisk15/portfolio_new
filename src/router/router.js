import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'About', element: <About /> },
      { path: 'Skills', element: <div>Skills</div> },
    ],
  },
]);

export default router;
