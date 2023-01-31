// import Wbox1 from "./Wbox1";
// import Wbox2 from "./Wbox2";

import {useState} from 'react';

const Frcst = (probs) => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */

    const items = [
        {
        "frcstFourDt":"2023-02-05",
        "frcstThreeDt":"2023-02-04",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        "frcstTwoDt":"2023-02-03",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstOneDt":"2023-02-02",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "presnatnDt":"2023-01-30"
        }
        ]
        
    
    let item = items[0];
    //console.log(item)

    const [info, setInfo] = useState();

    const displayNone =()=> {
        if(info == null) {
            const temp = document.querySelectorAll(".frsctRow")
            temp.style.display ='none';
        }
    }

    function showInfo(value) {
        // eslint-disable-next-line default-case

        let infoArr;
        
        switch (value) {
            case 1:
                infoArr = item.frcstOneCn.split(',');
                break;
                case 2: infoArr = item.frcstTwoCn.split(','); break;
                case 3: infoArr = item.frcstThreeCn.split(','); break;
                case 4: infoArr = item.frcstFourCn.split(','); break;
                default : value = null;
            }
            infoArr = infoArr.map((i)=>
            <li key={`${i}-${value}`}>
                    <span>{i.split(':')[0]}</span>
                    {
                    i.includes('높음') ?
                    <span className='blink' style={{color:"red"}}>: {i.split(':')[1]}</span>
                    :
                    <span style={{color:"green"}}>: {i.split(':')[1]}</span>
                    }
                </li>);
            setInfo(infoArr); 
            

        console.log(infoArr);
    }

    
    


    return (
        <div id="Wdiv_body">

            <div id="Wdiv1" className="w_div">
                <div className="innerdiv">
                    <h3>날짜</h3>
                    
                    <div className="frsctRow" onClick ={()=> showInfo(1)}>{item.frcstOneDt}</div>
                    <div className="frsctRow" onClick ={()=> showInfo(2)}>{item.frcstTwoDt}</div>
                    <div className="frsctRow" onClick ={()=> showInfo(3)}>{item.frcstThreeDt}</div>
                    <div className="frsctRow" onClick ={()=> showInfo(4)}>{item.frcstFourDt}</div>
                </div>
            </div>

            <div id="Wdiv2" className="w_div">
                <div className="innerdiv">
                    <h3>상세내용</h3>
                    <div className="frsctInfo">
                        <ul>{info}</ul>
                    </div>
                </div>
            </div>

        </div>
    );

    
}


export default Frcst ;