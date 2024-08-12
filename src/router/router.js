import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Loader = lazy(() => import('../components/Loader'));
const App = lazy(() => import('../App'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Skills = lazy(() => import('../pages/Skills'));
const Achievements = lazy(() => import('../pages/Achievements'));
const Projects = lazy(() => import('../pages/Projects'));
const Qualification = lazy(() => import('../pages/Qualification'));

const Wrapper = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Wrapper>
        <App />
      </Wrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <Wrapper>
            <Home />
          </Wrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <Wrapper>
            <About />
          </Wrapper>
        ),
      },
      {
        path: 'skills',
        element: (
          <Wrapper>
            <Skills />
          </Wrapper>
        ),
      },
      {
        path: 'qualifications',
        element: (
          <Wrapper>
            <Qualification />
          </Wrapper>
        ),
      },
      {
        path: 'achievements',
        element: (
          <Wrapper>
            <Achievements />
          </Wrapper>
        ),
      },
      {
        path: 'projects',
        element: (
          <Wrapper>
            <Projects />
          </Wrapper>
        ),
      },
    ],
  },
]);

export default router;
