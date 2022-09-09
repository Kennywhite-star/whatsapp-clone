import './Sidebar.css';
import React from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from  '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from  '@mui/icons-material/SearchOutlined';
import {Avatar,Button} from '@material-ui/core';
import SidebarChat from './SidebarChat'



function Sidebar() {
  return (
    <div className="sidebar">
       <div className='sidebar_header'>
        <Avatar src="" />

        <div className='sidebar_headerRight'>
          <Button className="">
          <DonutLargeIcon />
          </Button>

          <Button className="">
          <ChatIcon/>
          </Button>

          <Button className="">
          <MoreVertIcon />
          </Button>

        
         </div>
       </div>

       <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new chart' type="text" />

        </div>

       </div>
       <div className='sidebar_chats'> 
           <SidebarChat />
           <SidebarChat />
           <SidebarChat />
  
       </div>

    </div>
  );
}

export default Sidebar;
