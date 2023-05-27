import mongoose from 'mongoose'

const LykaFastBonusHis = mongoose.Schema(
    {
        BonusOwner: {
          type: 'String',
          require: true
        },
        FormPackage: {
          type: 'String',
          require: true
        },
        PackagePercantage: {
          type: 'String',
          require: true
        },
        Amount: {
          type: 'String',
          require: true
        }
      },
      {
        timestamps: true
      }
)
export default mongoose.models.LykaFastBonusHis || mongoose.model('LykaFastBonusHis', LykaFastBonusHis)
