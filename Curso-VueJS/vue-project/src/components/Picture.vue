<template>
    <img :src="avatar" :alt="descricao">
    <!-- :src  OU  v-bind:src   =    são a mesma coisa -->
</template> 

<script>
    export default{
        name: 'Picture',
        data(){
            return {
                avatar: "/img/avatar.png",
                descricao: "Gabriel Braga",
            }
        }
    }
</script>