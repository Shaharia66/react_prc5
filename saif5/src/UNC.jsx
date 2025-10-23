import { useRef } from "react";

function Unccom(){

    const userRef= useRef();
    const passRef= useRef();

    function handleForm(event){
        event.preventDefault();
        let a=document.querySelector("#user").value
        let b=document.querySelector("#password").value

        console.log(a,b);

    }
    function handleFormRef(event){
        event.preventDefault();
        let c=userRef.current.value
        let d=passRef.current.value 

        console.log(c,d);

    }
    return(
        <div>
            <h1>
                Uncontrolled Component
            </h1>
            <form action="" method="post" onSubmit={handleForm}>
                <input type="text" placeholder="enter user name " id="user" />
                <br /><br />
                <input type="password" placeholder="enter user passeord" id="password"/>
                <br /><br />
                <button>Submit </button>
            </form>
            <hr />
             <h1>
                Uncontrolled Component for ref.
            </h1>
            <form action="" method="post" onSubmit={handleFormRef}>
                <input type="text" ref={userRef} placeholder="enter user name " id="userRef" />
                <br /><br />
                <input type="password" ref={passRef} placeholder="enter user passeord" id="passwordRef"/>
                <br /><br />
                <button>Submit </button>
            </form>
        </div>
    )
}
export default Unccom;
