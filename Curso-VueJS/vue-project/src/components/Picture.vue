<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <!-- :src  OU  v-bind:src   =    são a mesma coisa -->
        <Reutilizacao/>
    </div>
</template> 

<script>
import Reutilizacao from './Reutilizacao.vue'

    export default{
        name: 'Picture',
        components: {
            Reutilizacao
        },
        data(){
            return {
                avatar: "/img/avatar.png",
                descricao: "Gabriel Braga",
            }
        }
    }
</script>