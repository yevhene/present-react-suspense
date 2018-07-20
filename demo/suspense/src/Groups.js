import React, { Placeholder } from 'react';

import Students from './Students';

import { groupsFetcher } from './future/fetchers';
import { studentsFetcher } from './future/fetchers';

const Groups = () => {
  const groups = groupsFetcher.read();

  return (
    groups.map((group) =>
      <section key={group.name}>
        <h2>{group.name}</h2>

        <Placeholder fallback={<div className="spinner"></div>}>
          <Students group={group.name} />
        </Placeholder>
      </section>
    )
  );
};

export default Groups;
