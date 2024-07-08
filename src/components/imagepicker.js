import * as ImagePicker from 'expo-image-picker';
import { Alert, Platform } from 'react-native';

export const permission = async () =>{
    if(Platform.OS !== 'web'){
        const { status }=await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !=='granted'){
            Alert.alert('We need camera roll permission');
        }
    }
};

export const pickimage =async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes : ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality:1,
    });
    if(!result.canceled){console.log(result);
        return result;
    }
    // return null;
};