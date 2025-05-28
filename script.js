

import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=> {
    return (
     <div className="header">

           <div className="logo-container">
            <img className="logo" src="https://imgs.search.brave.com/NiYwWtGlFJ9kNPJV2MZz5tgKq-WWM5WWedBXm1PHMDE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vQWh3Z0tL/TEF1VWRGUHpTTHN6/aTBLcnpXMW5obTNP/cVhUTG82Q3FJb3RI/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlz/YjJkdi9MbU52YlM5/cGJXRm5aUzFqL1pH/NHZhVzFoWjJWekwy/dDAvY3preU9IQmtM/M0J5YjJSMS9ZM1Jw/YjI0dk1tSXpZMlZr/L1ltUXpNVGN3WVRo/bVptUXkvTmpObU9X/UTFZekJtT0RCaC9Z/V0V4TnpabE1tRmlZ/aTB6L09UVjROREF3/TG5CdVp6OTMvUFRF/d09EQW1jVDAzTWla/bS9iVDEzWldKdw.jpeg"/>
           </div>
         
         <div className="nav-item"> 
            <ul className="ul">
                <li>CONTRIBUTE</li>
                <li>BUILD</li>
                <li>MY CONTRIBUTIONS </li>
                <li>   <a href="">LogIn</a></li>
                <li> <a href="">SignUp</a></li>
            </ul>
         </div>

     </div>
    )
}


const Body =()=> {
    return(
      <div className="body">
          <div className="search"> 
            <input type="text"></input>
            <button type="submit"> submit </button>
          </div>

        <div className="build-container"> 
            <BodyCards/>
        </div>
      </div>
    )
    
}

const BodyCards = ()=>{
    return(
        <div className="body-card">
            <img className="image" src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww"></img>
            <h3 className="h3">Frontend</h3>
            <h3 className="h3">Build Your Own</h3>
            <h3 className="h3">contribute</h3>
            <h3 className="h3">live :: 1.3k</h3>

        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app" >
            <Header/>
            <Body/>
             </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
