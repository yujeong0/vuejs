import router from './router.js';
import NavHeader from './components/NavHeader.js';
import Index from './components/Index.js';
new Vue({
  el: '#app',
  router,
  components: {
    NavHeader,
    Index,
  }
});
