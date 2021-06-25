//import liraries
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from './src/@core/services/utilsfunctions'
import realm from './src/@core/local/routes/reminders'

import { Provider } from 'react-redux'


import { PersistGate } from 'redux-persist/es/integration/react'
import { persistor } from './src/@core/services/store/store'

import store from  './src/@core/services/store/store'

import Theme from './src/shared/functions/darkTheme'


import {ChatFlow} from './src/screens'
import {Map} from './src/screens'
import {ChooseLocation} from './src/screens'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import FlashMessage from "react-native-flash-message";
var socket;
const Stack = createStackNavigator();
// create a component
const App = () => {
  async function get() {
    await axios._getApi("/movies.json").then((res) => {
      console.log(res.data)
    })
  }

  function addData() {
    let data = {
      _id: 1,
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
          {/* <View style={styles.container}>
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
          </View> */}
          {/* <ChatFlow/> */}
          {/* <Map/> */}
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='map' component={Map}/>
              <Stack.Screen name='chooseLocation' component={ChooseLocation}/>
            </Stack.Navigator>
            <FlashMessage position="top"/>
          </NavigationContainer>
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
