<style lang="scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_default.scss";
    @import "../assets/scss/_input.scss";
</style>

<template>
    <div class="g-wrapper g-input-wrapper" v-if="isValidInput">
        <div class="g-inner g-input-inner"  :class="[className, {
                normal: noLabel,
                animated: hasValue,
                disabled: disabled,
                invalid: isInvalid,
                'animated focused': hasFocus                
            }]">
            <label :for="id" class="g-label" v-if="placeholder !== null" v-text="placeholder"></label>
            <input :id="id" class="g-input" :type="type" :name="name" :required="required" :pattern="pattern"
                :value="value" :disabled="disabled" :title="validationMessage" :min="min" :max="max" :step="step"
                @focus="onFocus" @focusout="onFocusOut" @change="onChange($event)" @invalid="onInvalid">
        </div>
        <div v-if="isInvalid" class="g-val-msg" v-text="validationMessage"></div>
    </div>
</template>

<script>
export default {
    name: 'g-input',
    data(){
        return{
            hasValue: false,
            hasFocus: false,
            isInvalid: false,
            noLabel: false,
            isValidInput: true
        }
    },
    props: {
        id: {
            type: String,
            default: function() {
                return 'input-id-' + this._uid;
            }
        },
        name: {
            type: String,
            default: null
        },
        className: {
            type: String,
            default: null
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        pattern:{
            type: String,
            default: null
        },
        validationMessage:{
            type: String,
            default: null
        },
        type: {
            type: String,
            default: "text"
        },
        value: {
            type: String,
            default: null
        },
        min: {
            type: String,
            default: null
        },
        max: {
            type: String,
            default: null
        },
        step: {
            type: String,
            default: null
        }
    },
    watch: {
        value(newValue){
            if(newValue == ""){
                this.hasValue = false;
            } else {
                this.hasValue = true;
            }
        }
    },
    methods: {
        onChange($event) {
            if ($event.target.checkValidity()){
                this.isInvalid = false;
            }
            this.$emit('input', $event.target.value);
            this.$emit('change', $event);
        },
        onFocus(){
            this.hasFocus = true;
        },
        onFocusOut(){
            this.hasFocus = false;
        },
        onInvalid(){
            this.isInvalid = true;
        }
    },
    mounted() {
        let supportedTypes = [
            "date", 
            "datetime-local", 
            "month", 
            "number",
            "password",
            "search",
            "tel",
            "text",
            "time",
            "url",
            "week"
        ]
        if(this.value !== ""){
            this.hasValue = true;
        }
        if(supportedTypes.indexOf(this.type.toLowerCase()) < 0){
            console.log("Sorry, this component does not support '" + this.type + "' input type.");
            this.isValidInput = false;
        }
        if(this.placeholder === null){
            this.noLabel = true;
        }
    }
};
</script>