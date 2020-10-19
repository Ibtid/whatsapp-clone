import { Avatar, IconButton } from '@material-ui/core'
import {MoreVert,AttachFile, SearchOutlined, InsertEmoticon, MicOutlined} from "@material-ui/icons/"
import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import "./Chat.css"

const Chat = () => {

    const[seed,setSeed] = useState("");
    const [input,setInput] = useState("")
    const { roomId } = useParams();

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you typed ', input);

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton><SearchOutlined/></IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                   <span className="chat__name">Ibtid</span>
                   Hey Guys
                   <span className="chat__timestamp">3:52pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input 
                       type="text"
                       placeholder="Type a message"
                       value={input} 
                       onChange={(e)=>{setInput(e.target.value)}}
                    />
                    <button
                      onClick={sendMessage} 
                      type="submit">
                          Send a message
                    </button>
                </form>
                <MicOutlined/>
            </div>
        </div>
    )
}

export default Chat
