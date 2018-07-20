import React, { Placeholder } from 'react';

const Loading = ({
  fallback = (<div className="spinner"></div>),
  delayMs = 0,
  children
}) => (
  <Placeholder delayMs={delayMs} fallback={fallback}>
    {children}
  </Placeholder>
);

export default Loading;
