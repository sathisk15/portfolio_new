import React, { useState } from 'react';

const Skill = ({ icon, name, percent, idx }) => {
  const [percentage, setPercentage] = useState(percent/2);

  setTimeout(() => {
    if (percentage < percent) setPercentage(percentage + 1);
  }, 20);

  return (
    <div className="skill d-flex my-3" key={idx}>
      <div className="icon" style={{ backgroundImage: `url(${icon})` }}></div>
      <div className="description">
        <div className="w-100 d-flex justify-content-between mb-1">
          <span>{name}</span>
          <span>{percentage}%</span>
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar"
            style={{ width: percentage + '%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
