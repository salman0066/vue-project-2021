<template>
<el-row>
  <el-col :offset="2" :span="24" style="background-color:beige">
    <div>
      <apexchart
        width="500"
        type="line"
        :options="chartOptions"
        :series="apexSeries"
      ></apexchart>

    </div>

  </el-col>
</el-row>


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

export default {
  setup() {
  'use strict';

  
    const chartOptions = ref({
      title: {
        text: "wahoo chart options are cool",
        align: "left"
      },
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
        curve: ['smooth','stepline', 'straight'] /** or curve: '<line-type>' */
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      }
      // ,
      // legend: {
      //   position: 'bottom',
      //   horizontalAlign: 'center',
      //   floating: true,
      //   offsetY: 10, -------------------------- with legend, data gets cut off and squashed
      //   offsetX: -5
      // }
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

    let apexFirebaseMaster = reactive([
      // an "apexChartDetails" for each record in firebase
    ]);
    let apexDetails = reactive({
      options: null,
      series: null,
      extra: null,
    }); 

    // let apexChartOptions = {
    //   title: {
    //     text: "",
    //     align: "left"
    //   },
    //   chart: {
    //     id: "",
    //     dropShadow: {
    //             enabled: true,
    //             color: '#000',
    //             top: 18,
    //             left: 7,
    //             blur: 10,
    //             opacity: 0.2
    //     },
    //     toolbar: {
    //       show: false /** can put 1/0 for true/false */
    //     }
    //   },
    //   colors: [
    //     '#259ffb',
    //     '#25e6a6'
    //     ],
    //   dataLabels: {
    //     enabled: true,
    //   },
    //   stroke: {
    //     curve: 'smooth'
    //   },
    //   xaxis: {
    //     categories: [],
    //   }
    // };
    // let apexChartSeries = [
    //   {
    //     name: "",
    //     data: [],
    //   },
    //   {
    //     name: "",
    //     data: [],
    //   },
    // ];

    console.log(apexFirebaseMaster, apexDetails, apexChartOptions, apexChartSeries);

    let firebaseArray = [];
    let apexChartOptions; let apexChartSeries; let apexChartExtra; 


    getData()
    .then(result => {
      firebaseArray = result
    })
    .then(()=> {
      let firebaseRecord = null;
      /**sort "data" from firebase into presentable data for the apex charts */

      for(let i = 0; i<firebaseArray.length; i++){
        firebaseRecord = firebaseArray[i];
        firebaseRecord.downloadable = false;
        // console.log(firebaseRecord);
        // console.log(firebaseRecord.downloadable);
        
        apexChartOptions = {
          title: {
            text: firebaseRecord.title +  " - " + firebaseRecord.data_type,
            align: "left"
          },
          chart: {
            id: firebaseRecord.title,
            dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
            },
            toolbar: {
              show: firebaseRecord.downloadable /** can put 1/0 for true/false */
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
            curve: 'smooth'
          },
          xaxis: {
            title: { text: firebaseRecord.x_label },
            categories: firebaseRecord.x_data,
          },
          yaxis: {
            title: { text: firebaseRecord.y_label},
          }
        }; /**end of chartOptions */
        apexChartSeries = [
          {
            name: firebaseRecord.y_data[0].label,
            data: firebaseRecord.y_data[0].data,
          },
          {
            name: firebaseRecord.y_data[1].label,
            data: firebaseRecord.y_data[1].data,
          },
        ]; /**end of chartSeries */
        apexChartExtra = {
          tags: firebaseRecord.tags,
          uid_source: firebaseRecord.uid_source
        }

        apexDetails = {
          options: apexChartOptions,
          series: apexChartSeries,
          extra: apexChartExtra
        }

        apexFirebaseMaster.push(apexDetails);

        console.log(apexChartOptions);
        console.log(apexChartSeries);
        console.log(apexChartExtra);
        console.log(apexDetails);
        console.log(apexFirebaseMaster);
        console.log(apexFirebaseMaster.length);
      }
        
    });

    return {
      chartOptions,
      apexSeries,
      apexFirebaseMaster,
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