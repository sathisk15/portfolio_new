import React from 'react';

const Loader = () => {
  return (
    <div className="loader w-100 h-100 d-flex justify-content-center align-items-center">
      <div
        class="spinner-border text-primary"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
