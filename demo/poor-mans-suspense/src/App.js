import React from 'react';

import SlowContent from './SlowContent';
import Suspense from './Suspense';

const App = () => (
  <section>
    <h2>Poor Man's Suspense</h2>

    <Suspense placeholder={<div className="spinner"></div>}>
      <SlowContent />
    </Suspense>
  </section>
);

export default App;
