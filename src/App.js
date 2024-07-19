import SideBar from './components/SideBar';
import FloatingMenu from './components/FloatingMenu';
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
