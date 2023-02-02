import MyDiv21 from "./MyDiv21";

const MyDiv2 =({rname, n, setN})=> {
    const user2 = '홍길동';

    return(
        <div id="myDiv2" className="mydiv">
            <h2>DIV2</h2>
            <MyDiv21 rname={rname} user={user2}/>
            <button onClick={() => setN(n+2)}>💥count +2</button>
        </div>
    );
}

export default MyDiv2;