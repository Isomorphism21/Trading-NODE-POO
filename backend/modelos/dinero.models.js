const mongoose = require("mongoose");

const dineroSchema = mongoose.Schema({
    Nombre: {
        type:String,
        required: true,
        trim: true
    },
    tipo: {
        type:String,
        required: true,
        trim : true
    },
    ISO: {
        type:String,
        required: true,
        trim: true
    }
    },
    {
        timestamps: true
    }
)

const dinero = mongoose.model("dinero", dineroSchema);

module.exports = dinero;