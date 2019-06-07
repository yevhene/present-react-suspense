import React from 'react';

import { imageFetcher } from './future/fetchers';

const Img = ({ src, ...props }) => {
  const image = imageFetcher.read(src);

  return (
    <img src={image} {...props} alt="" />
  );
};

export default Img;
