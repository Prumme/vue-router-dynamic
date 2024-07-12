<script setup lang="ts">
import { RouterLink } from 'vue-router';


const props = defineProps<{
  data: any[]
  tableAssos?: { key: string, link: string }[]
}>()


// Fonction pour aplatir un objet
const flattenObject = (obj: any, parent: string = '', res: any = {}): any => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const propName = parent ? `${parent}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], propName, res);
      } else {
        res[propName] = obj[key];
      }
    }
  }
  return res;
}

// Aplatir les données
const flattenData = props.data.map(data => flattenObject(data))

</script>
<template>
    <table>
    <thead>
      <tr>
        <th v-for="(value,key, index) in flattenData[0]" :key="index">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, index) in flattenData" :key="index">
        <td v-for="(dataValue, key2, index2) in value" :key="index2">
            <p>{{ dataValue }}
            <RouterLink v-if="tableAssos && tableAssos.find(assos => assos.key === key2)" :to="tableAssos.find(assos => assos.key === key2)?.link + dataValue" class="link">Voir</RouterLink>
            </p>
        </td>
      </tr>  
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.link {
  color: #33f;
}
</style>