import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/index.vue';
import List from '@/views/list.vue';
import Create from '@/views/create.vue';
import Delete from '@/views/delete.vue';

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete,
    },
  ],
})

