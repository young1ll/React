import FetArea from './FetArea'
import FDetail from '../11/FDetail'
import '../FStyles.css'

import {useState, useEffect, useRef} from 'react'

const FetMain =()=>{
    console.log('FetMain')
    const [targetDate, setTargetDate] = useState();
    const [listData, setListData] = useState(null);
    let [throwDetails, setDtail] = useState(null);
    
    const apiKey = 'f5eef3421c602c6cb7ea224104795888';
    const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${targetDate}`;
    
    //useRef
    const dateRef = useRef();
    let fetchRef = useRef();
    useEffect(()=>{
        dateRef.current.focus();
    },[]);
    
    
    //date onChange
    const dateChange =()=> {
        //console.log(dateRef.current.value)
        setTargetDate(dateRef.current.value.replaceAll('-',''));
    }
    
    //detail onClcik
    const detailClick =(e)=> {
        let tmp = Object.values(listData.current.boxOfficeResult.dailyBoxOfficeList).find(i=> i.movieCd === e);
        //console.log(tmp)
        setDtail(tmp);
        //setDtail(Object.entries(tmp));
    }
    
    //targetDate 감지
    useEffect(()=>{
        //get json for await : 자식 컴포넌트 호출 후 실행
        const getJson = async ()=> {
            const response = fetch(url);
            // .then((res)=> res.json())
            const res = await response
            return await res.json()
        }
        
        async function fetchData() {
            try {
                fetchRef.current = await getJson();
                setListData(fetchRef);
                console.log('fetchRef', fetchRef)
            } catch(e) { alert(e); }
        } 
        if(targetDate) fetchData();
    },[targetDate, url]);
    
    console.log('FetMain - targetDate', targetDate)
    console.log('FetMain - listData', listData);

    let throwList;
    if(listData != null) {
        throwList = Object.values(listData.current.boxOfficeResult.dailyBoxOfficeList);
        throwList = throwList.map(i=> 
            <tr className='eachMovie' key={i.movieCd} onClick={()=> detailClick(i.movieCd)}>
                <td><span className='mvrk'>{i.rank}</span></td>
                <td>{i.movieNm}</td>
                <td>{Number(i.audiCnt).toLocaleString()}</td>
                </tr>
            )
    }

    let tag;
    const detailKeys = [
        { key: 'openDt', title: '개봉일' },
        { key: 'movieCd', title: '영화코드' },
        { key: 'movieNm', title: '영화명' },
        { key: 'salesShare', title: '비중' },
        { key: 'audiAcc', title: '누적관객수' },
        { key: 'salesInten', title: '전일증감' },
    ];
    if(throwDetails != null) {
        tag = (
            <div>
              {detailKeys.map((i) => (
                <p className='details' key={i.key}>
                  <span>{i.title}</span>
                  <span>
                    {!isNaN(throwDetails[i.key]) ?
                    Number(throwDetails[i.key]).toLocaleString() :
                    throwDetails[i.key]}
                </span>
                </p>
              ))}
            </div>
          );
    }

    
    return(
        <div id='main-wrapper'>
            
            <div className="component-wrapper">
                <h1 id='master-title'>일별 박스오피스</h1>
                <form id="search-form">
                    <input type="date" name="search-date" ref={dateRef} onChange={dateChange} />
                </form>
            </div>
            <FetArea throwList={throwList} tag = {tag}/>
        </div>
    );
}

export default FetMain;