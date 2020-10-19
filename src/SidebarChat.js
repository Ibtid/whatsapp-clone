import { Avatar } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import "./SidebarChat.css"

const SidebarChat = ({addNewChat,id, name}) => {

    const [seed,setSeed] = useState(''); 
    
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[]);

    const createChat = () => {
        const roomName = prompt("Please Enter name for Chat");
        if(roomName){
            //do some clever stuff...
        }
    }

    return !addNewChat?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
