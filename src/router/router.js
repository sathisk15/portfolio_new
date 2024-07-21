import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Achievements from '../pages/Achievements';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'edu', element: <div>edu</div> },
      { path: 'exp', element: <div>exp</div> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'projects', element: <div>projects</div> },
    ],
  },
]);

export default router;
