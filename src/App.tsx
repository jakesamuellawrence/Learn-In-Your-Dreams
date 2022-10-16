import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/examples/hello/Hello';
import HelloClass from './components/examples/hello/HelloClass';
import HelloState from './components/examples/hello/HelloState';
import HelloMultiple from './components/examples/hello/HelloMultiple';
import Clock from './components/examples/withHooks/Clock';
import LoadData from './components/examples/withHooks/LoadData';
import ImageGen from './components/replicate_ai/Textarea2Image';

function App() {
  return (
    <div className='container'>
      <Hello name="Jakeyboi" enthusiasmLevel={3} />
      <ImageGen />
    </div>
  );
}

export default App;
