import MyDiv11 from "./MyDiv11";

const MyDiv1 =(probs)=> {
    
    return(
        <div id="myDiv1" className="mydiv">
            <h2>DIV1 {probs.rname}</h2>
            <MyDiv11 rname = {probs.rname}/>
        </div>
    );
}

export default MyDiv1;