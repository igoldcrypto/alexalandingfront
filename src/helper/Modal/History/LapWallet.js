import mongoose from "mongoose";

const LapWallet = mongoose.Schema({
    BonusOwner: {
        type: 'String',
        require: true
    },
    LapAmount: {
        type: 'String',
        require: true
    }
},
    {
        timestamps: true
    })
export default mongoose.models.LapWallet || mongoose.model('LapWallet', LapWallet)
