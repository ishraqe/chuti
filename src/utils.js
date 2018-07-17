import {AsyncStorage} from 'react-native';




export default {
    get: () => {
        AsyncStorage.getItem('bookmark', (err, result) => {
            console.log(result);
            console.log(err);
        });
    },

    set: (key, json) => {
        console.log(json,'data to store');
        const value = JSON.stringify(json);
        return AsyncStorage.setItem(key, value);
    }
}