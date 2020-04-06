import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';
import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as RootNavigation from '../RootNavigation';
import FACEBOOK_APP_KEY from '../facebook_app_key';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {

    await Facebook.initializeAsync(FACEBOOK_APP_KEY);

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile']
    });
    
    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });

    RootNavigation.navigate('Main');
};