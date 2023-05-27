import mongoose from 'mongoose'


const GlobalBonus = mongoose.Schema(
  {
    BonusOwner: {
      type: 'string',
      require: true
    },
    Percantage: {
      type: 'string',
      require: true
    }
  },
  {
    timestamps: true
  }
)
export default mongoose.models.GlobalBonus || mongoose.model('GlobalBonus', GlobalBonus)
