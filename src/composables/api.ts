import { ref } from "vue";
import type { ZodSchema } from "zod";

export function api(route: string, schema: ZodSchema<any>) {

    const data = ref<any>(null);
    const loading = ref<boolean>(true);
    const error = ref<any>(null);
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
        //initialise les valeurs
        loading.value = true;
        error.value = null;
        try {
            // lance la requête
            const response = await fetch('https://jsonplaceholder.typicode.com/' + route, { signal });

            // si la requête n'est pas ok, on lance une erreur
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }

            // parse la réponse en json
            const result = await response.json();

            try {
                // vérifie que le résultat est conforme au schéma
                schema.parse(result);
            }catch(err: any){
                // si le résultat n'est pas conforme au schéma, on lance une erreur
                throw new Error('Invalid data schema' + err.message);
            }

            // on met à jour la valeur de data
            data.value = result;
        } catch (err) {
            // on met à jour la valeur de error (fetch error ou schema error)
            error.value = err;
        } finally {
            // on met à jour la valeur de loading
            loading.value = false;
        }
    };
    
    // on lance fetchData au moment de la création du composable
    fetchData();

    // on retourne les valeurs
    return { data, loading, error, controller };
}