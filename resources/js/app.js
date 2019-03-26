
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('message', require('./components/message.vue').default);


const app = new Vue({
    el: '#app',

    data:{

        message:'',
        chat:{
            message:[]
        }
    },

    

    methods:{

        send()
        {
            if(this.message.lenght !=0)
            {
                
                this.chat.message.push(this.message);
                this.message=''
            }
        }

    }
});
