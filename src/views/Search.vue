<template>
  <div class="search">
    <h1>Search</h1>
    <body>
      <div class="searchInput">
        <el-form @submit.prevent="populateReturns">
          <el-form-item>
          <el-input
              type="text"
              placeholder="Search ID.."
              v-model="search"
              required
            ></el-input>
            <button type="submit">Submit</button>

            
          </el-form-item>
        </el-form>
      </div>
      <div v-if="error">{{ error }}</div>
      <el-row v-if="diseaseData">
        <el-col
          :span="8"
          v-for="disease in diseaseData.catTermsMap"
          :key="disease"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '5px' }">
            <template #header>
              <div class="searchHeader">
                <h3>Name: {{ disease.terms[0].name }}</h3>
                <span>Definition: {{ disease.terms[0].definition }}</span>
              </div>
            </template>
            <div style="padding: 5px" class="bottom">
              <span>{{ diseaseName }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </body>
  </div>
  <div>
              <p>Search for these ids</p>
              <ul>
                <li>(192600 for Cardiomyopathy, Familial Hypertrophic)</li>
                <li>(618052 for Cardiomyopathy, Familial Hypertrophic 27)</li>
                <li>(608758 for Cardiomyopathy, Familial Hypertrophic, 10)</li>
                <li>(612098 for Cardiomyopathy, Familial Hypertrophic, 11)</li>
                <li>(612124 for Cardiomyopathy, Familial Hypertrophic, 12)</li>
                <li>(115210 for Cardiomyopathy, Familial Restrictive 1) </li>
                <li>(612422 for Cardiomyopathy, Familial Restrictive 2)</li>
              </ul>
              <ul>
                <li>(612877 for Cardiomyopathy, Dilated,1bb)</li>
                <li>(601493 for Cardiomyopathy, Dilated,1c)</li>
                <li>(613122 for Cardiomyopathy, Dilated,1cc)</li>
                <li>(601494 for Cardiomyopathy, Dilated,1d)</li>
             </ul>
            </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  name: "App",

  setup() {
    const search = ref("");
    let search_returns = ref([]);
    const error = ref(null);
    const diseaseId = search;
    const data = ref();
    async function populateReturns() {
      console.log(diseaseId.value);
      try {
        let search_data = await fetch(
          `https://hpo.jax.org/api/hpo/disease/OMIM%3A${diseaseId.value}`
        );
        if (!search_data.ok) {
          throw Error("Unable to find anything");
        }
        data.value = await search_data.json();
        console.log(data.value);
      } catch (search_error) {
        error.value = search_error.message;
        console.log(error.value);
      }
    }
    const diseaseData = computed(() => {
      return data.value;
    });
    return {
      search,
      search_returns,
      populateReturns,
      diseaseData,
    };
  },
};
</script>

<style scoped>
ul{
  list-style-type: none;
}
</style>