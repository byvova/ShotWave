import storage from '@react-native-firebase/storage';

const uploadImage = async (uri, userId) => {
    const filename = `${userId}/${Date.now()}.jpg`;
    const reference = storage().ref(filename);

    try {
        await reference.putFile(uri);
        const url = await reference.getDownloadURL();
        return url;
    } catch (error) {
        console.error(error);
        return null;
    }
};
