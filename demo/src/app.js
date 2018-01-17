// Vue
import Vue from 'vue';
import GComponents from '../../src';

Vue.use(GComponents);

new Vue({
    el: '#app',

    data() {
        return {
            checkboxExample: [],
            inputExample: "",
            placeHolderExample: "",
            disableExample: "toshal.infotech",
            ValidationExample: "",
            changeEventExample: ""
        }
    },
});

// App
require('./app.scss');