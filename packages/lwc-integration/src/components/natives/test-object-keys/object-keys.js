import { LightningElement } from "lwc";

function getType(recordId, recordUi) {
    const record = recordUi.records[recordId];
    const { apiName } = record;
    const recordTypeInfos = recordUi.objectInfos[apiName].recordTypeInfos;
    const keys = Object.keys(recordTypeInfos);
    const masterRecordTypeId = keys.find(id => {
        return recordTypeInfos[id].master;
    });

    return masterRecordTypeId;
}

export default class ObjectKeys extends LightningElement {
    state = {
        test: 1,
        type: 'default',
        recordUi: {
            records: {
                "001x" : { apiName: "Opportunity" }
            },
            objectInfos: {
                "Opportunity": {
                    recordTypeInfos: {
                        "key": { master: true }
                    }
                }
            }
        }
    };

    get key() {
        const recordId = "001x";
        return getType(recordId, this.state.recordUi) || 'fail'
    }

}
