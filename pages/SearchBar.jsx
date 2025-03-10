import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import React from 'react'

const SearchBar = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.text}>Search</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        backgroundColor: '#101010'
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
    text: {
        color: '#fff'
    }
});
