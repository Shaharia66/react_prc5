import { useRef } from "react"

function RefHooks(){
    const abc=useRef(null);

    function intHandler(){
        console.log(abc);
        abc.current.focus();
        abc.current.style.backgroundColor="green";
        abc.current.placeholder="enter password";
        abc.current.value='1234';
    }
    function toggleHandler(){
        if(abc.current.style.display!="none"){
            abc.current.style.display="none"
        }else{
            abc.current.style.display="inline";
        }
    }

    return(
        <div>
            
            <h1>Use Ref Hooks</h1>
            <button onClick={toggleHandler}>Toggle</button>

            <input type="text" placeholder="enter user name " ref={abc} />
            <button style={{backgroundColor:"yellow",border:"1px solid blue"}} onClick={intHandler}>focus on int.</button>
            
        </div>
    )
}
export default RefHooks;