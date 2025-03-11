import firestore from '@react-native-firebase/firestore';

const addPost = async (userId, imageUrl, alcoholAmount) => {
    try {
        await firestore().collection('posts').add({
            userId,
            imageUrl,
            alcoholAmount,
            // timestamp: firestore.FieldValue.serverTimestamp(),
        });
        console.log('Post added!');
    } catch (error) {
        console.error(error);
    }
};
