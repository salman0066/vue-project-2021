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
                snapData.push({
                    data_type: change.doc.data().data_type,
                    downloadable: change.doc.data().downloadable,
                    tags: change.doc.data().tags,
                    title: change.doc.data().title,
                    uid_source: change.doc.data().uid_source,
                    x_data: change.doc.data().x_data,
                    y_data: change.doc.data().y_data,
                    x_label: change.doc.data().x_label,
                    y_label: change.doc.data().y_label
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