import {useEffect, useState, useRef} from 'react'
import '../CompPractice.css'

const CompMain =()=> {

    const txt1R = useRef();
    const txt2R = useRef();
    const myForm = useRef();
    const selBox = useRef();
    const [tag, setTag] = useState();
    const [msg, setMsg] = useState();
    const [urset, setUrset] = useState();
    
    useEffect(()=>{
        txt1R.current.focus();
    }, []);

    function submitForm(e) {
        console.log('submitted');
        document.querySelectorAll('.tagBox')[0].style.display = 'inline-block';
        document.querySelectorAll('.tagBox')[1].style.display = 'inline-block';
        document.querySelectorAll('.tagBox')[2].style.display = 'inline-block';
        //e.preventDefault();
        setMsg(`Hi, ${txt1R.current.value}`)
        setTag(`입력된 아이디는 ${txt1R.current.value}이고 비밀번호는 ${txt2R.current.value}입니다.`);
        setUrset(`선택한 과목은 ${selBox.current.value} 입니다.`)
    }

    return(
        <>
            <div className="form-wrapper">
                <form ref={myForm} method='get' action='a.html'>
                  <input ref={txt1R} type="text" name='txt1' placeholder='ID' />
                  <input ref={txt2R} type="password" name='txt2' placeholder='Password' />
                  
                  <select id="selBox" ref={selBox} defaultValue="JavaScript">
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                  </select>

                  <input type="button" value='Confirm' onClick={()=>submitForm(myForm)}/>
                  <input type="reset" value='Cancel' /> 
                </form>
                <div>
                    <p className='tagBox'>{msg}</p>
                    <p className='tagBox'>{tag}</p>
                    <p className='tagBox'>{urset}</p>
                </div>
            </div>
        </>
    );
}

export default CompMain;