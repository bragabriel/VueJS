<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
        </ul>
        <p v-if="1>2">Testando</p>
        <p v-show="mostrar_email">Mande uma mensagem para: {{email}}</p>
    </div>
</template>

<script>
    export default{
        name: 'Info',
        data(){
            return{
                esta_trabalhando: false,
                mostrar_email: true,
                email: 'gabriel@gabriel.gabriel'
            }
        }
    }
</script>