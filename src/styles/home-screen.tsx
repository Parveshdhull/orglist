import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#303030',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    orgList: {
        color: 'white',
        fontSize: 70,
        marginTop: 100,
        fontWeight: '600',
        fontFamily: 'roboto',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 100,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: 'white'
    },
    button: {
        fontSize: 18,
        color: 'white',
    }
});

export default styles;