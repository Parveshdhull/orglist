import { makeObservable, observable, action } from "mobx"
import { watchFile } from '../utils/fs';

class OrgListContentClass {

    fileUri: string = "";
    contentString: string = "";

    constructor() {
        makeObservable(this, {
            contentString: observable,
            updateContent: action,
        })
    }

    updateContent(content: string) {
        this.contentString = content;
    }

    updateFileUri(uri: string) {
        this.fileUri = uri;
        watchFile(uri, 5000, this.updateContent.bind(this));
    }

}

const orgListContent = new OrgListContentClass()

export default OrgListContentClass
export { orgListContent }
