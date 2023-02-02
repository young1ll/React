import MyDiv1 from "./MyDiv1";
import MyDiv2 from "./MyDiv2";
import "../MyDiv.css"
import { useState } from "react";
import { useEffect } from "react";

const MyDiv =()=> {
    const rname = 'React';
    const user1 = '김길동';
    const user2 = '이말순';


    useEffect(()=>{
        console.log("처음 한번만 실행")
    }, []);
    useEffect(()=>{
        console.log("렌더링...")
    },);

    let [n, setN] = useState(0);
    // 최초 페이지 렌더링 시 useState n의 초깃값이 0으로
    // 설정되어 렌더링 되기 때문에 useEffect도 실행된다.
    useEffect(()=>{
        console.log("useEffect")
        //setN(n)
        document.title=`you clicked ${n} times`;
    }, [n]);

    return(
        <div id="cont">
            <div id="myDiv_header">
                <h1>Component Exam - {rname} {n}</h1>
            </div>
            <div id="myDiv_body">
                <MyDiv1 rname = {rname} user1 = {user1} user2 = {user2} n={n} setN={setN} />
                <MyDiv2 rname = {rname} n={n} setN={setN} />
            </div>
        </div>
    );
}

export default MyDiv;