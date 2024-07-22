import React from 'react';

const SocialIcons = () => {
  const socialIcons = [
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
  return (
    <div id="connect" className="connect">
      {socialIcons.map((item, idx) => (
        <i
          key={idx}
          className={item.icon}
          onClick={() => window.open(item.url, '_blank', 'noopener')}
        ></i>
      ))}
    </div>
  );
};

export default SocialIcons;
