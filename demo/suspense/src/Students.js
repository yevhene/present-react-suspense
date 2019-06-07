import React from 'react';

import Loading from './Loading';
import { studentsFetcher } from './future/fetchers';

import Student from './Student';

const Students = ({ group }) => {
  const students = studentsFetcher.read(group);

  return (
    students.map((student) =>
      <div key={student.name}>
        <Loading>
          <Student name={student.name} />
        </Loading>
      </div>
    )
  );
};

export default Students;
