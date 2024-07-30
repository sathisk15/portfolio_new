import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Achievements from '../pages/Achievements';
import Projects from '../pages/Projects';
import Qualification from '../pages/Qualification';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'qualifications', element: <Qualification /> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
]);

export default router;
