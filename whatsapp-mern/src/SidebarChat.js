import React from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';



function SidebarChat() {
  return (
    <div className="sidebarchat">
        <div>
         <Avatar src="" />

         </div>

     <div className= 'sidebarchat_info'>
        <h2> Dev Room</h2>
        <p>This is my dev room </p>
      </div>

   
     </div>
  );
}

export default SidebarChat;