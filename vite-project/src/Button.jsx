 
  function Print(event){
    console.log(" hello ");
    console.log(event);
  }
 
 export default function Button (){
    return (
        <div>
            <button onClick={Print} >Click bro</button>
        </div>
    )
 }