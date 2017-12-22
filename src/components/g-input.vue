<style lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/default";

    .g-wrapper{
        margin: $default-spacing 0;
    }
    .g-inner{
        position: relative;
        padding: $default-spacing*2 0 0 0;
        border-bottom: 2px solid $secondary-color;
        &.normal{
            padding: 0;
        }
        &:after{
            content: "";
            position: absolute;
            bottom: -2px;
            height: 2px;
            background: $primary-color;
            width: 0%;
            left: 50%;
            right: 50%;
            transition: $default-animation;
        }
        &.focused:after{
            left: 0;
            right: 0;
            width: 100%;
        }
        &.disabled{
            opacity: 0.5;
        }
        &.disabled,
        &.disabled .g-input{
            cursor: not-allowed;
        }
        &.animated .g-label{
            bottom: 32px;
            font-size: 11px;
            line-height: 12px;
        }
        &.focused .g-label{
            color: $primary-color;
        }
        &.focused.invalid .g-label{
            color: $danger-color;
        }
        &.invalid{
            border-bottom-color: $danger-color;
        }
        &.invalid:after{
            background: $danger-color;
        }
    }
    .g-val-msg{
        font-size: $default-font-size;
        line-height: $default-line-height;
        color: $danger-color;
        text-align: left;
    }
    .g-label{
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        font-size: $default-font-size;
        line-height: $default-line-height;
        color: darken($default-color, 50%);
        text-align: left;
        transition: $default-animation;
    }
    .g-input{
        display: block;
        width: 100%;
        background: transparent;
        border: none;
        font-size: $default-font-size;
        line-height: $default-line-height;
        position: relative;
        box-shadow: none;
        &:focus,
        &:hover{
            outline: none;
            box-shadow: none;
        }
    }
</style>

<template>
    <div class="g-wrapper" v-if="isValidInput">
        <div class="g-inner"  :id="id" :class="[className, {
                normal: noLabel,
                animated: hasValue,
                disabled: disabled,
                invalid: isInvalid,
                'animated focused': hasFocus                
            }]">
            <div class="g-label" v-if="placeholder !== null" v-text="placeholder"></div>
            <input class="g-input" :type="type" :name="name" :required="required" :pattern="pattern"
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