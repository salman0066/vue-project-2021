import {ref} from 'vue';
import {firebaseFireStore} from '@/firebase/database';
let data = ref([]);
async function getData(uid){

    const db = firebaseFireStore;
    
    console.log("getGraphData file accessed", uid);
    
    await db.collection('data').where('uid_source', '==', uid).orderBy('title').get().then((snapshot)=>{
        let snapData = [];
        snapshot.docChanges().forEach((change) => {
            let dbChange = change.type;
            if(dbChange == "added"){
                let docData = change.doc.data();
                snapData.push({
                    data_type: docData.data_type,
                    downloadable: docData.downloadable,
                    tags: docData.tags,
                    title: docData.title,
                    uid_source: docData.uid_source,
                    x_data: docData.x_data,
                    y_data: docData.y_data,
                    x_label: docData.x_label,
                    y_label: docData.y_label
                });
                // console.log("snapData",snapData);
            }
        });
        // console.log("outside snapData", snapData);
        data.value = snapData;   
        // console.log("data.value ", data.value);
    });
    // console.log("before return ",data.value);
    return data.value;

  }

  export default getData;