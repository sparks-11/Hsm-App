// In App.js in a new project

import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Navigation } from './navigation';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
          <RootSiblingParent>
            <Navigation />
          </RootSiblingParent>
          <FlashMessage position="top" />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
