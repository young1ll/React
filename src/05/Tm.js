const Tm = ({c1, setC1}) => {
    let k=0;
    let c1List = c1.map((i)=>
        //setC1은 c1[i]의 값을 받는다
        <li className="Tlist" key = {k++} onClick={()=>setC1(i)}>{i}</li>
    );

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