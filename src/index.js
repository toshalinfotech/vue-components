import GInput from './components/g-input';
import GCheckbox from './components/g-checkbox';

export default {
    install (Vue) {
        Vue.component('g-input', GInput);
        Vue.component('g-checkbox', GCheckbox);
    }
}

export { GInput }