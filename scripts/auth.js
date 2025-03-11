import auth from '@react-native-firebase/auth';

const signIn = async (email, password) => {
    try {
        await auth().signInWithEmailAndPassword(email, password);
        console.log('User signed in!');
    } catch (error) {
        console.error(error);
    }
};
