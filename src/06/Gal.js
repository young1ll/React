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

const Gal = () => {
    const data = {
        "response": {
          "header": {
            "resultCode": "0000",
            "resultMsg": "OK"
          },
          "body": {
            "items": {
              "item": [
                {
                  "galContentId": "2620274",
                  "galContentTypeId": "17",
                  "galTitle": "광안리의 뜨거운 밤",
                  "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/74/2620274.jpg",
                  "galCreatedtime": "20190920173417",
                  "galModifiedtime": "20210917143213",
                  "galPhotographyMonth": "201901",
                  "galPhotographyLocation": "부산광역시",
                  "galPhotographer": "서영균",
                  "galSearchKeyword": "2019 제47회 대한민국 관광사진 공모전, 입선, 광안리의 뜨거운 밤, 부산광역시, 부산불꽃축제, 광안리해수욕장, 광안대교, 불꽃놀이, 부산전경, 부산야경, 광안리 전경, 광안리 야경"
                },
                {
                  "galContentId": "2585036",
                  "galContentTypeId": "17",
                  "galTitle": "부산 크리스마스 트리문화축제",
                  "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/36/2585036.jpg",
                  "galCreatedtime": "20190103182338",
                  "galModifiedtime": "20190103182702",
                  "galPhotographyMonth": "201812",
                  "galPhotographyLocation": "부산광역시 중구",
                  "galPhotographer": "한국관광공사 김지호",
                  "galSearchKeyword": "부산 크리스마스 트리문화축제, 부산광역시 중구, 부산 축제, 부산 크리스마스 축제"
                },
                {
                  "galContentId": "2588386",
                  "galContentTypeId": "17",
                  "galTitle": "자갈치시장",
                  "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/86/2588386.jpg",
                  "galCreatedtime": "20190111163035",
                  "galModifiedtime": "20190111163046",
                  "galPhotographyMonth": "201810",
                  "galPhotographyLocation": "부산광역시 중구 남포동",
                  "galPhotographer": "라이브스튜디오",
                  "galSearchKeyword": "자갈치시장, 부산광역시 중구, 2018 하반기 기획사진, 전통시장, 재래시장, 수산물 시장, 어시장, 부산자갈치축제, 부산 축제"
                },
                {
                  "galContentId": "2587789",
                  "galContentTypeId": "17",
                  "galTitle": "영화의 전당",
                  "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/89/2587789.jpg",
                  "galCreatedtime": "20190110150113",
                  "galModifiedtime": "20190110150130",
                  "galPhotographyMonth": "201810",
                  "galPhotographyLocation": "부산광역시 해운대구 우동",
                  "galPhotographer": "라이브스튜디오",
                  "galSearchKeyword": "영화의 전당, 부산광역시 해운대구, 2018 하반기 기획사진, 영화관, 부산국제영화제, 부산 축제"
                },
                {
                  "galContentId": "2549577",
                  "galContentTypeId": "17",
                  "galTitle": "대저생태공원",
                  "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/77/2549577.jpg",
                  "galCreatedtime": "20180530112237",
                  "galModifiedtime": "20180530112300",
                  "galPhotographyMonth": "201804",
                  "galPhotographyLocation": "부산광역시 강서구 대저1동",
                  "galPhotographer": "한국관광공사 이범수",
                  "galSearchKeyword": "대저생태공원, 부산광역시 강서구, 부산 낙동강 유채꽃 축제"
                },
                {
                  "galContentId": "2540667",
                  "galContentTypeId": "17",
                  "galTitle": "부산국제영화제",
                  "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/67/2540667.jpg",
                  "galCreatedtime": "20180326135938",
                  "galModifiedtime": "20180326140007",
                  "galPhotographyMonth": "201710",
                  "galPhotographyLocation": "부산광역시 해운대구 우동",
                  "galPhotographer": "IR 스튜디오",
                  "galSearchKeyword": "부산국제영화제, 부산광역시 해운대구, 2017 하반기 기획사진, 영화의 전당, 영화축제"
                },
                {
                  "galContentId": "2540081",
                  "galContentTypeId": "17",
                  "galTitle": "부산불꽃축제",
                  "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/81/2540081.jpg",
                  "galCreatedtime": "20180322144105",
                  "galModifiedtime": "20180322144120",
                  "galPhotographyMonth": "201710",
                  "galPhotographyLocation": "부산광역시",
                  "galPhotographer": "IR 스튜디오",
                  "galSearchKeyword": "부산불꽃축제, 부산광역시, 2017 하반기 기획사진, 광안리해수욕장, 광안대교, 불꽃놀이"
                },
                {
                  "galContentId": "1260995",
                  "galContentTypeId": "17",
                  "galTitle": "연날리기",
                  "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/95/1260995.jpg",
                  "galCreatedtime": "20110420111612",
                  "galModifiedtime": "20151021093902",
                  "galPhotographyMonth": "201103",
                  "galPhotographyLocation": "부산광역시",
                  "galPhotographer": "한국관광공사 김지호",
                  "galSearchKeyword": "연날리기, 민속놀이, 제41회 부산국제연날리기축제, 다대포해수욕장"
                }
              ]
            },
            "numOfRows": 8,
            "pageNo": 1,
            "totalCount": 8
          }
        }
      }

    return (
        <>
        </>
    ); 
}

export default Gal ;