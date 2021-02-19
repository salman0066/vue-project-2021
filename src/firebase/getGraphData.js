// import {ref} from 'vue';
import {firebaseFireStore} from '@/firebase/database';

function getData(){

    const db = firebaseFireStore;
    let data = [];

    db.collection('graphs').orderBy("title").get().then((snapshot)=>{
        snapshot.forEach((doc) => {
            //console.log(doc.data());
            // console.warn(doc.id);
            // console.warn(doc.data().x_data, doc.data().y_data);

            data.push({
                x_data: doc.data().x_data,
                y_data: doc.data().y_data
            });
            // console.log(data);
            // data[0].x_data = (doc.data().x_data);
        })
    });
    return data;

  }

  export default getData;
