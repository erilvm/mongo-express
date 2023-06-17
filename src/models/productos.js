const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require:true
    },
})

module.exports = mongoose.model('Productos', userSchema)