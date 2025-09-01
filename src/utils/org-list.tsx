import { watchFile } from '../utils/fs';

let fileUri: string;
let contentString: string;

function updateContent(content: string) {
    contentString = content;
}

function updateFileUri(uri: string) {
    fileUri = uri;
    watchFile(uri, 5000, updateContent);
}

export { contentString, updateFileUri }