import { Link } from "react-router-dom";

const RouterNav =()=>{
    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/p1'>Page1</Link></li>
            <li><Link to='/p2'>Page2</Link></li>
        </ul>
    );
}

export default RouterNav;