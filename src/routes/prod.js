const express = require('express')
const userSchema = require('../models/productos')

const router = express.Router()

router.post('/productos',(req, res) => {
    const user = userSchema(req.body)
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error })) 
})

//Obtener productos 
router.get('/productos',(req,res) => {
    userSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error })) 

})

//Obtener productos  por ID
router.get('/productos/:id',(req,res) => {
    const { id } = req.params
    userSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error })) 

})
//Actualizar productos
router.put('/productos/:id',(req,res) => {
    const { id } = req.params
    const { nombre, descripcion, precio } = req.body
    userSchema.updateOne({_id: id},{ $set: { nombre, descripcion, precio }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error })) 

})

//Eliminar  productos
router.delete('/productos/:id',(req,res) => {
    const { id } = req.params
    userSchema.deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error })) 

})


module.exports = router