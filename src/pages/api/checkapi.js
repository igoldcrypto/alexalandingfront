import initDB from '../../helper/initDB'
import RankEligibilityBonusFill from '../../helper/Modal/Bonus/RankEligibilityBonusFill'

initDB()

export default async (req,res) => {

  const createHis = await RankEligibilityBonusFill({
    UpperLineUserId: '63a09f41f5579f410045984c',
    DownLineUserId: '63a09fa7f5579f410045984f',
    BusinessAmount: '2500',
    BusinessMonth: '12',
    BusinessYear: '2022'
  }).save()


  res.json(createHis)



}
