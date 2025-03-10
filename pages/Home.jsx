import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('Profile');
    };
    const goToSearchBar = () => {
        navigation.navigate('SearchBar');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.text}>main</Text>
                </View>
            </ScrollView>
            <View style={styles.df}>
                <Button title="Go to Profile" onPress={goToProfile} />
                <Button title="Go to Search" onPress={goToSearchBar} />
            </View>

        </View>
    );
}

export default Home;

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
    },
    df: {
        display: 'flex',
        flexDirection: 'row',

    }
});
