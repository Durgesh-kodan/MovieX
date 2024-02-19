const modelOptions= {
    toJSON:{
        virtuals:true,
        transform:(_,obj)=>{
            delete obj._id;
            return obj;
        }
    },
    toObject:{
        virtuals:true,
        transform:(_,obj)=>{
            delete obj._id;
            return obj;
        }
    },
    versionKet:false,
    timestamps:true,
}

export default modelOptions;