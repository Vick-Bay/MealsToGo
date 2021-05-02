import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: 'blue' }}>
          <Text>Search</Text>
        </View>
        <View style={{ padding: 16, backgroundColor: 'green', flex: 1 }}>
          <Text>Search</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});