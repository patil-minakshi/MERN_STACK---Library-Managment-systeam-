const mongoose = require('mongoose')

const bookschema = new mongoose.Schema(

    {
        title:{
            type: String,
            require: true
        },
       author:{
            type: String,
            require: true
        },
        publishyear:{
            type: Number,
            require: true
        },

    },
    {
        timestamps: true
    }

)
const Bookmodel = mongoose.model('books' , bookschema)
module.exports = Bookmodel








/*const UsersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})

const Usermodel = mongoose.model("users" , UsersSchema)
module.exports = Usermodel;*/