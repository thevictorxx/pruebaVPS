const express = require('express');
const app = express();

//Configuracion del servidor
app.set('port',process.env.PORT || 3100);

app.get("/", (req,res)=>{
    res.json(tabla)
    res.status(200);
})

//INICIAR SERVIDOR
app.listen(app.get('port'),()=>{
    console.log("Server En Puerto", app.get('port'));
});


// OBJETO

let tabla = {
    id:1,
    nombre:"personas",
    tabla:{
        persona:"Juan",
        edad:30
    }
}