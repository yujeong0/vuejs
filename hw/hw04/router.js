import Index from './components/Index.js';
import List from './components/List.js';
import Create from './components/Create.js';

Vue.use(VueRouter);
export default new VueRouter({
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
  ],
});
