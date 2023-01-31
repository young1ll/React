import MyDiv1 from "./MyDiv1";
import MyDiv2 from "./MyDiv2";
import "../MyDiv.css"

const MyDiv =()=> {
    const rname = 'React';

    return(
        <div id="cont">
            <div id="myDiv_header">
                <h1>Component Exam - {rname}</h1>
            </div>
            <div id="myDiv_body">
                <MyDiv1 rname = {rname}/>
                <MyDiv2 rname = {rname}/>
            </div>
        </div>
    );
}

export default MyDiv;