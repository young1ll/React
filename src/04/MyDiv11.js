const MyDiv11 =(probs)=> {
    console.log(probs);
    // let setCnt=0;

    // addCnt() {
    //  console.log(cnt)   
    // }
    return(

        <div id="myDiv11" className="innermydiv">
            <h3>DIV11</h3>
            <p>user : {probs.rname}</p>
            <p>pwd : {probs.rname}</p>
            {/* <button onClick={addCnt}></button> */}
        </div>
    );
}

export default MyDiv11;