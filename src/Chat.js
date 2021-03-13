import { Avatar, IconButton } from '@material-ui/core';
import {
  MoreVert,
  AttachFile,
  SearchOutlined,
  InsertEmoticon,
  MicOutlined,
} from '@material-ui/icons/';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import db from './firebase';
import './Chat.css';
import firebase from 'firebase';
import Pusher from 'pusher-js';
import axios from './axios';

const Chat = () => {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const pusher = new Pusher('530c5524a65d722856e1', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    axios.get(`/messages/sync/${roomId}`).then((response) => {
      console.log(response.data);
      setMessages(response.data);
    });
  }, [roomId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      message: input,
      name: user.displayName,
      timestamp: new Date().getTime(),
      roomId: roomId,
      received: false,
    });
    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
          <p>
            Last Seen{' '}
            {/*new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()*/}
          </p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && 'chat__receiver'
            }`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input
            type='text'
            placeholder='Type a message'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
        <MicOutlined />
      </div>
    </div>
  );
};

export default Chat;
