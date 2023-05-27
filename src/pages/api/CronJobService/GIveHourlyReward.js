import initDB from '../../../helper/initDB'
import PackageHistory from '../../../helper/Modal/History/PackageHistory'

initDB()

export default async (req, res) => {
    
  const findPackage = await PackageHistory.find()

  console.log(findPackage)

  res.json('All Rewards Done')
}
