import { useState } from "react";

const MyDivCnt =({n, setN})=> {

    return(
        <div className="divbt">
            <h4>test {n}</h4>
            <button onClick={() => setN(++n)}>❤️count +1</button>
            <span>{n}</span>
            <button className="btn-reset" onClick={() => setN(0)}>❤️reset</button>
        </div>
    );
}

export default MyDivCnt;