import { Link, Navigate, useNavigate } from "react-router-dom";

const RouterHome =()=>{
    const navi = useNavigate();
    const naviURL = {
        'Apple' : '/p2?item=Apple',
        'Banana' : '/p2?item=Banana',
        'Orange' : '/p2?item=Orange',
    }
    const goNaviURL =(i)=> navi(naviURL[i]);

    return(
        <>
        <h1>Welcom, Home</h1>
        <h2>Transmitting Parameter1</h2>
        <ul>
            <li><Link to='/p1/Apple'>Apple</Link></li>
            <li><Link to='/p1/Banana'>Banana</Link></li>
            <li><Link to='/p1/Orange'>Orange</Link></li>
        </ul>

        <h2>Transmitting Parameter2</h2>
        <button onClick={()=> goNaviURL('Apple')}>Apple</button>
        <button onClick={()=> goNaviURL('Banana')}>Banana</button>
        <button onClick={()=> goNaviURL('Orange')}>Orange</button>
        </>
    );
}

export default RouterHome;