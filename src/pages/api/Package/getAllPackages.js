import Plan from '../../../helper/Modal/Plan'
import initDB from '../../../helper/initDB'

initDB()

export default async (req, res) => {
  const allPacks = await Plan.find()

  res.json(allPacks)
}
