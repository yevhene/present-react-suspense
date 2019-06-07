import React from 'react';

import Loading from './Loading';
import Img from './Img';

const Course = ({ course }) => {
  return (
    <section className="course" key={course.name}>
      <Loading fallback={<div className="spinner cover-spinner"></div>}>
        <Img src={course.cover} className="cover" />
      </Loading>

      <h2>{course.name} <i>({course.teacher})</i></h2>
    </section>
  );
};

export default Course;
