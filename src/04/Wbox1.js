// import MyDiv11 from "./MyDiv11";


const Wbox1 =({tempDt, setDt})=> {
    let divDt = [...tempDt];
    
    divDt = divDt.map((v)=> 
        <div className="frsctRow" key={v} onClick ={()=> setDt(v)} >{v}</div>
    ); //key 속성을 넣지 않으면 오류 발생

    // const showInfo =(v)=> {
    //     //console.log("show ", v) ;
    //     setDt(v) ;
    // }


    return(
        
        <div id="Wdiv1" className="w_div">
            <div className="innerdiv">
                <h3>날짜</h3>
                {divDt}
            </div>
        </div>
    
    );
}

export default Wbox1;
//<div className="frsctRow" onClick ={()=> showInfo(1)}>{item.frcstOneDt}</div>