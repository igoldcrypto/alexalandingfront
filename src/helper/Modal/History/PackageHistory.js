import mongoose from 'mongoose'

const PackageHistory =  mongoose.Schema(
  {
    PackageOwner: {
      required:true,
      type: 'String'
    },
    PackageName: {
      required:true,
      type: 'String'
    },
    PackagePrice: {
      required:true,
      type: 'String'
    },
    PaackagePeriod: {
      required:true,
      type: 'String'
    },
    PackageMaximumLimit: {
      default: '500',
      type: 'String'
    },
    LykaToken: {
      required:true,
      type: 'String'
    },
    PackgeRewardWallte: {
      required:true,
      type: 'String'
    },
    Type:{
      required:true,
      type: 'String'
    },
    Type2:{
      required:true,
      type: 'String'
    },
    Type3:{
      required:true,
      type: 'String'
    },
  },
  {
    timestamps: true
  }
)
export default mongoose.models.PackageHistries || mongoose.model('PackageHistries', PackageHistory)
