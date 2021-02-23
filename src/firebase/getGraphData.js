import {ref} from 'vue';
import {firebaseFireStore} from '@/firebase/database';
let data = ref([]);
async function getData(){

    const db = firebaseFireStore;
    
    console.log("getGraphData file accessed");
    
    await db.collection('graphs').orderBy("title").get().then((snapshot)=>{
        let snapData = [];
        snapshot.docChanges().forEach((change) => {
            let dbChange = change.type;
            if(dbChange == "added"){
                snapData.push({
                    x_data: change.doc.data().x_data,
                    y_data: change.doc.data().y_data,
                    x_name: change.doc.data().x_name,
                    y_name: change.doc.data().y_name,
                    title: change.doc.data().title,
                    tags: change.doc.data().tags
                });
                // console.log("snapData",snapData);
            }
        });
        // console.log("outside snapData", snapData);
        data.value = snapData;   
        // console.log("data.value ", data.value);
    });
    console.log("before return ",data.value);
    return data.value;

  }

  export default getData;