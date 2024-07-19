import React from 'react';
import avatar from '../assets/images/avatar.png';
import toggleSideBar from '../utils/toggleSideBar';

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
    { icon: 'fa-solid fa-house', title: 'Home' },
    { icon: 'fa-solid fa-circle-info', title: 'About' },
    { icon: 'fa-solid fa-gears', title: 'Skills' },
    { icon: 'fa-solid fa-history', title: 'Experience' },
    { icon: 'fa-solid fa-graduation-cap', title: 'Education' },
    { icon: 'fa-solid fa-certificate', title: 'Certification' },
    { icon: 'fa-solid fa-diagram-project', title: 'Projects' },
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
          <div key={idx}>
            <span>
              <i className={item.icon}></i>
            </span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <p className="copyright">Copyright © {new Date().getFullYear()}</p>
    </div>
  );
};

export default SideBar;
