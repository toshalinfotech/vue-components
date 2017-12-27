// Vue
import Vue from 'vue';
import GInput from '../../src';

Vue.use(GInput);

new Vue({
    el: '#app',

    data() {
        return {
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