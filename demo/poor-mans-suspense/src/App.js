import React from 'react';

import SlowContent from './SlowContent';
import Placeholder from './Placeholder';

const App = () => (
  <section>
    <h2>Poor Man's Suspense</h2>

    <Placeholder placeholder={<div className="spinner"></div>}>
      <SlowContent />
    </Placeholder>
  </section>
);

export default App;
