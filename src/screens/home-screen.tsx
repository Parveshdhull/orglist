import { SafeAreaView } from 'react-native';
import styles from '../styles/home-screen';
import OrgList from './org-list';
import FilePickerView from './file-picker';
import OrgListContentClass from '../utils/org-list';
import { orgListContent } from '../utils/org-list';
import { observer } from 'mobx-react-lite';

const HomeScreenView = observer(({ orgListContent }: { orgListContent: OrgListContentClass }) => {
    return (
        <SafeAreaView style={styles.container}>
            {orgListContent.contentString == "" ? <FilePickerView /> : <OrgList />}
        </SafeAreaView>
    );
});

function HomeScreen() {
    return (
        <HomeScreenView orgListContent={orgListContent} />
    );
}

export default HomeScreen;