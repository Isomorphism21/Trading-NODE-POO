const mongoose = require("mongoose");

const accionesSchema = mongoose.Schema({
    Nombre:{
        type:String,
        required: true,
        trim: true
    },
    precio:{
        type:String,
        required: true,
        trim: true
    },
    mercado:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps: true
    }
)

const acciones = mongoose.model("acciones", accionesSchema);

module.exports = acciones