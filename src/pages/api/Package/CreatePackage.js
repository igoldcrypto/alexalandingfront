import initDB from '../../../helper/initDB'
import Plan from '../../../helper/Modal/Plan'

initDB()

export default async (req, res) => {
  
  const { PackageName, PackagePrice, PaackagePeriod, PackageMaximumLimit, LykaToken ,PackageReferalCommision} = req.body

  const CreatePackage = await Plan({
    PackageName,
    PackagePrice,
    PaackagePeriod,
    PackageMaximumLimit,
    LykaToken,
    PackageReferalCommision
  }).save()



  res.json(CreatePackage)
}
