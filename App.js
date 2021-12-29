/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component , useState}from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [greeting,setGreeting]=useState("Hello");

 

  return (
            <View testID='welcome' style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, marginBottom: 30}}>
          Welcome
        </Text>
        
        <Pressable testID='hello_button' onPress={()=>setGreeting('Hello')}>
          <Text style={{color: 'blue', marginBottom: 20}}>Say Hello</Text>
        </Pressable>
        <Pressable testID='world_button' onPress={()=>setGreeting('World')}>
          <Text style={{color: 'blue', marginBottom: 20}}>Say World</Text>
        </Pressable>
        <Pressable testID='goodbye_button' onPress={()=>setGreeting('Goodbye, World')}>
          <Text style={{color: 'blue', marginTop: 50, marginBottom: 20}}>Say Goodbye</Text>
        </Pressable>
        
        <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>
        {greeting}!!!
      </Text>
    </View>
      </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
