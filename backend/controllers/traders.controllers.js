const traders = require("../modelos/traders.models.js");

const getTradersAll = async (req, res) => {
    try {
        const datos = await traders.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postTraders = async (req, res) => {
    try {
        const tradersBody = new traders(req.body);
        const nuevaTrader = tradersBody.save();
        res.json(nuevaTrader);
    } catch (error) {
        console.log(error);
    }
}

const deleteTraders = async (req, res) => {
    try {
        await traders.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const patchTraders = async (req, res) => {
    try {
        const tradersBody = traders.findOne({_id:req.params.id});
        if(req.body.nombre){
            tradersBody.nombre = req.body.nombre;
        }
        if(req.body.edad){
            tradersBody.edad = req.body.edad;
        }
        if(req.body.nacionalidad){
            tradersBody.nacionalidad = req.body.nacionalidad;
        }
        await tradersBody.save();
        res.json(tradersBody);
    } catch (error) {
        console.log(error);
    }
}

const getTradersOne = async (req, res) => {
    try {
        const datos = traders.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getTradersAll, postTraders, deleteTraders, patchTraders, getTradersOne};