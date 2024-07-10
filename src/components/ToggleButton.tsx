import React, { useContext, useState } from "react";
import { Button } from "react-native";
import { ThemeContext } from "../../App";

const ToggleButton = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    return (
        <Button title="Toggle Theme" onPress={()=> setTheme(!theme)}/>
    )
}

export default ToggleButton