import { SafeAreaView } from 'react-native';
import styles from '../styles/home-screen';
import OrgList from './org-list';
import FilePickerView from './file-picker';
import { contentString } from '../utils/org-list';

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {contentString == null ? <FilePickerView /> : <OrgList />}
        </SafeAreaView>
    );
}

export default HomeScreen;