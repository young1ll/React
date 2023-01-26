
const MyClock =()=> {
  const ddTime = new Date().toLocaleTimeString()
  return (
    <div className="App-header">
      현재시간 : {ddTime}
    </div>
  );
}

export default MyClock;
