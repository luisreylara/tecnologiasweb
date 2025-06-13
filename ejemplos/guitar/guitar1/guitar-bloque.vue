<template>
    <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                <div class="col-4">
                    <img 
                    class="img-fluid" 
                    v-bind:src="'/img/'+guitarra.imagen+'.jpg'" 
                    v-bind:alt="'imagen guitarra: '+guitarra.imagen+'.jpg'">
                </div>
                <div class="col-8">
                    <h3 class="text-black fs-4 fw-bold text-uppercase">{{guitarra.nombre}}</h3>
                   <p>{{ conta }}</p>
                    <p>{{ guitarra.descripcion }}</p>
                    <p class="fw-black text-primary fs-3">${{ guitarra.precio }}</p>
                    <button 
                        type="button"
                        class="btn btn-dark w-100 "
                        v-on:click="incrementar"
                    >Agregar al Carrito</button>
                </div>
            </div><!-- FIN GUITARRA -->
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    const props = defineProps({
        guitarra:{
            type:Object,
            required:true
        }
    });
    const conta = ref(0);

    const incrementar = ()=>{
        conta.value++;
    };

</script>

<style scoped>

</style>
