import {useState, useEffect} from 'react'

const FetArea = ({ throwList, tag })=>{
    console.log('FListArea');
    //console.log('FListArea - rData', rData);
    //console.log('FListArea - throwDetails', throwDetails);

    const [Flist, setFlist] = useState();
    useEffect(()=>{
        setFlist()
    }, []);

    return(
        <div className="flexbox">
            <div className="component-wrapper list-area">
                <h3 className='component-title'>FetArea</h3>
                <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <td>순위</td>
                                <td>영화명</td>
                                <td>관객수</td>
                            </tr>
                        </thead>
                        <tbody>
                            {throwList}
                            <tr className='lastRow'><td colspan='3'>d</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="component-wrapper deatil-area">
                <h3 className='component-title'>FDetail</h3>
                <div className='content'>
                    {tag}
                </div>
            </div>
        </div> //flexbox
    );
}

export default FetArea;