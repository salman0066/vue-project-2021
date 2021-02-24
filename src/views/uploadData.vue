<template>
    <div class="addData">
      <h1>Add Data</h1>
            <form @submit.prevent="onFormSubmit">
              <div class= "addDataForm">
                <div class = "form-group">
                    <label>Gene Type</label>
                    <select class="form-control" v-model="data.data_type" required>
                      <option>TNNT</option>
                      <option>MYH</option>
                      <option>MYBPC3</option>
                      <option>TPM1</option>
                    </select>
                </div>

                <div class = "form-group">
                    <label>Chart Title</label>
                    <input type="text" class="form-control" v-model="data.title" required>
                </div>

                <div class = "form-group">
                    <label>User ID</label>
                    <input type="text" class="form-control" v-model="data.uid_source" required>
                </div>

                <div class = "form-group">
                    <label>Tags</label>
                    <input type="text" class="form-control" v-model="data.tags" required>
                </div>
          <div class="container">
              <div class="row">
                <div class='col' >
                  <label>X Axis Label</label>
                    <input type="text" class="form-control" v-model="data.x_label" required>
                    <label>X Axis Data</label>
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
                    <input type="text" class="form-control-sm" name="x_data[]" v-model="data.x_data[10]" >



                </div>

                <div class='col'>
                  <label>Y Axis Label</label>
                    <input type="text" class="form-control" v-model="data.y_label" required>
                    <label>Y Axis Data</label>
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[0]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[1]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[2]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[3]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[4]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[5]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[6]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[7]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[8]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[9]" >
                    <input type="text" class="form-control-sm" name="y_Data[]" v-model="data.y_Data[10]" >
                </div>
              </div>
          </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Data</button>
                </div>
              </div>
            </form>
  

    </div>
</template>

<script>
//import {ref} from "vue";
import { firebaseFireStore } from "@/firebase/database";

export default {
  data() {
    return {
      data: {
        x_data: [],
        y_Data: []
    }
  }
},

methods: {
  onFormSubmit(event) {
    event.preventDefault();
    firebaseFireStore.collection('data').add(this.data).then(() => {
      alert("Data successfully added!");
      this.data.data_type = ''
      this.data.title = ''
      this.data.uid_source = ''
      this.data.x_data = ''
      this.data.x_label = ''
      this.data.y_Data = ''
      this.data.y_label = ''
      this.data.tags = ''
    }).catch((error) => {
      console.log(error);
    });
    },

    add() {
      this.data.push({
        x_data: '',
        y_Data: ''
      })
    }
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

</style>