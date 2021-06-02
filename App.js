//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from './src/@core/services/utilsfunctions'
import realm from './src/@core/local/routes/reminders'

import { Provider } from 'react-redux'


import { PersistGate } from 'redux-persist/es/integration/react'
import { persistor } from './src/@core/services/store/store'

import store from  './src/@core/services/store/store'

import Theme from './src/shared/functions/darkTheme'
import io from 'socket.io-client';

var socket;
// create a component
const App = () => {
  async function get() {
    await axios._getApi("/movies.json").then((res) => {
      console.log(res.data)
    })
  }

  useEffect(()=>{
    socket = io("http://127.0.0.1:3000");
    socket.on('connect', () => {
      console.log(socket.id, 'socket.id');
      console.log('hello jee connection established');
    });
    socket.emit('createMessage',{
      from:"David",
      text:'Hello first msg on socket -- RN 2'
    })
    socket.on('newMsg',(msg)=>{
      console.log('newMsg',msg)
    })
    socket.on('disconnect',()=>{
      console.log("connection disconnected")
    })
    return () => socket.disconnect();
  },[])

  function addData() {
    let data = {
      _id: 6,
      name: "new data added",
      status: "Open",
    }
    realm._addData("Task", data)
  }

  function getData() {
    realm._getData("Task").then((res) => {
      console.log("ye d", res)
    })
  }


  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={addData}
            >
              <Text>ADD DATA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={getData}
            >
              <Text>GET DATA</Text>
            </TouchableOpacity>
            <Theme />
          </View>
        </PersistGate>
      </Provider>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

export default App;
