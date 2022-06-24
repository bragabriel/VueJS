import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

/* 
    Componentes:
É por meio de Componentes que podemos dividir o nosso layout em PaymentResponse;
Cada componente tem a sua responsabilidade, por exemplo: um componente que é uma tabela, o outro é o rodapé;
O projeto fica melhor separado;
Cada um tem seu CSS e também os dados que manipula.
 
    Dados nos componentes:
Os componentes podem conter dados;
Podemos inicializar já com algum valor e também modificar durante a execução do programa;
Os dados ficam em uma função chamada 'data';
Esta função deve retornar os dados em formato de objeto.
*/