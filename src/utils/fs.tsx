import { pick } from '@react-native-documents/picker';
import RNFS from 'react-native-fs';

const watchFile = (uri: string, interval = 5000, callback: (content: string) => void) => {
    let lastContent = '';
    const checkFile = async () => {
        try {
            const content = await RNFS.readFile(uri, 'utf8');
            console.log("data", uri, content, callback)
            if (content !== lastContent) {
                lastContent = content;
                callback(content);
            }
        } catch (err) {
            console.error('Error reading file:', err);
        }
    };

    checkFile();

    return setInterval(checkFile, interval);
};

const pickFile = async (callback: (content: string) => void) => {
    try {
        const [result] = await pick({
            mode: 'open',
        })
        callback(result.uri);
    } catch (err) {
    }
}

export { pickFile, watchFile };