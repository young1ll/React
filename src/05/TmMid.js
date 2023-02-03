const TmMid = ({c2, c3DataShow}) => {
    let c1List = [];
    //c1List = c2;
    let k=0;
    c1List = c2.map((i)=>
        //setC1은 c1[i]의 값을 받는다
        <li className="Tlist" key = {k++} onClick={()=> c3DataShow()}>{(i.split(' , '))[1]}</li>
    );

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