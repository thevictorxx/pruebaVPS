const express = require('express');
const app = express();

//Configuracion del servidor
app.set('port',process.env.PORT || 3100);

app.get("/", (req,res)=>{
    res.send("texto.txt")
})

//INICIAR SERVIDOR
app.listen(app.get('port'),()=>{
    console.log("Server En Puerto", app.get('port'));
});