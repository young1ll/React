import MyDiv22 from "./MyDiv22";

const MyDiv2 =(probs)=> {
    const user2 = '홍길동';

    return(
        <div id="myDiv2" className="mydiv">
            <h2>DIV2</h2>
            <MyDiv22 rname={probs.rname} user={user2}/>
        </div>
    );
}

export default MyDiv2;