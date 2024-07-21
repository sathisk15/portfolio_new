import React from 'react';

const AchievementsCards = (props) => {
  const { className, heading, achievements } = props;
  return (
    <div className={`${className} row`}>
      <h3>{heading}</h3>
      {achievements.map((achievement) => (
        <div className="col-md-3 col-sm-6">
          <div
            className="certficate"
            style={{
              backgroundImage: `url(${achievement.image})`,
              ...achievement.style,
            }}
          >
            <div className="certOverlay"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsCards;
