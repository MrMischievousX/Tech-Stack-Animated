import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./src/reducers"
import { Header } from "react-native-elements"
import LibraryList from './src/components/LibraryList'

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{ text: 'TECH STACK', style: { color: 'white', fontSize: 20, paddingTop: 5 } }}
        />
        <LibraryList />
      </View>
    </Provider>
  )
}
