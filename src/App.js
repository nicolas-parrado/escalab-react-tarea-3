/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import RootNavigation from './routes/root';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;
