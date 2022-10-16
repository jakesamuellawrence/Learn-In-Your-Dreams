import './App.css';
import FillBlanks from './components/FillBlanks';
import TestPrompts from './components/TestPrompts';
import Mask from './data_models/Mask';
import ConstructTemplate from './data_models/Template';

function App() {
  let template = ConstructTemplate("[NOUN] next to [PLACE]");
  (template.fragments[0] as Mask).setOptions(["horse", "apple"]);
  (template.fragments[0] as Mask).setActual("horse");
  (template.fragments[3] as Mask).setOptions(["field", "kitchen"]);
  (template.fragments[3] as Mask).setActual("field");

  return (
    <div className='container'>
       <FillBlanks template={template} />
       <TestPrompts/>
    </div>
  );
}

export default App;
