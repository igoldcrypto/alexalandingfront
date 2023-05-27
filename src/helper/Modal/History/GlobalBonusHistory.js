import mongoose from 'mongoose'

const GlobalBonusHistory = mongoose.Schema(
  {
    Owner: {
      require: true,
      type: 'String'
    },
    Coins: {
      require: true,
      type: 'String'
    },
    Percantage: {
      require: true,
      type: 'String'
    },
    CompanyBusiness: {
      require: true,
      type: 'String'
    },

  },
  {
    timestamps: true
  }
)
export default mongoose.models.GlobalBonusHistoryn || mongoose.model('GlobalBonusHistoryn', GlobalBonusHistory)
