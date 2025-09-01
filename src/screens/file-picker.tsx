import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/file-picker';
import { pickFile } from '../utils/fs';
import { orgListContent } from '../utils/org-list';

function FilePickerView() {
    return (
        <>
            <Text style={styles.orgList}> {'OrgList'} </Text>
            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => pickFile(orgListContent.updateFileUri.bind(orgListContent))}>
                <Text style={styles.button}> {'Open Org File'} </Text>
            </TouchableOpacity></>
    )
}

export default FilePickerView;