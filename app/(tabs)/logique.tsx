import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
    
    // Example of a useState with button component
    const [color, setColor] = useState("blue");
    const [counter, setCounter] = useState(0);
    const [longPressCounter, setLongPressCounter] = useState(0);
    let longPressTimer: NodeJS.Timeout;

    // Functions
    const changeColor = () => {
        setColor(prevColor => (prevColor === "blue" ? "green" : "blue"));
    };

    const addCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    const removeCounter = () => {
        setCounter(prevCounter => prevCounter - 1);
    }

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // Example of a useEffect with setInterval
    useEffect(() => {
        const timer = setInterval(() => {
            // Update the current time
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const handlePressIn = () => {
        longPressTimer = setInterval(() => {
            setLongPressCounter(prevCounter => prevCounter + 1);
        }, 1000);
    };

    const handlePressOut = () => {
        clearInterval(longPressTimer);
        setLongPressCounter(0);
    };
    return (
        <View style={{ flex: 1 }}>
            {/* Button Component with color prop */}
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title="Change Color" color={color} onPress={changeColor} />
            </View>
            {/* Counter Component with add and remove button */}
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Counter : {counter}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                    <Button title="Remove 1 to Counter" onPress={removeCounter} />
                    <Button title="Add 1 to Counter" onPress={addCounter} />
                </View>
            </View>
            {/* Time Component with current time */}
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Heure d'aujour'hui : {currentTime}</Text>
            </View>
        </View>
    );
}
