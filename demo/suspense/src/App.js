import React, { Placeholder } from 'react';

import Groups from './Groups';

const App = () => (
  <section>
    <h1>Студенти</h1>

    <hr />

    <Placeholder fallback={<div className="spinner"></div>}>
      <Groups />
    </Placeholder>
  </section>
);

export default App;
