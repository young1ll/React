import logo from './logo.svg';
import './App.css';
import MyDiv1 from './01/MyDiv1.js';
import MyDiv2 from './01/MyDiv2.js';
import MyClock from './01/MyClock.js';

const App =()=> { // file naem : Start with Uppercase
  // console.log('App.js')
  return (
    <div className='App'>
    <MyDiv1 />
    <MyDiv2 />
    <MyClock />
    </div>
  );
}

export default App;
