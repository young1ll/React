import {useEffect, useState, useRef} from 'react'

const CompMain =()=> {
    //Inner v
    let cnt1=0;

    //State v
    let[cnt2, setCnt2] = useState(0);

    //Ref
    const cnt3 = useRef(0);

    //func
    function addCnt1() {
        cnt1 += 1;
        console.log(cnt1)
    }
    function addCnt2() {
        setCnt2(cnt2 += 1)
    }
    function addCnt3() {
        cnt3.current = cnt3.current + 1;
        console.log(cnt3)
    }

    return(
        <>
            <div className="form-wrapper">
                <ul>
                    <li>cnt1 = {cnt1}</li>
                    <li>cnt2 = {cnt2}</li>
                    <li>cnt3 = {cnt3.current}</li>{/**값은 저장되나, 페이지에 반영하지 않고 대기*/}
                </ul>

                <form>
                    <input type="button" value="inc cnt1" onClick={addCnt1} />
                    <input type="button" value="inc cnt2" onClick={addCnt2} />
                    <input type="button" value="inc cnt3" onClick={addCnt3} />
                    
                </form>
            </div>
        </>
    );
}

export default CompMain;