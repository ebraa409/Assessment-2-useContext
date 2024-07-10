import React, { useContext } from "react";
import { Button } from "react-native";
import { ThemeContext } from "../../App";

//we access the context that we have created in our App.tsx which returns us the theme state and setTheme function

const ToggleButton = () => {
   
    const [theme, setTheme] = useContext(ThemeContext)
    return (
        // Onpress will update the theme state
        <Button title="Toggle Theme" onPress={()=> setTheme(!theme)}/>
    )
}

export default ToggleButton