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

            <div>
              <p>Search for these ids</p>
             (115197)
             (208754)
             (616117)
             (212130)
             (115200)
             (612158) 
             (600884)
             (612877)
             (601493)
             (613122)
             (601494)
            </div>
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