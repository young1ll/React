import { useRef, useState } from "react";

const GalList = ({title, setState_list}) => {
    const inputRef = useRef();

    
    let fList = title.map((i)=> 
    <li className="gal_list"
    onClick={()=> setState_list(i)}
    key={i}>
        {i}
    </li>
    );
    let [theList, setTheList] = useState(fList);

    let filterList;
    console.log('theList', theList)


    const showList =()=> {
        console.log(inputRef.current.value);
        filterList = title.filter((i)=> i.includes(inputRef.current.value));
        
        setTheList(filterList.map((i)=>
            <li className="gal_list"
                onClick={()=> setState_list(i)}
                key={i}>
            {i}
            </li>
        ));
        console.log('filterList', filterList);
    }

    return (
        <div className="gBox flexSml">
            <h4>부산의 축제</h4>
            <div id="form-wrapper">
                <form>
                    <input ref={inputRef} id="input-search" type="text" name="txt1" onChange={()=>showList()}/>
                    <button type="reset" >Reset</button>
                </form>
            </div>

            <ul>
                {theList}
            </ul>
        </div>
    );
}
export default GalList ;