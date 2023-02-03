const TmSub = ({c3}) => {
    console.log('c3',c3)
    let c3List = c3.map((i)=>
    //setC1은 c1[i]의 값을 받는다
    <li className="Tlist" >{i}</li>
    );

    return (
        <div className="tBox flexBig">
            <h3>소분류</h3>
            {/*c3List*/}
        </div>
    );
}
export default TmSub ;