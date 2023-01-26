import logo from '../logo.svg';

const MyDiv1 =()=> { // file naem : Start with Uppercase
  return (        // 하나의 블럭만, 빈 태그(<></>) 사용 가능
  <div className='App-header'>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
  );
}

export default MyDiv1;
