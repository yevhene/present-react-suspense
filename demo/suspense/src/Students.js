import React, { Placeholder } from 'react';

import Student from './Student';

import { studentsFetcher } from './future/fetchers';

const Students = ({ group }) => {
  const students = studentsFetcher.read(group);

  return (
    students.map((student) =>
      <div key={student.name}>
        <Placeholder fallback={<div className="spinner"></div>}>
          <Student name={student.name} />
        </Placeholder>
      </div>
    )
  );
};

export default Students;
