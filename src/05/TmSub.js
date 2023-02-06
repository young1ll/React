const TmSub = ({c3}) => {
    
    console.log('c3', c3);
    let c3List = [];
    
    
    if(c3[0]) {
        let tmp = Object.entries(c3[0]);
        let tmp1=[];
        tmp1 = tmp.splice(3, 2);
        
        tmp.unshift(tmp1[1]);
        tmp.unshift(tmp1[0]);
        console.log('tmp', tmp)

        // for(let [k, v] of Object.entries(c3[0])) {
        for(let [k, v] of tmp) {
            let key = k;
            let value = !isNaN(v) ? v.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : v;

            console.log(k, v)
            c3List.push(
            <li className="spanList">
                <span className="Tspan spanKey">{key}</span>
                <span className="Tspan spanValue">{value}</span>
            </li>
            )
        }
    }

    return (
        <div className="tBox flexBig">
            <h3>소분류</h3>
            <ul>
            {c3List}
            </ul>
        </div>
    );
}
export default TmSub ;