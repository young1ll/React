const TmMid = ({c2, setDetail, init}) => {
    let c1List = [];
    c1List = c2.map((i)=>
        //setC1은 c1[i]의 값을 받는다
        <li className="Tlist mSort"
            key = {[...i]}
            onClick={()=> setDetail(i)}>
                {(i.split(' , '))[1]}
        </li>
    );

    init();

    return (
        <div className="tBox flexSml">
            <h3>중분류</h3>
            <ul>
                {c1List}
            </ul>
        </div>
    );
}
export default TmMid ;