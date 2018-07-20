import React from 'react';

import Loading from './future/Loading';
import Groups from './Groups';

const App = () => (
  <section>
    <h1>Студенти</h1>

    <hr />

    <Loading>
      <Groups />
    </Loading>
  </section>
);

export default App;
