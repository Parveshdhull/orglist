import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#303030',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});

export default styles;