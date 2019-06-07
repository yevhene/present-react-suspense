import React from 'react';

import Loading from './Loading';
import Img from './Img';
import { studentFetcher } from './future/fetchers';

const Student = ({ name }) => {
  const student = studentFetcher.read(name);

  return (
    <div className="student">
      <Loading fallback={<div className="spinner avatar-spinner"></div>}>
        <Img src={student.photo} className="avatar" />
      </Loading>
      <h4>{student.name}</h4>
    </div>
  );
};

export default Student;
