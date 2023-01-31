import Frcst from "./Frcst";

import "../Wbox.css"

const WeatherBox =()=> {

    return(
        <div id="cont">
            <div id="Wdiv_header">
                <h1>미세먼지예보</h1>
            </div>
            <Frcst />
        </div>
    );
}

export default WeatherBox;