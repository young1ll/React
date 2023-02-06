import Tm from './Tm'
import TmMid from './TmMid'
import TmSub from './TmSub'

import {useEffect, useState} from 'react'

import "../Taccident.css"


const Taccident = () => {
  
  const targetBtn1 = document.querySelectorAll('.fSort');
  const targetBtn2 = document.querySelectorAll('.mSort');
  const toggleBtn1 =(e)=> {
    for(let i=0; i < targetBtn1.length; i++) targetBtn1[i].classList.remove('btn_active');
    e.target.classList.add('btn_active');
  };
  const toggleBtn2 =(e)=> {
    for(let i=0; i < targetBtn2.length; i++) targetBtn2[i].classList.remove('btn_active');
    e.target.classList.add('btn_active');
  };
  const init =()=> {
    for(let i=0; i < targetBtn1.length; i++) targetBtn1[i].addEventListener('click', toggleBtn1);
    for(let i=0; i < targetBtn2.length; i++) targetBtn2[i].addEventListener('click', toggleBtn2);
  }
  //init();

  const apiData = {
        "currentCount": 15,
        "data": [
          {
            "경상자수": "7488",
            "부상신고자수": "701",
            "사고건수": "17544",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "횡단중",
            "사망자수": "883",
            "중상자수": "9649"
          },
          {
            "경상자수": "1475",
            "부상신고자수": "161",
            "사고건수": "3059",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "차도통행중",
            "사망자수": "146",
            "중상자수": "1425"
          },
          {
            "경상자수": "1754",
            "부상신고자수": "202",
            "사고건수": "2872",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "길가장자리구역통행중",
            "사망자수": "80",
            "중상자수": "994"
          },
          {
            "경상자수": "1239",
            "부상신고자수": "121",
            "사고건수": "2188",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "보도통행중",
            "사망자수": "45",
            "중상자수": "1005"
          },
          {
            "경상자수": "13049",
            "부상신고자수": "1743",
            "사고건수": "24652",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "기타",
            "사망자수": "689",
            "중상자수": "10584"
          },
          {
            "경상자수": "6506",
            "부상신고자수": "590",
            "사고건수": "5840",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "정면충돌",
            "사망자수": "259",
            "중상자수": "3991"
          },
          {
            "경상자수": "63749",
            "부상신고자수": "5446",
            "사고건수": "56935",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "측면충돌",
            "사망자수": "555",
            "중상자수": "23105"
          },
          {
            "경상자수": "61766",
            "부상신고자수": "4576",
            "사고건수": "43028",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "추돌",
            "사망자수": "504",
            "중상자수": "15068"
          },
          {
            "경상자수": "60009",
            "부상신고자수": "5793",
            "사고건수": "56378",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "기타",
            "사망자수": "596",
            "중상자수": "21548"
          },
          {
            "경상자수": "2572",
            "부상신고자수": "769",
            "사고건수": "4292",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "공작물충돌",
            "사망자수": "462",
            "중상자수": "2442"
          },
          {
            "경상자수": "369",
            "부상신고자수": "74",
            "사고건수": "673",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "도로이탈",
            "사망자수": "144",
            "중상자수": "457"
          },
          {
            "경상자수": "13",
            "부상신고자수": "5",
            "사고건수": "28",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "주/정차차량 충돌",
            "사망자수": "5",
            "중상자수": "15"
          },
          {
            "경상자수": "809",
            "부상신고자수": "353",
            "사고건수": "1558",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "전도전복",
            "사망자수": "226",
            "중상자수": "886"
          },
          {
            "경상자수": "2577",
            "부상신고자수": "541",
            "사고건수": "4503",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "기타",
            "사망자수": "168",
            "중상자수": "1876"
          },
          {
            "경상자수": "0",
            "부상신고자수": "0",
            "사고건수": "2",
            "사고유형_대분류": "철길건널목",
            "사고유형_중분류": "기타",
            "사망자수": "0",
            "중상자수": "2"
          }
        ],
        "matchCount": 15,
        "page": 1,
        "perPage": 20,
        "totalCount": 15
  } ;
  
  //소분류(all data)
  let data = apiData.data;
  
  //대분류
  let c1 = data.map((i)=> i['사고유형_대분류']);
  let c1_unique = [...new Set(c1)];
  
  //중분류
  let c2 = data.map((i)=> i['사고유형_대분류'] + ' , ' + i['사고유형_중분류']);
  
  let [c1_u, setC1] = useState();
  let [c2_u, setC2] = useState([]);
  let [c3_u, setC3] = useState([]);
  
  //console.log('c1_u', c1_u)
  
  useEffect(()=>{
    console.log('useEffect1 감지됨');
    setC2(c2.filter((i)=> i.includes(c1_u)));
    //console.log('c2_u', c2_u)
  }, [c1_u]);
  
  useEffect(()=>{
    console.log('useEffect2 감지됨');
    console.log('data', data);
    setDetail();
  }, [c1_u, c2_u]);

  const setDetail =(e)=> {
    console.log('i', e);
    const ee = (e||'').split(' , ')[1]; //대박
    console.log('ee', ee);
    setC3(
      data.filter((i)=>
      i.사고유형_대분류 === c1_u && i.사고유형_중분류 === ee
      ))
      
    }
  
  return (
    <div id="ContWrapper">
        <div id="THeader">
          <h1>교통사고 현황 - {c1_u}</h1>
          
        </div>
        <div id="TMain">
            <Tm c1 = {c1_unique} setC1 = {setC1} init={init}/>
            <TmMid c2 = {c2_u} setDetail = {setDetail} init={init}/>
            <TmSub c3 = {c3_u} />
        </div>
    </div>
  ) ;
}

export default Taccident ;