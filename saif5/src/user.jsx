import { useRef } from "react";
import ForUse from "./foruser"

function User(){

    const inputRef=useRef(null)
    function updateRef(){
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.value="Shahariar Saif";
        inputRef.current.style.color="green";
    }

    function displayName(name){
        alert(name)
    }
    return(
        <div>
            <h1>pass function as props.</h1>
            <button onClick={updateRef}>Forward REF</button>

            <ForUse abc={displayName} name="shahariar saif" abcd={inputRef}/>
            

        </div>
    )
}
export default User;