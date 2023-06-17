// Cargar variables de entorno
require('@babel/register');

//Inicializar express
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const userRoutes = require('./routes/user');
//const userRoutes = require('./routes/prod')

//Crear app que ejecuta express
const app = express()

//Crear la constante del puerto
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api', userRoutes)

const MONGODB_URI= process.env.MONGODB_URI

//conectar a la base de datos
mongoose.connect(MONGODB_URI).then(() => console.log('Conectando  ala base de datos Atlas'))
.catch((error) => {console.log(error) })

//establecer la ruta de home ->Respuesta
app.get('/',(req,res)=>{
    res.send('Hola desde mi Api publico')
})


//inicializar express(server)
app.listen(port, ()=>{console.log(`Servidor escuchando en el puerto ${port}`)})

console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)
console.log(process.env.PORT)