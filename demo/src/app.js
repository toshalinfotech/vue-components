// Vue
import Vue from 'vue';
import GInput from '../../src';

Vue.use(GInput);

new Vue({
    el: '#app',

    data() {
        return {
            inputValue: '',
        }
    },
});

// App
require('./app.scss');