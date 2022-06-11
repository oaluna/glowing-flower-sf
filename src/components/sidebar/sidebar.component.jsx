import React from 'react'
i//import {Sidebar, CategoryButton} from "./sidebar.styles"

 const Sidebar = ({ changeRoute }) => {
   return (
     <div className="sidebar">
       {/* <button onClick={changeRoute} id="newClient" className="categories"><img className="icons" src={New} alt="new icon" /></button> */}
       <button onClick={changeRoute} id="dashboard" className="categories">
         {/* <img className="icons" src={Dashboard} alt="Dashboard icon" /> */}
       </button>
       {/* <button onClick={changeRoute} id="folder" className="categories"><img className="icons" src={Folder} alt="Folder icon" /></button> */}
       {/* <button onClick={changeRoute} id="chart" className="categories"><img className="icons" src={Chart} alt="Chart icon" /></button> */}
       {/* <button onClick={changeRoute} id="chat" className="categories"><img className="icons" src={Chat} alt="Chat icon" /></button> */}
       {/* <button onClick={changeRoute} id="calendar" className="categories"><img className="icons" src={Calendar} alt="calendar icon" /></button> */}
       <button onClick={changeRoute} id="payment" className="categories">
         {/* <img className="icons" src={Payment} alt="Payment icon" /> */}
       </button>
       {/* <button onClick={changeRoute} id="message" className="categories"><img className="icons" src={Email} alt="Email icon" /></button> */}
     </div>
   );
 };

 export default Sidebar