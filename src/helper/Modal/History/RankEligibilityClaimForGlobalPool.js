import mongoose from "mongoose";


const RankEligibilityClaimForGlobalPool = mongoose.Schema({

    RankEligibilityClaimOwnerId: {
        require: true,
        type: 'String'
    },
    RankEligibilityClaimOwnerUserName: {
        require: true,
        type: 'String'
    },
    RankEligibilityClaimOwnerEmail: {
        require: true,
        type: 'String'
    },
    PackageOwnName: {
        require: true,
        type: 'String'
    },
    PackageOwnPrice: {
        require: true,
        type: 'String'
    },
    ClaimedReward: {
        require: true,
        type: 'String'
    },
    TotBusiness: {
        require: true,
        type: 'String'
    }
},
{
  timestamps: true
})
export default mongoose.models.RankEligibilityClaimForGlobalPool || mongoose.model('RankEligibilityClaimForGlobalPool', RankEligibilityClaimForGlobalPool)
