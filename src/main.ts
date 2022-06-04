import '@fortawesome/fontawesome-svg-core/styles.css';
import { library as fa } from '@fortawesome/fontawesome-svg-core';
import * as FAR from '@fortawesome/free-regular-svg-icons';
import * as FAS from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue';

import { store } from './store';
import { router } from './router';
import App from './App.vue';

fa.add(FAR.faStar, FAS.faSquare, FAS.faStar);

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
