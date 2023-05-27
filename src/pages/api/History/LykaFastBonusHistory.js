import initDB from '../../../helper/initDB'
import LykaFastBonusHis from '../../../helper/Modal/History/LykaFastBonusHis'

initDB()

export default async (req, res) => {
  const { id } = req.body

  const datas = await LykaFastBonusHis.find({ BonusOwner: id })

  res.json(datas)
}
