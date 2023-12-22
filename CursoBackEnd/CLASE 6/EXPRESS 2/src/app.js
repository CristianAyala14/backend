import express  from "express";

const PORT = 8080;
const app = express();
//hacemos dos rutas
app.get("/bienvenida", (req, res)=>{
    res.send(`<h1 style="color:blue;">Bienvenido a mi primer servidor</h1>`)
})

app.get("/usuario", (req, res)=>{
    res.json({
        nombre: "Miguel", apellido: "Perez", edad: 30, correo: "correodeMiguel@hotmail.com",
    })
})
app.listen(PORT, ()=>{console.log(`Servidor funcionando en el puerto : ${PORT}`)})