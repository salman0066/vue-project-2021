<template>
<div class="search">
<h1>Search</h1>

<h2 class = "header"> Use this page to search all data</h2>
<body>
<div class="searchInput">
<el-form >
    <el-form-item label="Enter Search Term">
    <el-input type="text" placeholder="Search term.." v-model="search" required></el-input>
    <el-button  @click="$emit('Search')">Search</el-button>
    </el-form-item>
</el-form>
</div>  
<div v-if="error">{{error}}</div>
<el-row v-if="search_returns.length">
    <el-col 
    :span="8" 
    v-for="disease in diseases"
    :key="disease.id"
    :offset="index > 0 ? 2 : 0">
    

    <el-card :body-style="{ padding: '8px'}">"
        <template #header>
         <div class = "searchHeader">
            <span>{{ diseaseId }}</span>
        </div>
    </template>>
    <div style="padding: 14px;" class="bottom">
        <span>{{ diseaseName}}</span>        
    </div>
     </el-card>
    </el-col>>
    </el-row>
    </body> 
    </div>  
</template>

<script>

import {ref} from 'vue';

export default {
props: {
user: {
type: Object,
default: () => { },
},
},
name: "App",

setup(){

const search = ref("")
let search_returns = ref([]);
const error = ref(null);
const diseaseId = search;

const base_url = "hpo.jax.org";

async function populateReturns(){
const search_base_url = base_url +"api/hpo/disease/"+{diseaseId}+""

try {
let search_data = await fetch(search_base_url);
if(!search_data.ok){
    throw Error("Unable to find anything")
    }

    search.value = await search_data.json();
}

catch (search_error) {
    error.value = search_error.message;
    console.log(error.value);
}
}
populateReturns();

return {search, search_returns, populateReturns}
},
};
</script>