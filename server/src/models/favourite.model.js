import mongoose ,{Schema} from "mongoose";
import modelOptions from "./models.options";

export default mongoose.model(
    "Favourite",
    mongoose.Schema({
        user:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        mediaType:{
            type:String,
            enum: ["tv" ,"movie"],
            required:true
        },
        mediaId:{
            type:String,
            required:true
        },
        mediaTitle:{
            type:String,
            required:true
        },
        mediaPoster:{
            type:String,
            required:true
        },
        mediaRate:{
            type:Number,
            required:true
        },
    },modelOptions)
)