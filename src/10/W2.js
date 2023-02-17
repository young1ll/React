import weather2 from '../db/weather2.json'

import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const W2 =()=>{
    const rData = weather2.response.body.items.item
    console.log('rData', rData[0])
    
    
    let days = {};
    for(let i=3; i < 11; i++) {
        days[`${i}일 후 날씨`] = Object.keys(rData[0]).filter(j=> j.includes(i));
    }
    console.log('days', days)//키: 표시, 값: rData의 키
    
    const daysList = Object.keys(days).map((i)=> 
    <li className='tab' key={i}>{i}</li>
    );
    
    let daysDetails = {}
    for(let [k, v] of Object.entries(rData[0])) {
        daysDetails[`${k}`] = `${v}`;
    }
    const mapDetails = Object.values(daysDetails).map(i=> Object.keys(i).map(j=> i[j]).reduce((m, n) => m+n))
    console.log('mapDetails', mapDetails)
    
    return(
        <div className='contBox'>
            <h1>Welcom, W2</h1>
            <div className='tablist'>
                <ul>
                    {daysList}
                </ul>
            </div>
            <div className='wDetail'>
                {}
            </div>
        </div>
    );
}

export default W2;