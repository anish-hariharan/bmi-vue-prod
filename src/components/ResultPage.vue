<template>
    <div class="card">
    <div class="image">
        <h1 v-if="underWeight" class="img">underWeight range</h1>
        <h1 v-if="Healthy" class="img" >Healthy range</h1>
        <h1 v-if="slightlyWeight"  class="img" >slightly over weight</h1>
        <h1 v-if="obese"  class="img" >obese</h1>
        <h1 v-if="Nan" class="img">enter proper value</h1>
    </div>
    <div class="value">
        <h1 class="content" v-if="Nan"></h1>
        <h1 class="content" v-else> your bmi is {{value}} </h1>
    </div>
    <div class="btnContainer">
        <button @click="onClick" class="btn">
            back to home page
        </button>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';

let underWeight = ref(false);
let Healthy = ref(false);
let slightlyWeight = ref(false);
let obese = ref(false);
let Nan = ref(false);

export default{
    methods:{
        onClick(){
            slightlyWeight.value = false;
            underWeight.value = false;
            Healthy.value = false;
            obese.value = false;
            Nan.value = false;
            this.$router.push('/');
        }
    },
    data(){
        return{
            value : this.$store.state.counter,
            underWeight,
            Healthy,
            obese,
            slightlyWeight,
            Nan
        }
    },
    created(){
        console.log(Nan)
        if(this.value >= 18 && this.value <= 24){
            Healthy.value = true;
        }else if(this.value > 24 && this.value <= 30){
            slightlyWeight.value = true;
        }else if(this.value > 30 && this.value <= 50){
            obese.value = true;
        }else if(this.value >= 1 && this.value <= 17){
            underWeight.value = true;
        }else{
            Nan.value = true;
        }
    },
}

</script>

<style scoped>

.card{
    display: flex;
    flex-direction: column;
    margin: 15% 0% 10% 0%;
}

.image{
    display: flex;
    justify-content: center;
    width: 100%;
}

.img{
    width: 50%;
}

.value{
    display: flex;
    justify-content: center;
    width: 100%;
}

.content{
    width: 50%;
}

.btnContainer{
    display: flex;
    justify-content: center;
    width: 100%;
}

.btn{
    width: 20%;
    min-width: 200px !important;
    transition-duration: 0.4s;
    height: 40px !important;
    border-radius: 10px !important;
    border: 3px solid white !important;
    font-family: sans-serif !important;
    font-weight: left !important;
}

.btn:hover{
    background-color: #4CAF50; /* Green */
    color: white;
}

</style>