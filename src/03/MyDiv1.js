import MyDiv11 from "./MyDiv11";
import MyDiv12 from "./MyDiv12";
import MyDivCnt from "./MyDivCnt";


const MyDiv1 =({rname, user1, user2, n, setN})=> {

    return(
        <div id="myDiv1" className="mydiv">
            <h2>DIV1 {rname} {n}</h2>
            <MyDiv11 rname = {rname} user={user1} />

            <MyDivCnt n={n} setN={setN}/>

            <MyDiv12  rname = {rname} user={user2} />
        </div>
    );
}

export default MyDiv1;