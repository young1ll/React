import WMenu from "./WMenu";

import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const WHeader =({title})=>{
    let hTitle = useLocation().pathname.split('/')[1]
    
    hTitle = hTitle === 'WeatherMain1' ?
                        '- 단기예보' :
             hTitle === 'WeatherMain2' ?
                        '- 장기예보' :
                        '';
    return(
        <div id="navBar">
            <h1>{title}{hTitle}</h1>
            <WMenu />
        </div>
    );
}

export default WHeader;