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
        
    }
})