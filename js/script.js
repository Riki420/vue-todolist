console.log('Ok: ' + Vue);

Vue.config.devtools = true;

//inizializzo vue

const root = new Vue({
    el:'#root',
    data:{
        tasks: [
            'Comprare le cose',
            'Pulire il rusco',
            'Buttare la camera',
            'Mangiare il fare',
            'Lavare la spesa'
        ]
    },
    methods:{
        doneTask(index){
            this.tasks.splice(index,1);             //rimuove l'elemento dell'array, selezionato dall'utente
        }
    }
})