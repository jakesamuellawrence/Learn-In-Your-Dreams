import './App.css';
import FillBlanks from './components/FillBlanks';
import DisplayMessage from './components/longcat/messages';
import TestPrompts from './components/TestPrompts';
import Mask from './data_models/Mask';
import { createImageScentence } from './data_models/prompts';
import ConstructTemplate from './data_models/Template';

function App() {
  let template = createImageScentence(1);

  return (
    <div className='container'>
       <FillBlanks template={template} />
       <hr />
       <DisplayMessage difficultyLevel={100} creepinessLevel={100} correct={false} />
    </div>
  );
}

export default App;
