<template>


<!-- 
  <div>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div>
      <button @click="updateBarChart">Update!</button>
    </div>
  </div> -->
      <apexchart
        width="500"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
  <div id="graphSection" v-if="myData">
    <div 
      id="graphInsert"
    >

      <!-- <div>this will be a graph {{}} {{}}</div> -->


    </div>
  </div>

  <div v-else>
    Your graphs will appear here once you have uploaded some data
  </div>
  
</template>

<script>
import { ref } from "vue";
// import getData from '@/firebase/getGraphData';
import {firebaseFireStore} from '@/firebase/database';

export default {
  setup() { 
    // const db = firebaseFireStore;
    let myData = [];
    const elem = document.getElementById('graphInsert');
    //myData = getData();

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

    function getDataAsync(callbackPopulateApex, callbackGetData){ /**this calls populateApexCharts */
      try {
        myData = callbackGetData(); 
      } catch (error) {
        console.error(error);
      }
      try {
        if(myData != []){
          elem.innerHTML = "got data - running callbackPopulateApex";
          callbackPopulateApex(myData);
        }
      } catch (error) {
        console.error(error);
      }
    }

    function populateApexCharts(graphData){
      if(graphData != []){
        console.log(graphData && graphData.length);
        elem.innerHTML = "finished populateApexCharts";
      }
    
    }

    getDataAsync(populateApexCharts, getData);



    const chartOptions = ref({
      chart: {
        id: "barchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    });
    const series = ref([
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ]);



    return {
      // updateBarChart,
      elem,
      chartOptions,
      series,
      myData,
      getData,
      getDataAsync
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
    display: inline-block;  
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
</style>