import initDB from '../../../helper/initDB';
import PackageHistory from '../../../helper/Modal/History/PackageHistory';

initDB()

export default async (req, res) => {
  const { ids } = req.body

  const finPackageHistory = await PackageHistory.find({ PackageOwner: ids })

  if (finPackageHistory.lenght == 0) {
    res.json(0)
  } else {
    res.json(finPackageHistory)
  }
}
