import SideBar from './pages/SideBar';
import FloatingMenu from './pages/FloatingMenu';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Outlet />
      <FloatingMenu />
    </div>
  );
}

export default App;
