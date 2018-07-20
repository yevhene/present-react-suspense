import React from 'react';

import { coursePageFetcher } from './future/fetchers';
import { coursesFetcher } from './future/fetchers';

const Courses = () => {
  coursePageFetcher.preload();
  const courses = coursesFetcher.read();
  const Course = coursePageFetcher.read().default;

  return (
    courses.map((course) =>
      <Course course={course} key={course.name} />
    )
  );
};

export default Courses;
