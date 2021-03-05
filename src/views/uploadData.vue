<template>
  <div class="addData">
    <h1>Add Data</h1>
    <form @submit.prevent="onFormSubmit">
      <div class="addDataForm">
        <div class="form-group">
          <label for="geneSelect">Gene Type</label>
          <select
            class="form-control"
            name="geneSelect"
            v-model="data.data_type"
            required
          >
            <option>TNNT</option>
            <option>MYH</option>
            <option>MYBPC3</option>
            <option>TPM1</option>
          </select>
        </div>

        <div class="form-group">
          <label>Chart Title</label>
          <input
            type="text"
            class="form-control"
            v-model="data.title"
            placeholder="...overall title of the graph, will appear above it as a heading"
            required
          />
        </div>

        <div class="form-group">
          <label>Tags</label>
          <input
            type="text"
            class="form-control"
            v-model="data.tags"
            placeholder="...ie: TNNT,GraphData,Research - tags separated by a comma, no spaces or hashtag ('#')"
            required
          />
        </div>
        <el-row class="form-group">
          <el-col :span="12">
            <label for="">X axis label</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="data.x_label"
              placeholder="...label for the bottom xaxis (horizontal)"
              required
            />
          </el-col>
          <el-col :span="12">
            <label for="">Y axis label</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="data.y_label"
              placeholder="...label for the left yaxis (verticle)"
              required
            />
          </el-col>
        </el-row>

        <div class="container">
          <div class="row form-group">
            <el-row id="seriesInputs" >
              <el-col :span="12" class='col series-input' v-for="(series) in seriesHTML" :key="series">
                <el-row>
                  <el-col :span=24><label>Series {{series.num + 1}} title</label>
                    <input type='text' class='form-control' v-model='data.series[series.num].label' placeholder='...subject of the data' required>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :offset=2 :span='20'>
                    <label>Series {{series.num + 1}} X-axis data</label>
                    <el-col :span=24 v-for="(plot, index) in data.series[series.num].data" :key="index">
                      <el-col :span=12>
                        <input type='text' class='form-control-sm' v-model.number='data.series[series.num].data[index].x' required > 
                      </el-col>
                      <el-col :span=12>
                        <input type='text' class='form-control-sm' v-model.number='data.series[series.num].data[index].y' required > 
                      </el-col>
                    </el-col>
                  </el-col>
                </el-row>
                <button @click="incrementSeriesCoordinates(series.num)">Add plot</button>
              </el-col>
            </el-row>
            <!-- 
                  <button @click="xaxisAddField" class="btn btn-primary btn-block" style="float:right">add another axis field</button> -->
          </div>
        </div>

        <div class="form-group">
          <el-row>
            <!-- <el-col style="background-color:blue" :span=8>
              <el-col :span=12>
                Data has been checked before submission<br>
                I am aware that I cannot update data once submitted; I would have to delete existing data and re-upload.
              </el-col>
              <el-col :span=12>
                <input v-model="agree" type='checkbox' name="agree" required>
                <label for="agree">I agree</label>
              </el-col>
            </el-col> -->

            <el-col :offset=6 :span=6>
              <button class="btn btn-primary btn-block">Submit Graph Data</button>
            </el-col>
            <el-col :span=6>
              <button class="btn btn-primary btn-block" @click="incrementSeries()">
                Add another series
              </button>
            </el-col>
          </el-row>
          

          
        </div>
      </div>
    </form>
    <!-- end h1 title -->
  </div>
  <!-- end of form -->
  <div id="firebaseResult" hidden="true">
    <el-row style="background-color: blue">
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
      seriesHTML: [
        {
          num: 0,
        }
      ],
      // data: {
      //   series: [
      //     {
      //       label: "",
      //       data: [{}, {}, {}],
      //     }
      //   ],
      // },

      data: {tags: "MYBC3, HCM, HEALTHY", data_type: "MYBPC3", uid_source: "salman@hotmail.com", title: "Effects of pathological ADP levels on cardio-myocyte function", x_label: "Calcium Concentrate", y_label: "Tension", series: [{label: 'HCMmybpc3', data: [
  {
    "x": 1.01,
    "y": 0.906
  },
  {
    "x": 1.23,
    "y": 1.44
  },
  {
    "x": 1.52,
    "y": 2.43
  },
  {
    "x": 1.87,
    "y": 3.97
  },
  {
    "x": 2.33,
    "y": 6.23
  },
  {
    "x": 2.82,
    "y": 8.31
  },
  {
    "x": 3.31,
    "y": 10.5
  },
  {
    "x": 4.26,
    "y": 12.9
  },
  {
    "x": 5.39,
    "y": 15
  },
  {
    "x": 7.16,
    "y": 16.1
  },
  {
    "x": 10,
    "y": 16.8
  },
  {
    "x": 14.3,
    "y": 17.1
  },
  {
    "x": 20.5,
    "y": 17.1
  },
  {
    "x": 27,
    "y": 17.2
  },
  {
    "x": 31.4,
    "y": 17.2
  }
]},{label: 'DONOR', data: [
  {
    "x": 1.02,
    "y": 8.79
  },
  {
    "x": 1.21,
    "y": 10.7
  },
  {
    "x": 1.43,
    "y": 12.3
  },
  {
    "x": 1.73,
    "y": 13.8
  },
  {
    "x": 2.13,
    "y": 15.1
  },
  {
    "x": 2.58,
    "y": 16.2
  },
  {
    "x": 3.26,
    "y": 17.1
  },
  {
    "x": 4.02,
    "y": 17.8
  },
  {
    "x": 5.08,
    "y": 18.3
  },
  {
    "x": 7.92,
    "y": 19
  },
  {
    "x": 9.84,
    "y": 19.3
  },
  {
    "x": 16,
    "y": 19.4
  },
  {
    "x": 20,
    "y": 19.6
  },
  {
    "x": 25.3,
    "y": 19.8
  },
  {
    "x": 31.4,
    "y": 19.7
  }
]}]
      }
    };
  },

  methods: {
    incrementSeries(){
      let seriesHTML = this.seriesHTML;
      seriesHTML.push({num: seriesHTML.length});
      this.data.series.push({label: "", data: [{}, {}, {}]})
    },

    incrementSeriesCoordinates(seriesNum){
      this.data.series[seriesNum].data.push({});
    },

    onFormSubmit(event) {
      event.preventDefault();
      this.data.uid_source = firebaseAuthentication.currentUser.email;
      this.data.tags += "," + this.data.data_type; /**PUSH THE data_type/gene_type onto the list of tags */
      if(this.data.series.length == 1) this.data.series.push({label:"", data:[]}); /**error control - apexcharts likes 2 series and can omit one if it's empty, but not omit one if it doesnt exist */
      firebaseFireStore
        .collection("data")
        .add(this.data)
        .then(() => {
          alert("Data added");

          this.seriesHTML = [{num: 1}];

          this.data.data_type = "";
          this.data.title = "";
          this.data.uid_source = "";
          this.data.series = [
            {label:"", data:[]}
          ];
          this.data.y_label = "";
          this.data.x_label = "";
          this.data.tags = "";

          console.log(this.data);

          document.documentElement.scrollTop = 0;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    add() {
      this.data.push({
        x_data: "",
        y_data: "",
      });
    },
  },
};
</script>

<style scoped>
button {
  background-color: #c1272d;
  align-content: center;
  color: white;
  cursor: pointer;
}

input[type="text"] {
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

.arrayInput {
  display: inline-block;
  color: #c1272d;
}

.addDataForm {
  align-content: center;
  margin: 5%;
}

.form-group {
  margin-top: 20px;
}

.red{
  color:red;
}

.series-input {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}
</style>