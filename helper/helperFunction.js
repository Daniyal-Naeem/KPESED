import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from 'react-native-geolocation-service';


const permissions =  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
// const permissions = [
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 
//     PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
// ]
export const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
        Geolocation.watchPosition
        Geolocation.getCurrentPosition(
            position => {
                const cords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                resolve(cords);
            },
            error => {
                reject(error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        )
    })

export const locationPermission = () => new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
        try {
            const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
            if (permissionStatus === 'granted') {
                return resolve("granted");
            }
            reject('Permission not granted');
        } catch (error) {
            return reject(error);
        }
    }
    const _granted = await PermissionsAndroid.check(permissions)
    console.log("permission already granted", _granted);
    if (_granted){ 
         return resolve("granted")}
    console.log("requesting permission");
    return PermissionsAndroid.request(
        // PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        permissions
    ).then((granted) => {
        console.log("request-response", granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            resolve("granted");
        }
        return reject('Location Permission denied');
    }).catch((error) => {
        console.log('Ask Location permission error: ', error);
        return reject(error);
    });
});

const showError = (message) => {
    ({
        message,
        type: 'danger',
        icon: 'danger'
    })
}

const showSuccess = (message) => {
    showMessage({
        message,
        type: 'success',
        icon: 'success'
    })
}

export {
    showError,
    showSuccess
}