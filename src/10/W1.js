import weather1 from '../db/weather1.json'

const W1 =({iKeys})=>{
    const rData = weather1.response.body.items.item;
    //console.log('rData', rData)
    
    let data = rData.map(i=> i.category)
    let vData = rData.map(j=> j.obsrValue)
    //console.log('vdata', vData)
    
    iKeys = iKeys.filter(i=> data.includes(i[0]))
    //console.log('iKeys', iKeys)

    let theList = iKeys.map((i, j)=> 
        <li>
            <span className='listTitle'>{i[1]}</span>
            <span className='listDesc'>{vData[j]} {i[2]}</span>
        </li>
    )


    return(
        <div className='contBox'>
            <h1>Welcom, W1</h1>
            <div className='contBoxInner'>
                <ul>
                    {theList}
                </ul>
            </div>
        </div>
    );
}

export default W1;