<template>
<h2>{{apexFirebaseMaster.length}} Records found</h2>
<el-row>
  <el-col :offset="1" :span="22">
    <el-row v-if="apexFirebaseMaster.length != 0">
      <el-col class="singleGraph" :span=12 v-for="(fireData, index) in apexFirebaseMaster" :key="index">
          <el-col class="titleText" :span="20"
          >
            {{ fireData.extra.title }}
            <br>
            {{ fireData.extra.data_type }}
          </el-col>
        <apexchart 
          width=550 
          type="line" 
          :options="fireData.options" 
          :series="fireData.series">
        </apexchart>
        <el-col :span="24">
          <p style="padding-top: 60px"><i>Tags: </i>{{ fireData.extra.tags }}</p>
        </el-col>
        <el-row>
          <!-- <el-col :span=22>
            <i>Added by: </i>{{fireData.extra.uid_source}}
          </el-col> -->
        </el-row>
      </el-col>
    </el-row>
    <el-row v-else>
      No data - upload some data <router-link :to="{name: 'UploadData'}"><span>here</span></router-link>
    </el-row>
  </el-col>
</el-row>

</template>

<script>
import { reactive } from "vue";
import getData from '@/firebase/getGraphData';

export default {

  setup() {
    'use strict';

    let apexFirebaseMaster = reactive([
      // an "apexChartDetails" for each record in firebase
    ]);
    let apexDetails = reactive({
      options: null,
      series: null,
      extra: null,
    });

    //console.log(apexFirebaseMaster, apexDetails, apexChartOptions, apexChartSeries);

    let firebaseArray = [];
    let apexChartOptions; let apexChartSeries; let apexChartExtra; 

    function getPageData(){
      getData()
      .then(result => {
        firebaseArray = result;
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
              type: 'numeric'
            },
            yaxis: {
              title: { text: firebaseRecord.y_label},
            }
          }; /**end of chartOptions */

          apexChartSeries = [
            {
              name: firebaseRecord.series[0].label,
              data: firebaseRecord.series[0].data,
            },
            {
              name: firebaseRecord.series[1].label,
              data: firebaseRecord.series[1].data,
            },
          ]; /**end of chartSeries */

          apexChartExtra = {
            tags: firebaseRecord.tags,
            uid_source: firebaseRecord.uid_source,
            data_type: firebaseRecord.data_type,
            title: firebaseRecord.title,
          };

          apexDetails = {
            options: apexChartOptions,
            series: apexChartSeries,
            extra: apexChartExtra
          }

          apexFirebaseMaster.push(apexDetails);
        }
        // console.log(apexFirebaseMaster.length, apexFirebaseMaster);
      });
    }

    getPageData();

    return {
      
      apexFirebaseMaster,
    };
  },
};
</script>

<style scoped>

.singleGraph{
  margin-bottom:20px;
  border-bottom:2px solid gainsboro
}

.titleText {
  font-weight: bold;
}

li{
  display: inline;
}
</style>