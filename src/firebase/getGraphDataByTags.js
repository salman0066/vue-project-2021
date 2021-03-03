import {ref} from 'vue';
import {firebaseFireStore} from '@/firebase/database';
let data = ref([]);
async function getDataByTag(searchTerm){
    searchTerm = searchTerm.trim();
    const db = firebaseFireStore;
    
    console.log("getGraphData file accessed", "SeachTerm: ", searchTerm);
    
    await db.collection('data')/*.where("tags", "==", searchTerm)*/.get().then((snapshot)=>{
        let snapData = [];
        snapshot.docChanges().forEach((change) => {
            let dbChange = change.type;
            if(dbChange == "added"){
                let docData = change.doc.data();
                let docTags = docData.tags.split(",");
                let tagsTrue = docTags.includes(searchTerm);
                // console.log(tagsTrue);
                if(tagsTrue){
                    snapData.push({
                        data_type: docData.data_type,
                        downloadable: docData.downloadable,
                        tags: docData.tags,
                        title: docData.title,
                        uid_source: docData.uid_source,
                        series: docData.series,
                        x_label: docData.x_label,
                        y_label: docData.y_label
                    });
                }
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

  export default getDataByTag;