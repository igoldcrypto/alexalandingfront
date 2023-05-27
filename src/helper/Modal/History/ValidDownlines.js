import mongoose from "mongoose";


const ValidDownlines = mongoose.Schema({
    UpperLineUserId:{
        type:"string",
        require:true
    },
    DownLineUserId:{
        type:"string",
        require:true
    },
    UpperLinePackagePrice:{
        type:"string",
        require:true
    },
    PurchasedPackageName:{
        type:"string",
        require:true
    },
    PurchasedPackagePrice:{
        type:"string",
        require:true
    }
},
{
    timestamps: true
})
export default mongoose.models.ValidDownlines || mongoose.model('ValidDownlines', ValidDownlines)
