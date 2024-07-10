import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThemeMode from './src/components/ThemeMode';
import { useState, createContext } from 'react';

export const ThemeContext = createContext('')
const App = () => {
  const [theme, setTheme] = useState(false)

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
    <View style={theme ? styles.darkMode : styles2.lightMode }>
      <ThemeMode />
    </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  darkMode: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  }
})

const styles2 = StyleSheet.create({
  lightMode: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  }
})

export default App;
