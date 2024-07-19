import React from 'react';
import toggleSideBar from '../utils/toggleSideBar';

const FloatingMenu = () => {
  const showMenu = () => toggleSideBar();
  return (
    <div className="floatingMenu">
      <button onClick={showMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
};

export default FloatingMenu;
