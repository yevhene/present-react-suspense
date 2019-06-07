import { createResource } from './poor-mans-cache';

import { getCourses, getGroups, getImage, getStudents, getStudent } from 'data';

export const groupsFetcher = createResource(
  () => getGroups()
);

export const studentsFetcher = createResource(
  (group) => getStudents(group)
);

export const studentFetcher = createResource(
  (name) => getStudent(name)
);

export const coursesFetcher = createResource(
  () => getCourses()
);

export const imageFetcher = createResource(
  (src) => getImage(src)
);

export const coursePageFetcher = createResource(
  () =>  import('../Course.js')
);
