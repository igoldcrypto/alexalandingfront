import initDB from '../../../helper/initDB'
import GlobalBonusHistory from '../../../helper/Modal/History/GlobalBonusHistory'

initDB()

export default async (req, res) => {
  const { id } = req.body

  const findData = await GlobalBonusHistory.find({Owner:id})

  res.json(findData)
}