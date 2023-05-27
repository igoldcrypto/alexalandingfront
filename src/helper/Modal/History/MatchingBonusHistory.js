import mongoose from "mongoose";


const MatchingBonusHistory = mongoose.Schema({

    BonusOwner: {
        default: 'null',
        type: 'String'
    },
    Amount: {
        default: 'null',
        type: 'String'
    },
    Matching: {
        default: 'null',
        type: 'String'
    },
    Rate: {
        default: 'null',
        type: 'String'
    },
    ForwardedValue:{
        default: 'null',
        type: 'String'
    },
    LeftDirectBusiness:{
        default: 'null',
        type: 'String'
    },
    RightDirectBusiness:{
        default: 'null',
        type: 'String'
    },
    LeftBinaryBusiness:{
        default: 'null',
        type: 'String'
    },
    RightBinaryBusiness:{
        default: 'null',
        type: 'String'
    },
    FlushCalculation:{
        default: 'null',
        type: 'String'
    }
},
    {
        timestamps: true
    })

export default mongoose.models.MatchingBonusHistoryym || mongoose.model('MatchingBonusHistoryym', MatchingBonusHistory)
