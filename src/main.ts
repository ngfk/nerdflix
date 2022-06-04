import '@fortawesome/fontawesome-svg-core/styles.css';
import { library as fa } from '@fortawesome/fontawesome-svg-core';
import { faSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue';

import { store } from './store';
import { router } from './router';
import App from './App.vue';

fa.add(faSquare, faStar);

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
