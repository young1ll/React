import weather2 from '../db/weather2.json'

import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const W2 =()=>{
    const rData = weather2.response.body.items.item
    let day3 = rData.map(i=>i)
    console.log(day3)
    
    return(
        <div className='contBox'>
        <h1>Welcom, W2</h1>
        </div>
    );
}

export default W2;