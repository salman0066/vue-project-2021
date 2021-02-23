<template>
  <!-- <div>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="apexSeries"
    ></apexchart>

    testing {{ apexOptions }}
  </div> -->

  <div id="graphs" class="outerdiv" v-if="true">
    <div
      i="graph"
      class="innerdiv"
      v-for="(fireData, index) in masterArray"
      :key="index"
    >
      <p style="border: 0.5px solid black">apex => {{ fireData.categories }}</p>
      <p>{{ fireData.categories[0] }}</p>
      <p>{{ fireData.categories[1] }}</p>
      <p>{{ fireData.categories[2] }}</p>

      <apexchart
        width="500"
        type="bar"
        :options="fireData"
        :series="apexSeries"
      ></apexchart>
    </div>

    <!-- <div
      id="graph"
      class="innerdiv"
      v-for="(fire, index) in firestoreData"
      :key="index"
    >
      <div>
        <div>this will be a graph {{}} {{index + 1}}</div>
        <h5>
          <p>{{ fire.title }}</p>
        </h5>
        <p>{{ fire.x_name }}</p>
        <p>{{ fire.y_name }}</p>
        <p>x's: {{ fire.x_data[0] }}, {{ fire.x_data[1] }}</p>
        <p>y's: => {{ fire.y_data }}</p>
      </div>
    </div> -->
  </div>

  <div v-else>
    Your graphs will appear here once you have uploaded some data
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import getData from '@/firebase/getGraphData';
// import { firebaseFireStore } from "@/firebase/database";

export default {
  setup() {
  'use strict';

 // 'use strict';
                // const myData = [];

                // function getData() {
                //   return new Promise((resolve, reject) => {
                //     let result = '';
                //     const db = firebaseFireStore;
                //     db.collection("graphs").orderBy("title").get().then((snapshot) => {
                //       snapshot.forEach((doc) => {
                //         //console.log(doc.data());
                //         // console.warn(doc.id);
                //         // console.warn(doc.data().x_data, doc.data().y_data);
                //         // myData.push({
                //         //   x_data: doc.data().x_data,
                //         //   y_data: doc.data().y_data,
                //         // });

                //         let graphObj = createGraphRecord({x_data: doc.data().x_data});
                //         logGraphRecord(graphObj);
                //         console.log("db collection");

                //         let prom = Promise.resolve(createGraphRecord);
                //         prom.then(logGraphRecord());


                //       });
                //     });
                //     console.log(result);
                //     if(result == "success"){
                //       resolve();
                //     }
                //     reject("not success");
                //   });
                // }

                // function createGraphRecord(graph){
                //   let graphObj = {
                //     x_data: graph.x_data
                //     // y_data: graph.y_data,
                //     // x_name: graph.x_name
                //     // y_name: graph.
                //     // title: 
                //     // tags: 
                //   }
                //   console.log(graphObj, graphObj.x_data);
                //   return new Object(graphObj);
                // }

                // function logGraphRecord(graph){
                //   return new Promise((resolve, reject) => {
                //     myData.push(graph);
                //     console.log(myData);
                //     console.log(graph);
                //     if(graph){
                //       resolve("success");
                //     }
                //     else{
                //       reject("no graph");
                //     }
                //   })
                // }


  // getData();
  // console.log("this");

    // console.log("data")
    
    // const db = firebaseFireStore;
    // let  data = ref([]);
    // console.log("getGraphData file accessed");
    // let snapData = [];
    // db.collection('graphs').orderBy("title").onSnapshot((snapshot)=>{
    //     snapshot.docChanges().forEach((change) => {
    //         let dbChange = change.type;

    //         console.log(dbChange, "found record in firebase");

    //         if(dbChange == "added"){
    //             snapData.push({
    //                 x_data: change.doc.data().x_data,
    //                 y_data: change.doc.data().y_data,
    //                 x_name: change.doc.data().x_name,
    //                 y_name: change.doc.data().y_name,
    //                 title: change.doc.data().title,
    //                 tags: change.doc.data().tags
    //             });
    //         }
    //     });
    //     data.value = snapData;   
    //     console.log(data.value);
    // });


    let data = [];
    // function getDataAsync() {
    //   return new Promise((resolve, reject) => {
    //     data = getData().then(result => result.data);
    //     // data = Array.from(data, x => x);
    //     if (!data){
    //       reject("something went wrong");
    //     }
    //     else {

    //       resolve();
    //     }
    //   });
    // }

    // function printAsyncData(){
    //   console.log(typeof data);
    //   console.log(data);
    //   console.log(data.value);
    // }
    
    // let myData = [];
    // getDataAsync().then(/*printAsyncData*/);

    getData().then(result => {
      data = result
    })
    .then(()=> {
      console.log(data);
      console.log(data.length);
      
      for(let i = 0; i<data.length; i++){
        let thisData = data[i];
        console.log(thisData.x_data, thisData.title, thisData.tags);
      }
    });

    // let myData = [];
    // function getDataAsync(callbackPopulateApex, callbackGetData){ /**this calls populateApexCharts */
    //   try {
    //     myData = callbackGetData(); 
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   try {
    //     if(myData != []){
    //       callbackPopulateApex(myData);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    // function populateApexCharts(graphData){
    //   if(graphData != []){
    //     console.log(graphData && graphData.length);
    //     console.log(graphData);
    //   }
    
    // }

    // getDataAsync(populateApexCharts, getData);

    /*
    let masterArray = ref([
      [
        {chartOptionsBasicBarChart},
        {seriesBasicBarChart}
      ],
      [
        {chartOptionsBasicBarChart},
        {seriesBasicBarChart}
      ]
    ])
    */


    let firestoreData = ref([
      {
        x_data: [9, 2, 3, 4, 5, 6, 7],
        y_data: [9, 8, 7, 6, 5, 4, 3],
        x_name: "x axis 1",
        y_name: "y axis 1",
        title: "1st graph",
      },
      {
        x_data: [24, 95],
        y_data: [77, 98],
        x_name: "x axis 2",
        y_name: "y axis 2",
        title: "2nd graph",
      },
      {
        x_data: [12, 1],
        y_data: [44, 56],
        x_name: "x axis 3",
        y_name: "y axis 3",
        title: "3rd graph",
      },
    ]);





    // let apexOptions = ref({ // -------- more complicated array
    //   series: {
    //     data: []
    //   },
    //   options: {
    //     xaxis: {
    //       categories: []
    //     },
    //   }
    // });

    let fireData;

    let allApexOptions = reactive([]);

    // const chartOptions = ref({
    //   chart: {
    //     id: "barchart-example",
    //   },
    //   xaxis: {
    //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    //   },
    // });

    let apexSeries = [
      {
        data: [30, 40, 35, 66, 77, 88, 99, "20"],
      },
    ];

    const series = ref([
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ]);

    for (let i = 0; i < firestoreData.value.length; i++) {
      let apexOptions = reactive({
        xaxis: {
          categories: [],
        },
      });

      fireData = firestoreData.value[i];
      if (fireData) {
        //console.log(fireData.x_data);
        apexOptions.xaxis.categories.push(fireData.x_data);
        //apexSeries.data.push(fireData.y_data);
        allApexOptions.push(apexOptions);

        //console.log(allApexOptions);
      }
    }

    return {
      // chartOptions,
      series,
      // getData,
      // getDataAsync,
      firestoreData,
      allApexOptions,
      // apexOptions,
      apexSeries,
    };
  },
};
</script>

<style scoped>
.outerdiv {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
}

.innerdiv {
  /* margin: 0 auto;
  display: flex; */
  background-color: cornflowerblue;
}

li{
  display: inline;
}
</style>