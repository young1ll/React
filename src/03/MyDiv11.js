const MyDiv11 =(probs)=> {
    // console.log(probs);
    return(

        <div id="myDiv11" className="innermydiv">
            <h3>DIV11</h3>
            <p>user : {probs.user}</p>
            <p>pwd : {probs.rname}</p>
            {/* <button onClick={addCnt}></button> */}
        </div>
    );
}

export default MyDiv11;