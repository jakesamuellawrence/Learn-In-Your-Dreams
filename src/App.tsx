import React from 'react';
import './App.css';
import FillBlanks from './components/FillBlanks';
import Game from './components/Game';
import DisplayMessage from './components/longcat/messages';
import TestPrompts from './components/TestPrompts';
import Mask from './data_models/Mask';
import { createImageScentence } from './data_models/prompts';
import ConstructTemplate from './data_models/Template';

function App() {
  return (
    <div className='game-window'>
      <Game/>
    </div>
  )
}

export default App;
