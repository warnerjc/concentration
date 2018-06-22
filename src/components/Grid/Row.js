import React from 'react';

export const Row = ({ fluid, justify, children }) => (
  <div className={`row${fluid ? '-fluid' : ''} ${justify}`}>
    {children}
  </div>
);