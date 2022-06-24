<template>
    <div>
      <PrimeiroComponente/>
      <p>O dado de app é: {{testando}}</p>  
    </div>
</template>


<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'

  export default{
    name: 'App', //exportando o componente App
    components: {
      PrimeiroComponente //exportando outros componentes
    },  
    data(){
      return{
        testando: "teste"
      }
    }
  }
</script>