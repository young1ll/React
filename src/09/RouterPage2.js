import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const RouterPage2 =()=>{
    let location = useLocation().search;
    console.log(location);
    
    let item = qs.parse(location).item;
    console.log(item);

    const listFav = 'Banana';
    let iMsg = (item === listFav) ? <span>{item} <strong>맛있어요!</strong></span> : <span>{item} 맛없어</span>;


    return(
        <>
        <h1>Welcom, Page2</h1>
        <p>{iMsg}</p>
        </>
    );
}

export default RouterPage2;