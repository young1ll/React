import GalList from './GalList'
import GalInfo from './GalInfo'
import GalSelect from './GalSelect'

import "../Gal.css"
import { useEffect, useState } from 'react'

//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드
import data from "../db/data.json"
const Gal = () => {
  

      const targetBtn1 = document.querySelectorAll('.gal_list');
      const toggleBtn1 =(e)=> {
        for(let i=0; i < targetBtn1.length; i++) targetBtn1[i].classList.remove('btn_active');
        e.target.classList.add('btn_active');
      };
      const init =()=> {
        for(let i=0; i < targetBtn1.length; i++) targetBtn1[i].addEventListener('click', toggleBtn1);
      }
      init();


      //console.log(data)
      let title = data.response.body.items.item;
      title = title.map((i)=> i.galTitle)
      let dataCont = data.response.body.items.item;
      //dataCont = dataCont.map((i)=> [i.galWebImageUrl] +' , '+ i.galTitle +' , '+ i.galPhotographyLocation +' , '+ i.galPhotographer +' , '+ i.galPhotographyMonth +' , '+ i.galSearchKeyword)


      let [state_list, setState_list] = useState();
      let [state_info, setState_info] = useState([]);

      useEffect(()=>{
        //console.log(state_list);
        setState_info(dataCont.filter((i)=> i.galTitle.includes(state_list)))
        //console.log('dataCont', dataCont);
        //console.log('state_info', state_info);

      }, [state_list])


      return (
        <div id='AppWrapper'>
          <div className='gMainBox'>
            {/*<GalList title={title} setState_list={setState_list} />*/}
            {/*<GalInfo state_info={state_info} />*/}
            <GalSelect />
          </div>
        </div>
      );
    }

export default Gal;