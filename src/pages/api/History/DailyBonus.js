import initDB from '../../../helper/initDB'
import DailyBonus from '../../../helper/Modal/History/DailyBonus'

initDB()

export default async (req, res) => {
  const { id } = req.body


  const findDailyBonus = await DailyBonus.find({BonusOwner:id})

  res.json(findDailyBonus)



 
}
