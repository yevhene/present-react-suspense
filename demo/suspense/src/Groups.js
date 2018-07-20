import React from 'react';

import Loading from './future/Loading';
import { groupsFetcher } from './future/fetchers';

import Students from './Students';

const Groups = () => {
  const groups = groupsFetcher.read();

  return (
    groups.map((group) =>
      <section key={group.name}>
        <h2>{group.name}</h2>

        <Loading>
          <Students group={group.name} />
        </Loading>
      </section>
    )
  );
};

export default Groups;
