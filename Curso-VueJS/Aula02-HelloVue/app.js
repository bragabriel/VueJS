const MyApp = {
    data(){
        return{
            //Todos os dados aqui, são retornados para o front-end
            name: "Gabriel",
            age: 20
        }
    }
}

//Instanciando este elemento na div de id 'app'
Vue.createApp(MyApp).mount("#app")

console.log("carregou")