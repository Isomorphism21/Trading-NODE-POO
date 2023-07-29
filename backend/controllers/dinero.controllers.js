const dinero = require("../modelos/dinero.models.js");

const getDineroAll = async (req, res) => {
    try {
        const datos = await dinero.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postDinero = async (req, res) => {
    try {
        const dineroBody = new dinero(req.body);
        const nuevoDinero = dineroBody.save();
        res.json(nuevoDinero);
    } catch (error) {
        console.log(error);
    }
}

const deleteDinero = async (req, res) => {
    try {
        await dinero.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const patchDinero = async (req, res) => {
    try {
        const dineroBody = await dinero.findOne({_id:req.params.id});

        if(req.body.Nombre){
            dineroBody.Nombre = req.body.Nombre;
        }
        if(req.body.tipo){
            dineroBody.tipo = req.body.tipo;
        }
        if(req.body.ISO){
            dineroBody.ISO = req.body.ISO;
        }
        await dineroBody.save();
        res.json(dineroBody);
    } catch (error) {
        console.log(error);
    }
}

const getDineroOne = async (req, res) => {
    try {
        const datos = await dinero.findOne({_id:req.params.id})
        res.json(datos)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getDineroAll, postDinero, deleteDinero, patchDinero, getDineroOne}