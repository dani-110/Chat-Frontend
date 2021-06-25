import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
    bottomCard: {
        width: '100%',
        padding: 30,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    inputBtn: {
        marginTop:16,
        borderWidth: 1,
        borderRadius: normalize(10),
        height: normalize(40),
        alignItems:'center',
        justifyContent:'center'
    }
})