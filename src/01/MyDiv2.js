
const MyDiv2 =()=> { // file naem : Start with Uppercase
  const myName = 'young1ll'
  const myGitURL = 'https://github.com/Young1ll'
  console.log(myName)
  return (        // 하나의 블럭만, 빈 태그(<></>) 사용 가능
  <div className="App-header">
    <p>ID : {myName}</p>
    <p>MyGithub : <a className="App-link" href="{myGitURL}">{myGitURL}</a></p>

  </div>
  );
}

export default MyDiv2;
