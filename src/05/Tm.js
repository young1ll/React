const Tm = ({c1, setC1, init}) => {
    let c1List = c1.map((i)=>
        //setC1은 c1[i]의 값을 받는다
        <li className="Tlist fSort"
            key = {i}
            onClick={()=> {
                setC1(i);
            }}>{i}</li>
    );
    init();

    return (
        <div className="tBox flexSml">
            <h3>대분류</h3>
            <ul>
                {c1List}
            </ul>
        </div>
    );
}
export default Tm ;