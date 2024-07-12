# CC2 Vue 
### Aurélien Prudhomme 4IW3

# Afin de lancer l'application

installer les node_modules

``npm install``

lancer l'app

``npm run dev``

aller à [http://localhost:5173/](http://localhost:5173/)

---
---
---

# Comment fonctionne l'application

## Router
Dans le router nous définissons nos routes de cette maniere:
```json
{
    path: '/[path]/:id?', 
    component: AppView, 
    meta: 
        {
            title: '[name]', 
            class: '[Class]'
        }
    },
```

- path: chemin de l'url correspondant dans le site
- component: Le component est toujours `AppView`
- meta: Sert à avoir des donnée supplémentaire
- meta.title: nous permet d'afficher le titre dans la nav
- meta.class: nous permet de definir la class à utiliser pour afficher les données

## Class
Dans le dossier ``/src/classes/`` on créer une classe de ce genre là:

```ts
export default class UserClass {
    name: string = [name];

    fetchingRoute: string = [fetchingRoute];
    schema: ZodSchema = [schemaZodIndex]
    route: string = [path];

    assosiatedClasses: Array<{key: string, link: string}> = [];

    constructor(id?: number) {
        if (id) {
            this.fetchingRoute += `/${id}`;
            this.schema = [schemaZodShow];
        }  
    }
}
```


- name: nom qui sera affiché dans la page
- fetchingRoute: route de JSON placeholder (juste la derniere partie, ex: 'users')
- route: route de notre router, sert au redirection
- assosiatedClasses: liste des clés et liens d'assossiation dans le tableau
- constructor: permet de modifier certaines variables si on est sur une route avec un id

L'étape suivante est d'ajouter notre classe dans la liste de classes dans dans le fichier `/src/classes/index.ts`


## Schema

Dans le dosier `/src/schemas`on retrouve les schemas de nos classe.
<br/>
On utilise zod pour créer des schémas de validation de data.

## FIN

Le reste sera pris en charge par la 'view', Le tableau est dynamique, il prendra donc les attributs tout seul

## Objectif

Mon objectif étais de créer un front facilement implémentable pour n'importe quelle API RESTFULL, si on change juste l'url dans le fichier `/src/composables/api.ts` on peux utiliser n'importe quelle API RESTFULL dans le projet.



