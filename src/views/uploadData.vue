<template>
    <div class="addData">
      <h1>Add Data</h1>
        <form @submit.prevent="onFormSubmit">
          <div class= "addDataForm">
            <div class="form-group">
                <label>Gene Type</label>
                <select class="form-control" v-model="data.data_type" required>
                  <option>TNNT</option>
                  <option>MYH</option>
                  <option>MYBPC3</option>
                  <option>TPM1</option>
                </select>
            </div>

            <div class="form-group">
                <label>Chart Title</label>
                <input type="text" class="form-control" v-model="data.title" required>
            </div>

            <div class="form-group">
                <label>User ID</label>
                <input type="text" class="form-control" v-model="data.uid_source" required>
            </div>

            <div class="form-group">
                <label>Tags</label>
                <input type="text" class="form-control" v-model="data.tags" required>
            </div>
            <div class="container">
                <div class="row form-group">
                  <div id="xaxis-input" class='col series-input' >
                    <label>X Axis Label</label>
                      <input type="text" class="form-control" v-model="data.x_label" required>

                      <label>Data</label>
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[0]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[1]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[2]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[3]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[4]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[5]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[6]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[7]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[8]" >
                      <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[9]" >
                  </div>
                  <!-- 
                  <button @click="xaxisAddField" class="btn btn-primary btn-block" style="float:right">add another axis field</button> -->
                  <div class="series-input form-group">
                      <label for="y_data_0_Label">Y data Section Label</label>
                      <input type="text" name="y_data_label" class="form-control" v-model="data.y_label" required>

                    <div id="yaxis-input-0" class='col form-group'>
                      <label>Y Axis First Line/Series</label>
                      
                        <label for="y_data_0_Label">Y data series 1 label</label>
                        <input type="text" name="y_data_0_Label" class="form-control" v-model="data.y_data[0].label" required>

                        <label>Series 1 data</label>
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[0]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[1]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[2]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[3]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[4]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[5]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[6]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[7]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[8]" >
                        <input type="text" class="form-control-sm" name="y_data[0]" v-model="data.y_data[0].data[9]" >
                    </div>


                    
                    <div id="yaxis-input-1" class='col form-group'>
                      <label>Y Axis Second Line/Series</label>

                        <label for="y_data_1_Label">Second line Label</label>
                        <input type="text" name="y_data_1_Label" class="form-control" v-model="data.y_data[1].label" required>

                        <label for="y_data[1]">Data</label>
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[0]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[1]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[2]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[3]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[4]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[5]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[6]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[7]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[8]" >
                        <input type="text" class="form-control-sm" name="y_data[1]" v-model="data.y_data[1].data[9]" >
                    </div>
                  </div> <!-- end of y axis section -->
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
import { firebaseFireStore } from "@/firebase/database";

export default {
  data() {
    return {
    //   data: {
    //     uid_source: "alextesting@gmail.com",
    //     tags: ["wow", "cool", "syncopy", "cardio"],
    //     title: "TESTING NEW FIREBASE FORMAT",
    //     x_data: ["test 0","test 1","test 2","test 3","test 4","test 5","test 6","test 7","test 8","test 9"],
    //     y_data: [
    //       {
    //         label: "data ydata label 0",
    //         data: [23,45,56,67,89,76,34,56,11,1]
    //       },
    //       {
    //         label: "data ydata label 1",
    //         data: [12,34,12,23,43,23,12,44,6,4]
    //       }
    //     ]
    // }
    
    data: {
      x_data: [],
      y_data: [
        {
          label: "",
          data: []
        },
        {
          label: "",
          data: []
        }
      ]
    }
  }
},

methods: {

  // showFirebaseMessage(){
  //   let elem = document.getElementById('firebaseResult');
  //   console.log(elem);
  // },

  onFormSubmit(event) {
    event.preventDefault();
    console.log("alex echo");
    console.log(this.data);
    firebaseFireStore.collection('data').add(this.data).then(() => {
      // setTimeout(()=>{
      //   showFirebaseMessage();
      // }, 5);
      
      alert("Data added");

      this.data.data_type = '';
      this.data.title = '';
      this.data.uid_source = '';
      this.data.x_data = '';
      this.data.x_label = '';
      this.data.y_data[0].label = '';
      this.data.y_data[1].label = '';
      this.data.y_data[0].data = '';
      this.data.y_data[1].data = ''
      this.data.y_label = '';
      this.data.tags = '';
   

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

// document.addEventListener("DOMContentLoaded", () => {

//   document.getElementById('x_axisAdd').addEventListener("click", (click)=>{
//     console.log("click xaxis", click);
//     xaxisAddField();
//   })

// });

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