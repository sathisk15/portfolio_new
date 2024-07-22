import React from 'react';
import Wrapper from './Wrapper';

const AchievementsPopup = ({ popup, setPopup }) => {
  return (
    <Wrapper style={{ position: 'absolute', display: 'flex', margin: '0px' }}>
      <div className="popupWrapper row">
        <div className="popup col-10 col-sm-10 col-md-6">
          <div className="header">
            <i
              onClick={() => setPopup({ show: false })}
              className="fa-solid fa-x"
            ></i>
          </div>
          <div className="body">
            <img src={popup.image} alt="Certficate" />
          </div>
          <div className="footer">
            <button onClick={() => setPopup({ show: false })}>close</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AchievementsPopup;
