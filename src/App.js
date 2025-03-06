import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="p-4">
      <Header />
      <Profile name="John Doe" email="john.doe@example.com" />
      <Counter />
    </div>
  );
};

export default App;