
var express = require('express');
var entry= require('./entry2.js');
module.exports = function(app) {
    
    app.route('/').post(entry.dialogflowFirebaseFulfillment);
    app.get('/',function(request,response){
        response.send('hellooo');

    });


}