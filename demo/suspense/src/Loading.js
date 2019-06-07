import React, { Suspense } from 'react';

const Loading = ({
  fallback = (<div className="spinner"></div>),
  maxDuration = 0,
  children
}) => (
  <Suspense maxDuration={maxDuration} fallback={fallback}>
    {children}
  </Suspense>
);

export default Loading;
