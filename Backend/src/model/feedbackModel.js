import mongoose from "mongoose";

const collectionSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    feedback:{
        type:String,
        required:true,
    },
    

},
{
    timestamps: true,
});

const collection = mongoose.model("feedback" , collectionSchema);

export default collection;