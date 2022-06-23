const MyApp = {
    data(){
        return{
            //Todos os dados aqui, são retornados para o front-end
            name: "",
            age: 20,
            input_name: "" //linkando o com o v-model do index.html
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            console.log(this.input_name);
            
            this.name = this.input_name
        }
    }
}

//Instanciando este elemento na div de id 'app'
Vue.createApp(MyApp).mount("#app")

console.log("carregou")