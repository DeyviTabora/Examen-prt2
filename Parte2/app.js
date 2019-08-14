var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser());

var server = app.listen(3000, function () {
    var host = server.address().address     
    var port = server.address().port 
    console.log("app listening at http://%s:%s", host, port) 
})

app.post('/api/Calculadora/suma', function(req, res){
    var numeros = req.body.numeros;
    var arr = numeros.split(",");
    var suma = 0;
    for(i = 0; i < arr.length; i++){
        var n = parseInt(arr[i]);
        suma = suma + n;
    };

    var result = {
        total: suma
    };

    res.send(result);
});

app.post('/api/Calculadora/resta', function(req, res){
    var numeros = req.body.numeros;
    var array = numeros.split(",");
    var resta = 0;
    for(i=0; i < array.length; i++){
        var n = parseInt(array[i]);
        resta = resta - n;
    };
    
    var result = {
        total: resta
    };

    res.send(result);
});