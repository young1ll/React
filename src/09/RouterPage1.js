import { useParams } from "react-router-dom";

const RouterPage1 =()=>{
    const item = useParams().item;
    const listFav = 'Banana';
    let iMsg = (item === listFav) ? <span>{item} <strong>맛있어요!</strong></span> : <span>{item} 맛없어</span>;

    return(
        <>
        <h1>Welcom, Page1</h1>
        <p>선택한 과일: {item}</p>
        <p>{iMsg}</p>
        </>
    );
}

export default RouterPage1;