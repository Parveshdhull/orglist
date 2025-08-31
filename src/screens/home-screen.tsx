import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/home-screen';
import { pickFile } from '../utils/fs';

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.orgList}> {'OrgList'} </Text>
            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => pickFile((content) => console.log(content))}>
                <Text style={styles.button}> {'Open Org File'} </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;