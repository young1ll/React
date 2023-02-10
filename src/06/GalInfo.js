const GalInfo = ({state_info, selItems}) => {
    console.log("state_info", state_info)
    console.log("selItems", selItems)

    let iImg, iTitle, iLocation, iphotoG, iMonth, iKeywords, keywordList;
    // if(state_info[0]) {
    //     iImg = Object.values(state_info[0].galWebImageUrl).join("")
    //     iTitle = Object.values(state_info[0].galTitle).join("")
    //     iLocation = Object.values(state_info[0].galPhotographyLocation).join("")
    //     iphotoG = Object.values(state_info[0].galPhotographer).join("")
    //     iMonth = Object.values(state_info[0].galPhotographyMonth).join("").replace(/(.{4})/g,"$1-")
    //     iKeywords = Object.values(state_info[0].galSearchKeyword).join("").split(',')
        
        
    //     keywordList = iKeywords.map(i=>
    //         <li className="keywordList">
    //             {i}
    //         </li>
    //     )
        
    // }
    if(selItems) {
        iImg = Object.values(selItems.galWebImageUrl).join("")
        iTitle = Object.values(selItems.galTitle).join("")
        iLocation = Object.values(selItems.galPhotographyLocation).join("")
        iphotoG = Object.values(selItems.galPhotographer).join("")
        iMonth = Object.values(selItems.galPhotographyMonth).join("").replace(/(.{4})/g,"$1-")
        iKeywords = Object.values(selItems.galSearchKeyword).join("").split(',')
        keywordList = iKeywords.map(i=>
                    <li className="keywordList">
                        {i}
                    </li>
                )
    }
    //console.log(iKeywords)
    return (
        <div className="gBox flexMid">
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
export default GalInfo ;