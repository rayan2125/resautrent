import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './navigation/rootNavigation'
import { Provider } from 'react-redux'
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { NativeBaseProvider } from 'native-base'



const App = () => {
  let persistor = persistStore(store)
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>

          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>


    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})