import {ref} from 'vue';
import {firebaseFireStore} from '@/firebase/database';

function getData(){

    const db = firebaseFireStore;
    let data = ref([]);
    console.log("getGraphData file accessed");

    db.collection('graphs').orderBy("title").get().then((snapshot)=>{
        snapshot.docChanges().forEach((change) => {
            let dbChange = change.type;

            // if(dbChange == "added"){
            //     data.value = change
            // }

            console.log("docChanges");

            if(dbChange == "added"){
                data.value.push({
                    x_data: change.doc.data().x_data,
                    y_data: change.doc.data().y_data,
                    x_name: change.doc.data().x_name,
                    y_name: change.doc.data().y_name,
                    title: change.doc.data().title,
                    tags: change.doc.data().tags
                });
            }
            
        })
    });
    console.log(typeof data.value);
    return data;

  }

  export default getData;
