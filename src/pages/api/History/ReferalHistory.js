import initDB from '../../../helper/initDB'
import ReferralHistory from '../../../helper/Modal/History/ReferralHistory'

initDB()

export default async (req, res) => {
  const { id } = req.body

  const findHistoryData = await ReferralHistory.find({ ReferralTo: id })

  res.json(findHistoryData)
}
