<template>
  <h2>{{ apexFirebaseMaster.length }} Records found from "{{tag}}"</h2>

  <el-row>
    <el-col :offset="6" :span="12">
      <el-form v-if="apexFirebaseMaster.length == 0" id="tagSearchForm" @submit.prevent="getPageData(tag)">
        <label for="tagSearch">Tag Search: </label>
        <select class="form-control" name="tagSearch" v-model="tag" required>
          <option>TNNT</option>
          <option>MYH</option>
          <option>MYBPC3</option>
          <option>TPM1</option>
        </select>
        <input type='submit' value="Search"/>
      </el-form>
    </el-col>
  </el-row>

  <el-row>
    <el-col :offset="1" :span="22">
      <el-row v-if="apexFirebaseMaster.length != 0">
        <el-col
          class="singleGraph"
          :span="12"
          v-for="(fireData, index) in apexFirebaseMaster"
          :key="index"
        >
          <el-col class="titleText" :offset=2 :span="20"
            >
              {{ fireData.extra.title }}
              <br>
              {{ fireData.extra.data_type }}
          </el-col>
          <apexchart
            width="550"
            type="line"
            :options="fireData.options"
            :series="fireData.series"
          ></apexchart>
          <el-col :span="24">
            <p style="padding-top: 60px"><i>All Tags: </i>{{ fireData.extra.tags.substring(0,50) }}<span v-if="fireData.extra.tags.length >= 50">...</span></p>
          </el-col>
        </el-col>
      </el-row>
      <el-row v-else>
        No data - upload some data
        <router-link :to="{ name: 'UploadData' }"
          ><span>here</span></router-link
        >
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { ref, reactive } from "vue";
import getDataByTag from "@/firebase/getGraphDataByTags";

export default {

  setup() {
    "use strict";

    let tag = ref("");

    let apexFirebaseMaster = reactive([
      // an "apexChartDetails" for each record in firebase
    ]);

    let apexDetails = reactive({
      options: null,
      series: null,
      extra: null,
    });

    let firebaseArray = [];
    let apexChartOptions = [];
    let apexChartSeries = [];
    let apexChartExtra = [];
    let firebaseRecord = {};

    function getPageData(tag) {
      getDataByTag(tag)
        .then((result)=>{
          console.log(apexFirebaseMaster);
          // if(apexFirebaseMaster.length != 0) apexFirebaseMaster = [];
          return result;
        })
        .then((result) => {
          firebaseArray = result;
        })
        .then(() => {
          /**sort "data" from firebase into presentable data for the apex charts */
          console.log(apexFirebaseMaster, apexChartOptions, apexChartSeries);
          for (let i = 0; i < firebaseArray.length; i++) {
            firebaseRecord = firebaseArray[i];
            firebaseRecord.downloadable = false;
            // console.log(firebaseRecord);
            // console.log(firebaseRecord.downloadable);

            apexChartOptions = {
              chart: {
                id: firebaseRecord.title,
                dropShadow: {
                  enabled: true,
                  color: "#000",
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2,
                },
                toolbar: {
                  show:
                    firebaseRecord.downloadable /** can put 1/0 for true/false */,
                },
              },
              colors: ["#259ffb", "#25e6a6"],
              dataLabels: {
                enabled: true,
              },
              stroke: {
                curve: "smooth",
              },
              xaxis: {
                title: { text: firebaseRecord.x_label },
                categories: firebaseRecord.x_data,
                tickAmount: 10,
              },
              yaxis: {
                title: { text: firebaseRecord.y_label },
              },
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
              extra: apexChartExtra,
            };

            apexFirebaseMaster.push(apexDetails);
            console.log(apexFirebaseMaster);
          }
          console.log(apexFirebaseMaster);
          return apexFirebaseMaster;
          // console.log(apexFirebaseMaster.length, apexFirebaseMaster);
        });
        
    }

    return {
      apexFirebaseMaster,
      alert,
      tag,
      getPageData,
    };
  },
};
</script>

<style scoped>
.singleGraph {
  margin-bottom: 20px;
  border-bottom: 2px solid gainsboro;
}

.titleText {
  font-weight: bold;
}

#tagSearchForm{
  padding-bottom:35px;
}

li {
  display: inline;
}
</style>