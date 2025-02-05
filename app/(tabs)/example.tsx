import React from "react";
import { Button, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey"
    },
    buttonContainer: {
        height: 250,
        padding: 30,
        justifyContent: "space-around"
    },
    image: {
        flex: 1,
        justifyContent: "flex-end"
    },
    button: {
        borderRadius: 30,
        backgroundColor: 'grey',
        padding: 20,
    },
    text: {
        textAlign: "center",
        color: "white"
    }
});

export default function Index() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('@/assets/images/home.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Register</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Login</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}
