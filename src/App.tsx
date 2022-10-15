import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/examples/hello/Hello';
import HelloClass from './components/examples/hello/HelloClass';
import HelloState from './components/examples/hello/HelloState';
import HelloMultiple from './components/examples/hello/HelloMultiple';
import Clock from './components/examples/withHooks/Clock';
import LoadData from './components/examples/withHooks/LoadData';
import DisplayMessage from './components/longcat/messages';

function App() {
  return (
    <div className='container'>
      <Hello name="Jakeyboi" enthusiasmLevel={3} />
      <HelloClass name='tester' enthusiasmLevel={12} />
      <HelloState name="jimothy" enthusiasm={5} />
      <HelloMultiple people={[{id: 0, name: "John"}, {id: 1, name: "Jim"}]} />
      <hr />
      <Clock/>
      <hr />
      <LoadData />
      <hr />
      <DisplayMessage creepinessLevel={10} difficultyLevel={100} correct={true} />
    </div>
  );
}

export default App;
