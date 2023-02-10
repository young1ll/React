import data from '../db/data.json'
import GalInfo2 from './GalInfo2';
import { useState, useEffect, useRef } from 'react'; 

const GalSelect = () => {

    const items = data.response.body.items.item;
    const iTitles = items.map((i)=> 
                    <option value={i.galTitle} key={i.galTitle}>{i.galTitle}</option>
    );
    console.log('items', items)
    console.log('iTitles', iTitles)

    // const item = {
    //     ImageUrl : "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fimgauto-phinf.pstatic.net%2F20230201_220%2Fauto_1675230220333mWTB1_PNG%2F20230201144325_I6GLYVkr.png",
    //     Title : '메르세데스-벤츠 GLE클래스 플러그인 하이브리드',
    //     Location : '전기, 가솔린, 하이브리드, 디젤',
    //     Photographer : '복합 0.9~1.1ℓ/100km 도심 , 고속',
    //     Month : '329~375hp/197~252hp/100kW 합산/엔진/모터',
    //     Keyword : 'I4, 싱글터보'
    // }

    
    
    const selRef = useRef([0]);
    let [selItems, setSelItems] = useState();


    let itemTags = items.filter((i)=> i.galTitle.includes(selRef.current.value));
    useEffect(()=> {
        selRef.current.focus();
        //setSelItems(itemTags[0])
        //console.log('초기화 완료// selRef', selRef.current.value);
    },[selRef]);
    
    let toggleCont =  <GalInfo2 selItems={selItems} />;
    const selDiv =()=> {
        setSelItems(itemTags);
        //console.log('itemTags', itemTags);
        if(selRef.current.value === '') toggleCont = <></>;
        
        console.log('selItems', selItems.galTitle);
        }
    //setSelState();
                    
    return(
        <form className=''>
            {/*itemTag*/}
            <select className='gBox selectBox' ref={selRef} name='selectBox' onChange={()=> selDiv()}>
                <option value="">항목을 선택하세요</option>
                {iTitles}
            </select>
            { toggleCont }
        </form>
    );
}

export default GalSelect;