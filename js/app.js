/**
 * Created by william on 01/09/16.
 */
var app = new Vue({
    el:'#app',
    data:{
        books:[]
    },
    methods:{

    },
    ready:function() {
        var self = this;
        self.$http.get('dataServer.json').then(function(response) {
            //console.log(JSON.parse(response.data));
            self.books = JSON.parse(response.data);
        });
    }

});
