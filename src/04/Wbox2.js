// import MyDiv22 from "./MyDiv22";

const Wbox2 =({sendCn})=> {
    //console.log(sendCn);

    let infoArr = sendCn.split(',');
    infoArr = infoArr.map((i)=>
    <li>
        <span>{i.split(':')[0]} :</span>
        {
        i.includes('높음') ?
        <span className='blink' style={{color:"red"}}> {i.split(':')[1]}</span>
        :
        <span style={{color:"green"}}> {i.split(':')[1]}</span>
        }
    </li>);

    return(
        
        <div id="Wdiv2" className="w_div">
            <div className="innerdiv">
                <h3>상세내용</h3>
                <div className="frsctInfo">
                    <ul>{infoArr}</ul>
                </div>
            </div>
        </div>
    
    );
}

export default Wbox2;