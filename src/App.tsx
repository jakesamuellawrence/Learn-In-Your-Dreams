import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/examples/hello/Hello';
import HelloClass from './components/examples/hello/HelloClass';
import HelloState from './components/examples/hello/HelloState';
import HelloMultiple from './components/examples/hello/HelloMultiple';
import Clock from './components/examples/withHooks/Clock';
import LoadData from './components/examples/withHooks/LoadData';
import Template from './data_models/Template';
import FillBlanks from './components/FillBlanks';

function App() {
  let template = Template("[NOUN] standing in a [PLACE]");
  return (
    <div className='container'>
      <FillBlanks template={template} />
    </div>
  );
}

export default App;
