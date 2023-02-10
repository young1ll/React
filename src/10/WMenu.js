import { Link } from "react-router-dom";

const WMenu =()=>{
    return(
        <div className="contBox">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/WeatherMain1?'>단기예보</Link></li>
            <li><Link to='/WeatherMain2?'>중기예보</Link></li>
        </ul>
        </div>
    );
}

export default WMenu;