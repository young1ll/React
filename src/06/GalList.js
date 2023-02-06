const GalList = ({title, setState_list}) => {
    let titleList = title.map((i)=> 
    <li className="gal_list"
        onClick={()=> setState_list(i)}>
        {i}
    </li>
    );

    return (
        <div className="gBox flexSml">
            <h4>부산의 축제</h4>
            <ul>
                {titleList}
            </ul>
        </div>
    );
}
export default GalList ;