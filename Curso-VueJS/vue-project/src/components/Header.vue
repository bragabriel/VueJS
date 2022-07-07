<template>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Projetos</a></li>
        <li><a href="">Contatos</a></li>
        <li v-if="esta_logado"><a href="#">Meu Perfil</a></li>
    </ul>
</template>

<script>
    export default {
        name: 'Header',
        props: ["esta_logado"] /* Passando propos como Array */
    }
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        background: #999;
    }

    li {
        margin-right: 10px;
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: 0.5s;
        padding: 10px;
    }

    a:hover {
        color: turquoise
    }
</style>