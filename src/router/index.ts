import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../views/AppView.vue'

export const routes = [
  
  {path: '/posts/:id?', component: AppView, meta: {title: 'Posts', class: 'PostClass'}},

  {path: '/comments/:id?', component: AppView, meta: {title: 'Comments', class: 'CommentClass'},},

  {path: '/albums/:id?', component: AppView, meta: {title: 'Albums', class: 'AlbumClass'}},

  {path: '/photos/:id?', component: AppView,  meta: {title: 'Photos', class: 'PhotoClass'}},

  {path: '/todos/:id?', component: AppView, meta: {title: 'Todos', class: 'TodoClass'},},

  {path: '/users/:id?', component: AppView, meta: {title: 'Users', class: 'UserClass'}}

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
