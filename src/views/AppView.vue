<script setup lang="ts">
// @ts-ignore
import { api } from '/src/composables/api';
// @ts-ignore
import { useRoute } from 'vue-router';
// @ts-ignore
import { computed, ref, watch } from 'vue';
// @ts-ignore
import AppTable from '/src/components/AppTable.vue';

// @ts-ignore
import { classes } from '/src/classes';

const route = useRoute();

const currentRoute = computed(() => route.fullPath)

// Variables pour stocker les données du composable
let data = ref<any>(null);
let loading = ref<boolean>(true);
let error = ref<any>(null);
let controller = ref<any>(null);

// Variable pour stocker la classe sélectionnée
const selectedClass = ref<any>(route.params.id?new classes[route.meta.class](route.params.id):new classes[route.meta.class]());

// Variable pour stocker les associations de la classe sélectionnée
const tableAssos = computed(() => selectedClass.value.assosiatedClasses);

// Watcher pour surveiller les changements de route
watch (() => currentRoute.value, () => {
    // Une fois la route modifier on change la classe sélectionnée
    if(route.params.id){
        selectedClass.value = new classes[route.meta.class](route.params.id);
    }else{
        selectedClass.value = new classes[route.meta.class]();
    }

    executeApi();
});

// Fonction pour fetch l'API
const executeApi = () => {
    const result = api(selectedClass.value.fetchingRoute, selectedClass.value.schema);
    data = result.data;
    loading = result.loading;
    error = result.error;
    controller = result.controller;
};


executeApi();

</script>
<template>
    <div>
        <div v-if="loading">
            <h1>{{ selectedClass.name }} Datas Loading...</h1>
            <button @click="controller.abort()">Stop the request</button>
        </div>

        <div v-else>
        <h1>{{ selectedClass.name }} Datas</h1>
        <div v-if="error">
            <p class="error">Error: {{ error }}</p>
        </div>
        <div v-else>
            <div v-if="!$route.params.id">
                <AppTable :data="data" :tableAssos />
            </div>

            <div v-else>
                <AppTable :data="[data]" :tableAssos  />
            </div>
        </div>
        </div>
    </div>
</template>

<style>
.error {
    color: red;
}
</style>