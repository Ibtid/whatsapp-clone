import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import "./Chat.css"

const Chat = () => {

    const[seed,setSeed] = useState();

    useEffect(() => {}, [])

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
