const acciones = require("../modelos/acciones.models.js");

const getAccionesAll = async (req, res) => {
    try {
        const datos = await acciones.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postAcciones = async (req, res) => {
    try {
        const accionesBody = new acciones(req.body);
        const nuevasAcciones = await accionesBody.save();
        res.json(nuevasAcciones);
    } catch (error) {
        console.log(error);
    }
}

const deleteAcciones = async (req, res) => {
    try {
        await acciones.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const patchAcciones = async (req, res) => {
    try {
        const accionesBody = await acciones.findOne({_id:req.params.id});
        if(req.body.Nombre){
            accionesBody.Nombre = req.body.Nombre;
        }
        if(req.body.precio){
            accionesBody.precio = req.body.precio;
        }
        if(req.body.mercado){
            accionesBody.mercado = req.body.mercado;
        }
        await accionesBody.save();
        res.json(accionesBody);
    } catch (error) {
        console.log(error);
    }
}

const getAccionesOne = async (req, res) => {
    try {
        const datos = await acciones.findOne({_id:req.params.id})
        res.json(datos)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAccionesAll, postAcciones, deleteAcciones, patchAcciones, getAccionesOne};