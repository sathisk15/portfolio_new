import React from 'react';
import avatar from '../assets/images/avatar.png';
import toggleSideBar from '../utils/toggleSideBar';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const urls = [
    {
      icon: 'fa-brands fa-linkedin',
      url: 'https://www.linkedin.com/in/rsathisk15/',
    },
    {
      icon: 'fa-brands fa-github',
      url: 'https://github.com/sathisk15',
    },
    {
      icon: 'fa-brands fa-hackerrank',
      url: 'https://www.hackerrank.com/profile/rsathisk15',
    },
  ];
  const menus = [
    { icon: 'fa-solid fa-house', title: 'Home', path: '/' },
    { icon: 'fa-solid fa-circle-info', title: 'About', path: '/about' },
    { icon: 'fa-solid fa-gears', title: 'Skills', path: '/skills' },
    { icon: 'fa-solid fa-history', title: 'Experience', path: '/exp' },
    { icon: 'fa-solid fa-graduation-cap', title: 'Education', path: '/edu' },
    {
      icon: 'fa-solid fa-certificate',
      title: 'Achievements',
      path: '/achievements',
    },
    {
      icon: 'fa-solid fa-diagram-project',
      title: 'Projects',
      path: '/projects',
    },
  ];
  const close = () => toggleSideBar();
  return (
    <div id="sidebar" className="sidebar">
      <div className="close">
        <button onClick={close}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="connect">
        {urls.map((item, idx) => (
          <i key={idx} className={item.icon}></i>
        ))}
      </div>
      <div className="options">
        {menus.map((item, idx) => (
          <NavLink to={item.path} key={idx}>
            {({ isActive }) => (
              <div
                key={idx}
                onClick={close}
                className={isActive ? 'active' : ''}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <p>{item.title}</p>
              </div>
            )}
          </NavLink>
        ))}
      </div>
      <p className="copyright">Copyright © {new Date().getFullYear()}</p>
    </div>
  );
};

export default SideBar;
