import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/file-picker';
import { pickFile } from '../utils/fs';
import { updateFileUri } from '../utils/org-list';

function FilePickerView() {
    return (
        <>
            <Text style={styles.orgList}> {'OrgList'} </Text>
            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => pickFile(updateFileUri)}>
                <Text style={styles.button}> {'Open Org File'} </Text>
            </TouchableOpacity></>
    )
}

export default FilePickerView;