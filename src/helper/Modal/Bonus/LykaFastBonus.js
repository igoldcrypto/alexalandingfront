import mongoose from "mongoose";


const LykaFastBonus = mongoose.Schema({

    FastBonusCandidate:{
        type:"string",
        require:true
    },
    ReferLength:{
        type:"string",
        require:true
    }
},
{
  timestamps: true
})
export default mongoose.models.LykaFastBonus || mongoose.model('LykaFastBonus', LykaFastBonus)
