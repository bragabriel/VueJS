<template>
    <ul>
        <li>
            <a href="">Home</a>
            <a href="">Projetos</a>
            <a href="">Contatos</a>
        </li>
    </ul>
</template>

<script>
    export default{
        name: 'Header'
    }
</script>

<style scoped>
    ul{
        list-style: none;
        display: flex;
        background: #999;
    }

    li{
        margin-right: 10px;
    }

    a{
        color: #fff;
        text-decoration: none;
        transition: 0.5s;
        padding: 10px;
    }

    a:hover{
        color: turquoise
    }
</style>