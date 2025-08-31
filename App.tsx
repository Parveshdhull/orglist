import { StatusBar, View } from 'react-native';
import HomeScreen from './src/screens/home-screen';

function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle={'light-content'} />
            <HomeScreen />
        </View>
    );
}

export default App;
