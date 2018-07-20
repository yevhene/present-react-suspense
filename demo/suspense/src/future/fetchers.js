import { createCache, createResource } from 'simple-cache-provider';

import { getGroups, getImage, getStudents, getStudent } from 'data';

const cache = createCache();

function createFetcher(thunk) {
  const res = createResource(thunk);

  return {
    preload: (key) => res.preload(cache, key),
    read: (key) => res.read(cache, key)
  };
}

export const groupsFetcher = createFetcher(
  () => getGroups()
);

export const studentsFetcher = createFetcher(
  (group) => getStudents(group)
);

export const studentFetcher = createFetcher(
  (name) => getStudent(name)
);

export const imageFetcher = createFetcher(
  (src) => getImage(src)
);
