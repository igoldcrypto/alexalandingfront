import Plan from '../../../helper/Modal/Plan'
import PackageHistory from '../../../helper/Modal/History/PackageHistory'
import initDB from '../../../helper/initDB'

initDB()

export default async (req, res) => {


    const {id} = req.body;

    const FindUserPackage = await PackageHistory.find({PackageOwner:id})

    if (FindUserPackage.length == 0) {
  return res.json(0)
        
    }




    


  return res.json(FindUserPackage[0].PackagePrice)
}
