<template>
    <div class="addData">
      <h1>Add Data</h1>
        <form @submit.prevent="onFormSubmit">
          <div class= "addDataForm">
            <div class="form-group">
                <label for="geneSelect">Gene Type</label>
                <select class="form-control" name="geneSelect" v-model="data.data_type" required>
                  <option>TNNT</option>
                  <option>MYH</option>
                  <option>MYBPC3</option>
                  <option>TPM1</option>
                </select>
            </div>

            <div class="form-group">
                <label>Chart Title</label>
                <input type="text" class="form-control" v-model="data.title" placeholder="...overall title of the graph, will appear above it as a heading" required>
            </div>

            <div class="form-group">
                <label>Tags</label>
                <input type="text" class="form-control" v-model="data.tags" placeholder="...ie: TNNT,GraphData,Research - tags separated by a comma, no spaces or hashtag ('#')" required>
            </div>
            <el-row>
              <el-col :span=12>
                <label for="">X axis label</label>
                <input type="text" class="form-control" name="" v-model="data.x_label" placeholder="...label for the bottom xaxis (horizontal)" required>
              </el-col>
              <el-col :span=12>
                <label for="">Y axis label</label>
                <input type="text" class="form-control" name="" v-model="data.y_label" placeholder="...label for the left yaxis (verticle)" required>
              </el-col>
            </el-row>

            <div class="container">
                <div class="row form-group">
                  <el-row>
                    <el-col :span="12" id="xaxis-input" class='col series-input' >
                      <el-row>
                        <el-col :span=24>
                          <label for="series1title">Series 1 title</label>
                          <input type="text" name="series1title" class="form-control" v-model="data.series[0].label" placeholder="...subject of the first line data" required>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="12">
                          <label>Series 1 x data</label>
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[0].x" >
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[1].x" >
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[2].x" >
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[3].x" >
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[4].x" >
                        </el-col>
                        <el-col :span="12">
                          <label>Series 1 y data</label>
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[0].y" >
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[1].y" >
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[2].y" >
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[3].y" >
                          <input type="text" class="form-control-sm" v-model="data.series[0].data[4].y" >
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="12" id="xaxis-input" class='col series-input' >
                      <el-row>
                        <el-col :span=24>
                         <label for="series2title">Series 2 title</label>
                        <input type="text" name="series2title" class="form-control" v-model="data.series[1].label" placeholder="...subject of the second line data">
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="12">
                          
                          <label>Series 2 x data</label>
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[0].x" >
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[1].x" >
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[2].x" >
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[3].x" >
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[4].x" >
                        </el-col>
                        <el-col :span="12">
                          <label for="y_data[1]">Series 2 y data</label>
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[0].y" >
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[1].y" >
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[2].y" >
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[3].y" >
                          <input type="text" class="form-control-sm" v-model="data.series[1].data[4].y" >
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <!-- 
                  <button @click="xaxisAddField" class="btn btn-primary btn-block" style="float:right">add another axis field</button> -->
                  
                  
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-block">Add Data</button>
            </div>
          </div>
        </form>
      <!-- end h1 title -->
    </div> <!-- end of form -->
    <div id="firebaseResult" hidden=true>
      <el-row style="background-color:blue">
        <el-col style="background-color: aqua" :offset="20" :span="4">

          <button>hello</button>
          
            <!-- <v-alert
              :type="success"
              :border="left"
              :elevation="5"
              colored-border
              color="deep-purple accent-4"
            >
            alert text
            </v-alert> -->
      
        </el-col>
      </el-row>
    </div>
</template>

<script>
//import {ref} from "vue";
import { firebaseFireStore, firebaseAuthentication } from "@/firebase/database";

export default {
  data() {
    return {

    data: {
      x_data: [],
      series: [
        {
          label: "",
          data: [{},{},{},{},{}],
        },
        {
          label: "",
          data: [{},{},{},{},{}]
        }
      ]
    }

    // data: {
    // }


  }
},



methods: {


  onFormSubmit(event) {
    event.preventDefault();
    this.data.uid_source = firebaseAuthentication.currentUser.email;
    // alert(this.data.tags);
    // this.data.tags += ",",this.data.data_type;
    // alert(this.data.tags);
    // this.data.tags.replace(/\s/g,"");
    // alert(this.data.tags);
    firebaseFireStore.collection('data').add(this.data).then(() => {
      
      alert("Data added");

      this.data.data_type = '';
      this.data.title = '';
      this.data.uid_source = '';
      this.data.series = [{label: "", data:[{},{},{},{},{},{}]},{label: "", data:[{},{},{},{},{},{}]}]
      this.data.y_label = '';
      this.data.x_label = '';
      this.data.tags = '';

      document.documentElement.scrollTop = 0;

    }).catch((error) => {
      console.log(error);
    });
    },

    add() {
      this.data.push({
        x_data: '',
        y_data: ''
      })
    },


  }
}

</script>

<style scoped>



button {   
       background-color: #C1272D;  
       align-content: center; 
        color: white;  
        cursor: pointer;   
         }   

 input[type=text]{   
        width: 100%;   
        margin: 8px 0;  
        padding: 12px 20px;   
        display: inline-block;     
        box-sizing: border-box;   
    }  
 button:hover {   
        opacity: 0.7;   
    }   
 
 .container {   
        padding: 25px;  
        font-size: 15px; 
    }
  
.arrayInput{
        display: inline-block;
        color: #C1272D;
}

.addDataForm{
  align-content: center;
  margin: 5%;
}

.form-group{
  margin-top:20px;
}

.series-input{
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}



</style>