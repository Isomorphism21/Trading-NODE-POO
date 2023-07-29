const mongoose = require("mongoose");

const tradersSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    edad:{
        type:String,
        required:true,
        trim:true
    },
    nacionalidad:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps: true
    }
)

const traders = mongoose.model("traders", tradersSchema);

module.exports = traders;