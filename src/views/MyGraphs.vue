<template>
  <div>
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="apexSeries"
    ></apexchart>

  </div>


  <!-- <div id="graphs" class="outerdiv" v-if="true">
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
    </div> -->

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
    </div> 
  </div>-->
<!-- 
  <div v-else>
    Your graphs will appear here once you have uploaded some data
  </div> -->
</template>

<script>
import { ref, reactive } from "vue";
import getData from '@/firebase/getGraphData';
// import { firebaseFireStore } from "@/firebase/database";

export default {
  setup() {
  'use strict';

    let data = [];
    getData().then(result => {
      data = result
    })
    .then(()=> {   

      for(let i = 0; i<data.length; i++){
        let thisData = data[i];
        console.log(thisData.x_data, thisData.title, thisData.tags);
      }
      
    });

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


    let allApexOptions = ref({ 
      series: [
        {
          name: "",
          data: []
        },
        {
          name: "",
          data: [],
        }
      ],
      options: [
        {
          xaxis: {
            categories: []
          },
        },
        {
          xaxis: {
            categories: []
          },
        }
      ]
    });

    let fireData;

    let apexMaster = reactive([]); /**array of all the firestore records with apex structure */

    const chartOptions = ref({
      chart: {
        id: "barchart-example",
        dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
        },
        toolbar: {
          show: false /** can put 1/0 for true/false */
        }
      },
      colors: [
        '#259ffb',
        '#25e6a6'
        ],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: ['smooth','stepline', 'straight']
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      }
    });

    let apexSeries = [
      {
        name: "data 1",
        data: [30, 40, 35, 66, 77, 88, 99, 20],
      },
      {
        name: "data 2",
        data: [1,6,3,44,6,0,7,100],
      },
    ];
/*
    chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
              },
              toolbar: {
                show: false
              }
            },
            colors: ['#77B6EA', '#545454'],
            dataLabels: {
              enabled: true,
            },
            stroke: {
              curve: 'smooth'
            },
            title: {
              text: 'Average High & Low Temperature',
              align: 'left'
            },
            grid: {
              borderColor: '#e7e7e7',
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            markers: {
              size: 1
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              title: {
                text: 'Month'
              }
            },
            yaxis: {
              title: {
                text: 'Temperature'
              },
              min: 5,
              max: 40
            },
            legend: {
              position: 'top',
              horizontalAlign: 'right',
              floating: true,
              offsetY: -25,
              offsetX: -5
            }
          },
          */

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
        apexMaster.push(apexOptions);

        //console.log(allApexOptions);
      }
    }

    return {
      chartOptions,
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