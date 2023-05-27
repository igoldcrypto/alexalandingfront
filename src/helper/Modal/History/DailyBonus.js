import mongoose from 'mongoose'

const DailyBonus = mongoose.Schema(
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
export default mongoose.models.DailyBonus || mongoose.model('DailyBonus', DailyBonus)
