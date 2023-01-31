const BoxList =()=> {
    const mvList = [
        {"rnum":"1","rank":"1","rankInten":"1","rankOldAndNew":"OLD","movieCd":"20113535","movieNm":"부러진 화살","openDt":"2012-01-18","salesAmt":"840948500","salesShare":"27.5","salesInten":"-144610000","salesChange":"-14.7","salesAcc":"8900941500","audiCnt":"116167","audiInten":"-20198","audiChange":"-14.8","audiAcc":"1169434","scrnCnt":"462","showCnt":"2480"},
        {"rnum":"2","rank":"2","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20113743","movieNm":"댄싱퀸","openDt":"2012-01-18","salesAmt":"801738500","salesShare":"26.2","salesInten":"-390040000","salesChange":"-32.7","salesAcc":"11568100500","audiCnt":"112057","audiInten":"-53807","audiChange":"-32.4","audiAcc":"1516978","scrnCnt":"490","showCnt":"2353"},
        {"rnum":"3","rank":"3","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20113862","movieNm":"장화신은 고양이","openDt":"2012-01-12","salesAmt":"306848000","salesShare":"10.0","salesInten":"-302926000","salesChange":"-49.7","salesAcc":"13910801500","audiCnt":"39326","audiInten":"-35428","audiChange":"-47.4","audiAcc":"1611263","scrnCnt":"355","showCnt":"1279"},
        {"rnum":"4","rank":"4","rankInten":"14","rankOldAndNew":"OLD","movieCd":"20100215","movieNm":"점박이:한반도의 공룡3D","openDt":"2012-01-26","salesAmt":"322727000","salesShare":"10.5","salesInten":"314329000","salesChange":"3742.9","salesAcc":"333104500","audiCnt":"35458","audiInten":"34812","audiChange":"5388.9","audiAcc":"36357","scrnCnt":"263","showCnt":"834"},
        {"rnum":"5","rank":"5","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20113653","movieNm":"잃어버린 세계를 찾아서 2: 신비의 섬","openDt":"2012-01-19","salesAmt":"280877500","salesShare":"9.2","salesInten":"-316814500","salesChange":"-53","salesAcc":"7125631000","audiCnt":"34704","audiInten":"-36031","audiChange":"-50.9","audiAcc":"821111","scrnCnt":"342","showCnt":"1672"},
        {"rnum":"6","rank":"6","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20112207","movieNm":"미션임파서블:고스트프로토콜","openDt":"2011-12-15","salesAmt":"114356000","salesShare":"3.7","salesInten":"-140473500","salesChange":"-55.1","salesAcc":"56076311500","audiCnt":"15501","audiInten":"-19056","audiChange":"-55.1","audiAcc":"7350135","scrnCnt":"235","showCnt":"708"},
        {"rnum":"7","rank":"7","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20113951","movieNm":"페이스메이커","openDt":"2012-01-18","salesAmt":"82539000","salesShare":"2.7","salesInten":"-82661000","salesChange":"-50","salesAcc":"2755422500","audiCnt":"11822","audiInten":"-11963","audiChange":"-50.3","audiAcc":"371567","scrnCnt":"318","showCnt":"1106"},
        {"rnum":"8","rank":"8","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20113636","movieNm":"네버엔딩 스토리","openDt":"2012-01-18","salesAmt":"60618500","salesShare":"2.0","salesInten":"-78700500","salesChange":"-56.5","salesAcc":"1775775000","audiCnt":"8686","audiInten":"-11069","audiChange":"-56","audiAcc":"237957","scrnCnt":"218","showCnt":"646"},
        {"rnum":"9","rank":"9","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20113472","movieNm":"우리는 동물원을 샀다","openDt":"2012-01-18","salesAmt":"55916500","salesShare":"1.8","salesInten":"-49034000","salesChange":"-46.7","salesAcc":"1499512500","audiCnt":"8168","audiInten":"-7119","audiChange":"-46.6","audiAcc":"207179","scrnCnt":"193","showCnt":"552"},
        {"rnum":"10","rank":"10","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20110882","movieNm":"밀레니엄 : 여자를 증오한 남자들","openDt":"2012-01-11","salesAmt":"37216500","salesShare":"1.2","salesInten":"-31400500","salesChange":"-45.8","salesAcc":"3134147500","audiCnt":"4865","audiInten":"-4214","audiChange":"-46.4","audiAcc":"398470","scrnCnt":"110","showCnt":"238"}
    ];
    //console.log(mvList)
    // const mvListTable = document.querySelector('#mvListTb')
    //const mvListTbody = document.createElement('tbody')
    let mvListTr = []
    
    
    for(let i of mvList) {
        // console.log(i.rank + "\t" + i.movieNm + "\t" + i.audiAcc + "\t" + i.audiChange) // console에서 직접 호출
        const klist = ['rank', 'movieNm', 'salesAcc', 'audiAcc', 'rankInten', 'movieCd'];                      // key 배열을 따로 저장해서 호출
        
        let Temp = klist.map((k)=> <td className="tac">{i[k]}</td> )    //map : 배열을 받아 각각에 대해 새 배열 반환
        
        mvListTr.push(<tr>{Temp}</tr>)
        //console.log(mvListTr)
    }
    
    const regEx =(value)=> {
        const up = '▲';
        const down = '▼';
        if(value > 0) { return <span className="up">{up + value}</span> }
        else if (value < 0) { return <span className="down">{down + value}</span> }
        else return value
    }
    
    let easyTr = []
    for(let i of mvList) {
        
        easyTr.push(
            <tr className="mvRow" key={i.movieCd} onClick={()=> handleDivClick(this)}>
                <td className="tac">{i.rank}</td>
                <td className="tac">{i.movieNm + i.movieCd}</td>
                <td className="tac">{parseInt(i.salesAcc).toLocaleString()}</td>
                <td className="tac">{parseInt(i.audiAcc).toLocaleString()}</td>
                <td className="tac">{regEx(i.rankInten)}</td>
                {/* {console.log(i.movieCd)} */}
            </tr>
        )
    }
    
    
    function handleDivClick(selRow) {
        console.log(selRow.getAttribute('key'));
    }
    
    
    return (
        <div id="mvContBox" >
            <div className="box-title disNone">
                <p>BoxList</p>
            </div>
            <table id="mvListTb">
                <colgroup>
                    <col width = {60} />
                    <col width = {300} />
                    <col width = {150} />
                    <col width = {90} />
                    <col width />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">순위</th>
                        <th scope="col">영화명</th>
                        <th scope="col">매출액</th>
                        <th scope="col">관객수</th>
                        <th scope="col">증감율</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {mvListTr} */}
                    {easyTr}
                </tbody>
            </table>
        </div>
    );
}
export default BoxList;