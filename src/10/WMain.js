import WHeader from "./WHeader";
import W0 from "./W0";
import W1 from "./W1";
import W2 from "./W2";

import item from '../db/item.json';
import '../Weather.css';

import { Route, Routes } from 'react-router-dom';
import WMenu from "./WMenu";

const RouterMain =()=>{
    // const iFilter = [
    //     'POP', //강수형태
    //     'REH', //습도
    //     'RN1', //1시간 강수량
    //     'T1H', //기온
    //     'UUU', //풍속(동서구분)
    //     'VEC', //풍향
    //     'VVV', //풍속(남북성분)
    //     'WSD', //풍속
    // ]
    // console.log(item)
    // console.log(iFilter)
    //let iKeys = Object.entries(item).filter((i) => iFilter.includes(i[0]))
    let iKeysModi = Object.entries(item).map(i=> i.flat())
    //iKeys = iKeys.map(i=> i.flat())
    

    return(
        <div className="mainWrapper">
            <WHeader title={'일기예보'}/>
            <Routes>
                <Route path="/Wmenu?" element={ <W0 /> } />
                <Route path="/WeatherMain1?" element={ <W1 iKeys={iKeysModi}/> } />
                <Route path="/WeatherMain2?" element={ <W2 /> } />
            </Routes>
        </div>
    );
}

export default RouterMain;