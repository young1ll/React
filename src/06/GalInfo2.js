const GalInfo2 = ({state_info, selItems}) => {
    //console.log("state_info", state_info)
    //console.log("selItems", selItems)

    let iImg, iTitle, iLocation, iphotoG, iMonth, iKeywords, keywordList;
   
    if(selItems) {
        iImg = selItems[0].galWebImageUrl
        iTitle = selItems[0].galTitle
        iLocation = selItems[0].galPhotographyLocation
        iphotoG = selItems[0].galPhotographer
        iMonth = selItems[0].galPhotographyMonth
        iKeywords = selItems[0].galSearchKeyword
        keywordList = iKeywords
    }
    console.log('selItems', selItems)

    return (
        <div className="gBox flexL">
            <h4>축제 상세정보</h4>
            <div className="imgWrapBox">
                <img className="infoImg" src= {iImg}/>
            </div>
            <div className="infoBox">
                <p className="infoTitle">{iTitle}</p>
                <p className="infoDescBold">{iLocation}</p>
                <p className="infoDescBold">{iphotoG}</p>
                <p className="infoDescBold">{iMonth}</p>
                <ul>
                    {keywordList}
                </ul>
            </div>
        </div>
    );
}
export default GalInfo2 ;