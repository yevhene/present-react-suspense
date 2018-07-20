import React from 'react';

const cache = { status: false };

function wait(time) {
  if (cache.status) {
    return;
  }

  cache.status = true;

  throw new Promise((resolve) => setTimeout(() => resolve(), time));
}

function SlowContent(props) {
  wait(1500);
  return <h3>Slow Content</h3>;
}

export default SlowContent;
