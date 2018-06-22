import React from 'react';

export const Col = ({ size, children }) => {
  return (
  <div className={`text-center ${size.split(" ").map(size => "col-" + size).join(" ")} mb-5`}>
    {children}
  </div>
  )
};