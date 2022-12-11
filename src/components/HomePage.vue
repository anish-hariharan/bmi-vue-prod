<template>
<div class="page">
    <div class="logoContainer">
        <img class="logo" src="../assets/logo.png" alt="logo"/>
    </div>
    <div class="inputContainer">
        <div>
            <input type="text" v-model="height" @keypress="isNumber" placeholder="enter your height" class="inputBox">
        </div>
        <div>
            <input type="text" v-model="weight" @keypress="isNumber" placeholder="enter your weight in kg" class="inputBox">
        </div>
    </div>
    <div class="btnContainer">
        <button v-if="generate" @click="refresh" class="button">
            refresh page
        </button>
        <button v-else @click="clickFn" class="button">
            generate
        </button>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';

const height = ref();
const weight = ref();
let generate = ref();

export default{
    setup(){
        function isHeight(a){
            let value = a.split('.');
            return value.length <= 1 ? parseFloat( Number(a) / 100) : Number(a);
        }

        function BmiCalculation(){
            let BMI = 0;
            let heights = isHeight(height.value)
            BMI = Math.round(Number(weight.value) / (heights * heights));
            let result = isNaN(BMI) ? "enter a proper value" : BMI;
            this.$store.state.counter = result;
            generate.value = true;
            this.$store.state.generate = generate.value;
        }
        return{
            height,
            weight,
            BmiCalculation,
            generate
        }
    },
   methods:{
    clickFn(){
        if(height.value === undefined || weight.value === undefined){
            alert('enter the input fields to proceed further')
        }else if( !(Number.isInteger(Number(Math.round(height.value))) && Number.isInteger(Number(Math.round(weight.value))) )){
            alert('The value entered were unproper please check the value you have entered')
        }
        else{
            this.$router.push('/result');
            this.BmiCalculation();
        }
    },
    isNumber(e){
        console.log(e)
        let char = String.fromCharCode(e.keyCode);
        /^\d*\.?\d*$/gm.test(char) ? true : e.preventDefault();
    },
    refresh(){
        console.log('refresh')
        this.$router.go('/')
    }
   }
}
</script>

<style scoped>

.inputContainer{
    width: 100%;
}

.inputBox{
    margin: 20px;
    width: 50%;
    height: 40px;
    border: 0px;
    max-width: 500px !important;
    min-width: 200px !important;
    border-radius: 25px !important;
    padding-left: 10px !important;
}

.inputBox:focus{
    outline: none;
}

.btnContainer{
    width: 100%;
}

.button {
    margin: 20px;
    width: 50%;
    height: 40px !important;
    max-width: 500px !important;
    min-width: 200px !important;
    transition-duration: 0.4s !important;
    font-size: 80% !important;
    border-radius: 10px !important;
}

.button:hover{
    background-color: #4CAF50;
    color: white;
}
.button{
    border: 3px solid white !important;
    font-family: sans-serif !important;
    font-weight: left !important;
}
.page{
   display: flex;
   flex-direction: column;
}
</style>