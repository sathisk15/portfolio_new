import React from 'react';

const Wrapper = ({ children, style }) => {
  return (
    <div className="wrapper" style={style}>
      {children}
    </div>
  );
};

export default Wrapper;
