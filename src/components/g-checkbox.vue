<style lang="scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_default.scss";
    @import "../assets/scss/_input.scss";
</style>

<template>
    <div class="g-wrapper g-checkbox-wrapper">
        <div class="g-inner g-checkbox-inner" :class="[className,{checked: state,invalid: isInvalid,disabled: disabled}]">
            <input class="g-checkbox" type="checkbox" :id="id" :name="name" :value="value" :disabled="disabled"
                :required="required" :checked="state" @change="onChange($event)" @invalid="onInvalid">
            <label :for="id" class="g-label">
                <slot name="checkmark">
                    <svg class="g-svg" height="20px" width="20px" viewBox="0 0 24 24">
                        <path d="M4.1,12.7 9,17.6 20.3,6.3" fill="none" stroke-width="4" stroke="white"></path>
                    </svg>
                </slot>
                <slot></slot>
            </label>
        </div>
        <div v-if="isInvalid" class="g-val-msg" v-text="validationMessage"></div>
    </div>
</template>

<script>
export default {
    name: 'g-checkbox',
    model: {
        prop: 'modelValue',
        event: 'input'
    },
    data(){
        return{
            isChecked: false,
            isInvalid: false
        }
    },
    props: {
        id: {
            type: String,
            default: function() {
                return 'checkbox-id-' + this._uid;
            },
        },
        name: {
            type: String,
            default: null,
        },
        value: {
            type: String,
            default: null,
        },
        modelValue: {
            type: String | Array,
            default: undefined,
        },
        className: {
            type: String,
            default: null,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false,
        },
        validationMessage:{
            type: String,
            default: null
        },
        model: {}
    },

    computed: {
        state() {
            if (this.modelValue === undefined) {
                return this.checked;
            }

            if (Array.isArray(this.modelValue)) {
                return this.modelValue.indexOf(this.value) > -1;
            }

            return !!this.modelValue;
        }
    },

    methods: {
        onChange($event) {
            if ($event.target.checkValidity()){
                this.isInvalid = false;
            }
            this.toggle();
            this.$emit('change', $event);
        },

        onInvalid(){
            this.isInvalid = true;
        },

        toggle() {
            let value;

            if (Array.isArray(this.modelValue)) {
                value = this.modelValue.slice(0);

                if (this.state) {
                    value.splice(value.indexOf(this.value), 1);
                } else {
                    value.push(this.value);
                }
            } else {
                value = !this.state;
            }

            this.$emit('input', value);
        }
    },

    watch: {
        checked(newValue) {
            if (newValue !== this.state) {
                this.toggle();
            }
        }
    },

    mounted() {
        if (this.checked && !this.state) {
            this.toggle();
        }
    },
};
</script>