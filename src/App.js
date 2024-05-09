import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './navigation/rootNavigation'
import { Provider } from 'react-redux'
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { NativeBaseProvider } from 'native-base'
import { DefaultTheme, PaperProvider } from 'react-native-paper'



const App = () => {
  let persistor = persistStore(store)
  const theme={
    ...DefaultTheme,
    roundness: 20,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.Primary,
    },

  }
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
          </PaperProvider>
        </NativeBaseProvider>
      </PersistGate>


    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})