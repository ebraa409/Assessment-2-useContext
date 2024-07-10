import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThemeMode from './src/components/ThemeMode';
import { useState, createContext } from 'react';

export const ThemeContext = createContext('')

const App = () => {
  const [theme, setTheme] = useState(false)

  return (
    //We use the provider to provide theme and setTheme to any child component inside the wrapper.
    // if the theme is true, we switch to darkMode, if not.. it goes to lightMode
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
