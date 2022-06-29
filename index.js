const express = require('express');
const sequelize = require('./database/sequelize');
const app = express();

require('./database/associations');

app.get("/", (req,res) =>{
    res.send("hola mundo");
})

app.listen(3000 , ()=>{
    console.log("Escuchando en puerto 3000");

    sequelize.sync({ force: true } ).then(() =>{
        console.log("nos conectamos a la DB");
    })

});