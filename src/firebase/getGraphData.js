import {ref} from 'vue';
import {firebaseFireStore} from '@/firebase/database';
let data = ref([]);
async function getData(){

    const db = firebaseFireStore;
    
    console.log("getGraphData file accessed");
    
    await db.collection('data').orderBy('title').get().then((snapshot)=>{
        let snapData = [];
        snapshot.docChanges().forEach((change) => {
            let dbChange = change.type;
            let docData = change.doc.data();
            if(dbChange == "added"){
                snapData.push({
                    data_type: docData.data_type,
                    downloadable: docData.downloadable,
                    tags: docData.tags,
                    title: docData.title,
                    uid_source: docData.uid_source,
                    x_label: docData.x_label,
                    y_label: docData.y_label,
                    series: docData.series,
                });
            }
        });
        data.value = snapData;   
    });
    return data.value;

  }

  export default getData;