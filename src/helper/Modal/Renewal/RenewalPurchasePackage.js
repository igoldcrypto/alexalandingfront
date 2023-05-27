import mongoose from "mongoose";

const RenewalPurchasePackage = mongoose.Schema({

    PackageOwner: {
        required:true,
        type: 'String'
    },
    DirectReferalDone: {
        default:"false",
        type: 'String'
    },
    RankEligibility: {
        default:"false",
        type: 'String'
    }
},
    {
        timestamps: true
    })
export default mongoose.models.RenewalPurchasePackage || mongoose.model('RenewalPurchasePackage', RenewalPurchasePackage)
