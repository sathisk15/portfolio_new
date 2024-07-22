import React from 'react';

const AchievementsCards = (props) => {
  const { className, heading, achievements, setPopup } = props;
  return (
    <div className={`${className} row`}>
      <h4>{heading}</h4>
      {achievements.map((achievement, idx) => (
        <div className="col-md-3 col-sm-6" key={idx}>
          <div
            className="certficate"
            style={{
              backgroundImage: `url(${achievement.image})`,
              ...achievement.style,
            }}
          >
            <div className="certOverlay">
              <div className="btns">
                {achievement.url && (
                  <div
                    className="urlButton"
                    onClick={() =>
                      window.open(achievement.url, '_blank', 'noopener')
                    }
                  >
                    <i className="fa-solid fa-link"></i>
                  </div>
                )}
                <div
                  className="viewButton"
                  onClick={() =>
                    setPopup({ show: true, image: achievement.image })
                  }
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsCards;
