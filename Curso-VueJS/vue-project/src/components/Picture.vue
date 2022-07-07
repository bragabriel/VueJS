<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <!-- :src  OU  v-bind:src   =    são a mesma coisa -->

        <MudarImagem @mudar-imagem="trocarImagem"/>

        <Reutilizacao/>
    </div>
</template> 

<script>
import Reutilizacao from './Reutilizacao.vue'
import MudarImagem from './MudarImagem.vue'

    export default{
        name: 'Picture',
        components: {
            Reutilizacao,
            MudarImagem
        },
        data(){
            return {
                avatar: "/img/avatar.png",
                descricao: "Gabriel Braga",
            }
        },
        methods:{
            trocarImagem(){
                this.avatar = "/img/logo.png"
            }
        }
    }
</script>