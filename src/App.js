import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import { Loading } from './components/layout/loading/Loading';
import Homepage from './components/pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Loading />
    </div>
  );
}

export default App;
