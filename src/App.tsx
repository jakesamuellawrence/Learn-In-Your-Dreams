import './App.css';
import Hello from './components/examples/hello/Hello';
import HelloClass from './components/examples/hello/HelloClass';
import HelloState from './components/examples/hello/HelloState';
import HelloMultiple from './components/examples/hello/HelloMultiple';
import Clock from './components/examples/withHooks/Clock';
import LoadData from './components/examples/withHooks/LoadData';
import DisplayMessage from './components/longcat/messages';
import backgroundImage from "./resources/images/websiteImage.png"
import cat from "./resources/images/longcat.png"
import ad from "./resources/images/ad.png"
import wordart from "./resources/images/learn.png"
import purple_background from "./resources/images/purple_background.png"
import Game from './components/Game';

function App() {
  return (
    <div className='app'>
      <div className='inner-frame'>
          <img className="cat" src={cat} alt="NO CAT"></img>
          <img className="ad" src={ad} alt="NO AD"></img>
          <img className="wordart" src={wordart} alt="NO WORDART"></img>
          <div className="box">
            hello
            <div className='game-window'>
              <Game/>
            </div>
          </div>
      </div>
    </div>
  )
}



export default App;
