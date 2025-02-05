import { useState } from "react";
import { Button, FlatList, Image, Modal, ScrollView, StyleSheet, Text, View } from "react-native";

// Work as same as CSS stylesheets
const styles = StyleSheet.create({
    Header: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextStyle: {
        fontSize: 16,
        padding: 10
    },
    CardStyle: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    UserCard: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// Array of users, that will be used in the FlatList component
const Users = [
    { key: 'Devin' }, { key: 'Dan' }, { key: 'Dominic' }, { key: 'Jackson' }, { key: 'James' }
];

// React Native Component, that will be used in the Index component
const CardComponent = () => {
    return (
        <View style={styles.CardStyle}>
            <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }} style={{ width: 100, height: 100, borderRadius: 5 }} />
            <Text style={styles.TextStyle}>React Native Component</Text>
        </View>
    );
}

// React Native Component, that will be used in the Index component
const UserComponent = ({ name }: { name: string }) => {
    return (
        <View style={styles.UserCard}>
            <Text style={styles.TextStyle}>{name}</Text>
        </View>
    );
}


export default function Index() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={styles.Header}>
                <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }} style={{ width: 100, height: 100 }} />
            </View>
            <View style={{ flex: 3, padding: 10 }}>
                <ScrollView style={{ flex: 2 }}>
                    <Text style={styles.TextStyle}>
                        React Native is a framework for building native apps using React. It allows you to use React components to build mobile applications for iOS and Android. With React Native, you can leverage your existing knowledge of JavaScript and React to create mobile apps with a native look and feel.
                        {"\n"}
                        {"\n"}
                        React Native components are the building blocks of a React Native application. They are analogous to HTML elements in web development. Some of the core components include View, Text, Image, and ScrollView.
                        {"\n"}
                        {"\n"}
                        Here is an example of a simple React Native component:
                    </Text>
                    <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Hello, world!</Text>
                    </View>
                    <Text style={styles.TextStyle}>
                        In this example, we have a View component with a Text component inside it. The Text component displays the text "Hello, world!". The View component is a container that holds the Text component.
                        {"\n"}
                        {"\n"}
                        React Native components can be styled using the style prop. The style prop accepts an object with CSS properties and values. For example, you can set the color, font size, and padding of a Text component like this:
                    </Text>
                    <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
                        <Text style={{ color: 'blue', fontSize: 16, padding: 5 }}>Hello, world!</Text>
                    </View>
                    <Text style={styles.TextStyle}>
                        In this example, we have set the color of the text to blue, the font size to 16 pixels, and the padding to 5 pixels. You can use the style prop to customize the appearance of React Native components to suit your design requirements.
                        {"\n"}
                        {"\n"}
                        React Native components can also be nested inside each other to create complex layouts. For example, you can use a combination of View, Text, and Image components to create a card component like this:
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CardComponent />
                    </View>
                    <Text style={styles.TextStyle}>
                        In this example, we have a card component that contains an Image component and a Text component. The Image component displays an image, and the Text component displays some text. The card component is styled using the style prop to give it a white background, padding, and rounded corners.
                        {"\n"}
                        {"\n"}
                        React Native components are versatile and can be used to create a wide variety of user interfaces. By combining different components and styling them with CSS, you can build complex layouts and interactive user interfaces for your mobile applications.
                    </Text>
                    <Text style={styles.TextStyle}>
                        The FlatList component is used for rendering large lists of data in React Native. It is a performant way to render a list of items, as it only renders the items that are currently visible on the screen. The FlatList component requires two props: data and renderItem. The data prop is an array of items to be rendered, and the renderItem prop is a function that returns a component to render for each item in the list. Here is an example of how to use the FlatList component:
                        {"\n"}
                        {"\n"}
                        <FlatList
                            style={{ width: '100%' }}
                            data={Users}
                            renderItem={({ item }) => <UserComponent name={item.key} />}
                        />
                        {"\n"}
                        {"\n"}
                        In this example, we have a FlatList component that renders a list of names. The data prop is an array of objects, each with a key property. The renderItem prop is a function that returns a Text component for each item in the list. The Text component displays the value of the key property for each item.
                        The FlatList component is highly customizable and supports features like horizontal scrolling, item separators, and empty list messages. Like this :
                    </Text>
                    <FlatList
                        style={{ width: '100%' }}
                        data={Users}
                        horizontal={true}
                        renderItem={({ item }) => <UserComponent name={item.key} />}
                    />
                    <Text style={styles.TextStyle}>
                        Flexbox is a layout system in React Native that allows you to create complex layouts with ease. It is based on the CSS Flexible Box Layout Module and provides a more efficient way to lay out, align, and distribute space among items in a container. Flexbox works by defining a container and its children, and then applying flex properties to control the layout. Here are some key properties of Flexbox in React Native:
                        {"\n"}
                        {"\n"}
                        1. flexDirection: This property defines the primary axis of the layout. It can be set to 'row' (horizontal) or 'column' (vertical). The default value is 'column'.
                        {"\n"}
                        {"\n"}
                        2. justifyContent: This property aligns children along the primary axis. It can be set to 'flex-start', 'flex-end', 'center', 'space-between', or 'space-around'.
                        {"\n"}
                        {"\n"}
                        3. alignItems: This property aligns children along the secondary axis (perpendicular to the primary axis). It can be set to 'flex-start', 'flex-end', 'center', 'stretch', or 'baseline'.
                        {"\n"}
                        {"\n"}
                        4. flex: This property defines how a child should grow relative to its siblings. A higher value means the child will take up more space.
                        {"\n"}
                        {"\n"}
                        By combining these properties, you can create flexible and responsive layouts in React Native. For example, you can create a row of evenly spaced items, a column of centered items, or a grid of items with different sizes.
                    </Text>
                    <View style={{ flex: 1, height: 100, flexDirection: 'row' }}>
                        <View style={{ flex: 2, backgroundColor: 'rgba(72, 212, 189, 0.99)' }}></View>
                        <View style={{ flex: 1, backgroundColor: 'rgb(224, 114, 160)' }}></View>
                    </View>
                    <Text style={styles.TextStyle}>
                        In this example, we have a row of two items. The first item has a flex value of 2, and the second item has a flex value of 1. This means that the first item will take up twice as much space as the second item. The items are aligned along the primary axis using the justifyContent property and along the secondary axis using the alignItems property.
                        {"\n"}
                        {"\n"}
                        Flexbox is a powerful layout system that simplifies the process of creating responsive and dynamic layouts in React Native. By mastering the key properties of Flexbox, you can create complex and visually appealing user interfaces for your mobile applications.
                    </Text>
                    <Text style={styles.TextStyle}>
                        React Native provides a Button component that allows you to create buttons in your mobile applications. The Button component is a simple way to add interactivity to your app and allows users to perform actions with a single tap. Here is an example of how to use the Button component:
                    </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Button title="Press Me" onPress={() => alert('Button Pressed!')} />
                    </View>
                    <Text style={styles.TextStyle}>
                        In this example, we have a button that, when pressed, displays an alert dialog with the message "Button Pressed!". The alert dialog is a system-provided dialog that displays a message to the user. You can use the alert dialog to provide feedback, confirm actions, or display information to the user.
                    </Text>
                    <Text style={styles.TextStyle}>
                        React Native provides a Modal component that allows you to create modal dialogs. A modal is a type of overlay that appears on top of the current screen, blocking interaction with the underlying content until it is dismissed. Here is an example of how to use the Modal component:
                    </Text>
                    <Text style={styles.TextStyle}>
                        <View style={{ width: "100%" }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Button title="Show Modal" onPress={() => setModalVisible(true)} />
                            </View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(17, 17, 17, 0.95)' }}>
                                    <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }} style={{ width: 300, height: 300 }} />
                                    <Button title="Hide Modal" onPress={() => setModalVisible(!modalVisible)} />
                                </View>
                            </Modal>
                            <Text style={styles.TextStyle}>
                                In this example, we have a button that, when pressed, sets the modalVisible state to true, displaying the modal. The Modal component is a child of the View component and is conditionally rendered based on the value of the modalVisible state. The modal has an animationType prop set to fade, a transparent prop set to true, and a visible prop that determines whether the modal is displayed. The onRequestClose prop specifies a function to call when the modal is closed.
                            </Text>
                            <Text style={styles.TextStyle}>
                                The Modal component can contain any React Native components, such as Text, Image, and Button. You can use the Modal component to create custom dialogs, popups, and other overlay content in your React Native applications.
                            </Text>
                            <Text style={styles.TextStyle}>
                                This is just a brief introduction to some of the core components and concepts in React Native. There is much more to learn about React Native, including navigation, state management, and styling. I encourage you to explore the React Native documentation and experiment with building your own mobile applications.
                            </Text>

                        </View>
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}
