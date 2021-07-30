console.log('Ok: ' + Vue);

Vue.config.devtools = true;

//inizializzo vue

const root = new Vue({
    el:'#root',
    data:{
        isInputVisible: false,
        newTask: '',                                                         // newTask che verrà riempito dall'utente
        searchTerm: '',
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
            this.tasks.splice(index, 1);                                    // Rimuove l'elemento dell'array, selezionato dall'utente
        },
        addTask(){
            if(this.newTask.trim()){
                this.tasks.push(this.newTask);                             // Se il campo è compilato, aggiunge all'array tasks il campo dell'utente
            }  else{
                this.newTask= '';

            }
            
        },

        showItem(task){
            if(!this.searchTerm.trim()) return true;
            const filter = this.searchTerm.trim().toLowerCase();        // Metodo che richiama la funzione per una ricerca in tempo reale
            task = task.toLowerCase();
            return task.includes(filter);
        }
        
    }
})