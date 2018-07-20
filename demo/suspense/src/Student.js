import React, { Placeholder } from 'react';

import Img from './future/Img';

import { studentFetcher } from './future/fetchers';

const Student = ({ name }) => {
  const student = studentFetcher.read(name);

  return (
    <div className="student">
      <Placeholder fallback={<div className="spinner avatar-spinner"></div>}>
        <Img src={student.photo} className="avatar" />
      </Placeholder>
      <h4>{student.name}</h4>
    </div>
  );
};

export default Student;
