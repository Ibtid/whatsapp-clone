import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar src="https://avatars.dicebear.com/api/human/ibtid.svg"/>
            <div className="sidebarChat___info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
