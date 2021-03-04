<template>
<h2>{{apexFirebaseMaster.length}} Records found for {{user}}</h2>
<el-row>
  <el-col :offset="1" :span="22">
    <el-row v-if="apexFirebaseMaster.length != 0">
      <el-col class="singleGraph" :span=12 v-for="(fireData, index) in apexFirebaseMaster" :key="index">
        <apexchart 
          width=550 
          type="line" 
          :options="fireData.options" 
          :series="fireData.series">
        </apexchart>
        <el-row style="margin:20px">
          <el-col :span=12>
            <p><i>All Tags: </i>{{ fireData.extra.tags.substring(0,50) }}<span v-if="fireData.extra.tags.length >= 50">...</span></p>
          </el-col>
          <el-col :span=12>
            <button @click="deleteMyGraph(fireData.extra.id)">Delete</button>
          </el-col>
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
import getData from '@/firebase/getMyGraphData';
import {useRouter} from 'vue-router';
import {firebaseFireStore as db} from '@/firebase/database';

export default {
  props: ['user'],
  setup(props) {
    'use strict';
    let router = useRouter();

    let apexFirebaseMaster = reactive([
      // an "apexChartDetails" for each record in firebase
    ]);
    let apexDetails = reactive({
      options: null,
      series: null,
      extra: null,
    });

    //console.log(apexFirebaseMaster, apexDetails, apexChartOptions, apexChartSeries);

    let apexChartOptions; let apexChartSeries; let apexChartExtra; 

    function getPageData(){
    let firebaseArray = [];
      getData(props)
      .then(result => {
        console.log(result);
        firebaseArray = result;
      })
      .then(()=> {
        let firebaseRecord = null;
        /**sort "data" from firebase into presentable data for the apex charts */
        console.log("fba.l:", firebaseArray);
        for(let i = 0; i<firebaseArray.length; i++){
          firebaseRecord = firebaseArray[i];
          firebaseRecord.downloadable = false;
          // console.log(firebaseRecord);

          apexChartOptions = {
            title: {
              text: firebaseRecord.title +  " - Gene Type: " + firebaseRecord.data_type,
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
            id: firebaseRecord.id
          }

          apexDetails = {
            options: apexChartOptions,
            series: apexChartSeries,
            extra: apexChartExtra
          }
          apexFirebaseMaster.push(apexDetails);
        }
        console.log(apexFirebaseMaster.length, apexFirebaseMaster);
          
      });
    }

    async function deleteMyGraph(graphId){
        await db.collection('data').doc(graphId).delete().then(()=>{
        alert("Record deleted");
        router.push('/');
      });

    }

    
    getPageData();

    return {
      deleteMyGraph,
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

li{
  display: inline;
}
</style>