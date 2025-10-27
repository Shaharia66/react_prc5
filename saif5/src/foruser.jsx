function Foruse({abc,name,abcd}){
    return(
        <div>
            <button onClick={()=>{abc(name)}}>click me!</button>
            <input type="text" ref={abcd} />
        </div>
    )
}
export default Foruse;