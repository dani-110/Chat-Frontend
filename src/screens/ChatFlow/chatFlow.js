//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatFLowStory from './chatFlowStory';
import io from 'socket.io-client';
import moment from 'moment';

// create a component
export const ChatFlow = () => {
    useEffect(() => {
        socket = io("http://127.0.0.1:3000");
        socket.on('connect', () => {
            console.log(socket.id, 'socket.id');
            console.log('hello jee connection established');
        });
        socket.emit('joinRoom', {
            name: 'David',
            room: "7&9"
        })

        socket.on('newMsg', (msg) => {
            console.log(new Date(msg.createdAt).toString())
            console.log('newMsg', moment(msg.createdAt).format('LT'))
        })
        socket.on('disconnect', () => {
            console.log("connection disconnected")
        })
        return () => socket.disconnect();
    }, [])

    function sendMsg() {
        socket.emit('createMessage', {
            from: "David",
            text: 'Hello first msg on socket -- RN 2'
        })
    }
    return (
        <ChatFLowStory
            sendMsg={sendMsg}
        />
    );
};
