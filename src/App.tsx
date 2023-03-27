import { useEffect } from 'react';

import { sayNow } from 'gen-npm-dependency';

function App() {
  useEffect(() => {
    sayNow();
    // return () => {};
  }, []);
  return <div>Hello world</div>;
}

export default App;
