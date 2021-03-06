import io from 'socket.io-client';
import Vue from 'vue';
import App from './components/App.vue';
import Vue2TouchEvents from 'vue2-touch-events';
import Siema from 'vue2-siema';

console.log('In src/index.js');

// const socket = io.connect();

// socket.on('testing', (test) => {
//     console.log(test);
// });

// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://localhost:8000',
// }));
Vue.use(Vue2TouchEvents);
Vue.use(Siema);

const app = new Vue({
    el: '#root',
    render: h => h(App),
    // sockets: {
    //     connect() {
    //         console.log('socket connected');
    //     },
    // },
});
