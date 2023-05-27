import initDB from "../../../helper/initDB";
import RankEligibilityClaim from "../../../helper/Modal/History/RankEligibilityClaim";
import RankEligibilityClaimForGlobalPool from "../../../helper/Modal/History/RankEligibilityClaimForGlobalPool";
import RankEligibilityBonusFill from "../../../helper/Modal/Bonus/RankEligibilityBonusFill";
import PackageHistory from "../../../helper/Modal/History/PackageHistory";
import User from "../../../helper/Modal/User";
import Plan from "../../../helper/Modal/Plan";
import RenewalPurchasePackage from "../../../helper/Modal/Renewal/RenewalPurchasePackage";
import ShortRecord from "../../../helper/Modal/ShortRecord";

initDB()

export default async (req, res) => {

    const { id, ClaimedReward, TotalBusiness } = req.body;

    if (!id || !ClaimedReward || !TotalBusiness) {
        return res.status(500).json({ message: 'Please Provide All Data' })
    }

    const FindMyPackage = await PackageHistory.findOne({PackageOwner:id})

    const findRankEligibilityData = await RankEligibilityClaim.find({RankEligibilityClaimOwnerId:id})

    const MainUserData = await User.findById(id)

    const FindPackage = await Plan.findOne({ PackagePrice: MainUserData.PurchasedPackagePrice })

    // const NewWallet = Number(MainUserData.MainWallet) + Number(ClaimedReward)


    const findOldReneal = await RenewalPurchasePackage.find({PackageOwner:id})

    if (findOldReneal.length !== 0) {
        await RenewalPurchasePackage.findByIdAndUpdate({_id:findOldReneal[0]._id},{RankEligibility:"false"})
    }

    // Maximum Caping Code


    const Find_Maximum_Amount = Number(FindMyPackage.PackagePrice) * 300 / 100

    const My_Current_Wallet = Number(MainUserData.MainWallet)

    const Next_I_Will_Get = Number(ClaimedReward)

    let Reward1 = Find_Maximum_Amount - My_Current_Wallet
    
    let Reward2 = Next_I_Will_Get > Reward1 ? Reward1 : Next_I_Will_Get


    RankEligibilityClaim({
        RankEligibilityClaimOwnerId: MainUserData._id,
        RankEligibilityClaimOwnerUserName: MainUserData.SponserCode,
        RankEligibilityClaimOwnerEmail: MainUserData.EmailId,
        PackageOwnName: FindPackage.PackageName,
        PackageOwnPrice: FindPackage.PackagePrice,
        ClaimedReward: Reward2,
        TotBusiness: TotalBusiness,
        RealClaimedReward:ClaimedReward

    }).save()

    await User.findByIdAndUpdate({ _id: id }, {$inc:{MainWallet: Reward2} }) // giving reward
    // await User.findByIdAndUpdate({ _id: id }, { MainWallet: NewWallet }) // giving reward


    const checkIfAlreadyExists = await RankEligibilityClaimForGlobalPool.findOne({RankEligibilityClaimOwnerId: MainUserData._id})

    if (checkIfAlreadyExists) {
      
      await RankEligibilityClaimForGlobalPool.findByIdAndDelete(checkIfAlreadyExists._id)

      RankEligibilityClaimForGlobalPool({

        RankEligibilityClaimOwnerId: MainUserData._id,
        RankEligibilityClaimOwnerUserName: MainUserData.SponserCode,
        RankEligibilityClaimOwnerEmail: MainUserData.EmailId,
        PackageOwnName: FindPackage.PackageName,
        PackageOwnPrice: FindPackage.PackagePrice,
        ClaimedReward: Reward2,
        TotBusiness: TotalBusiness

    }).save()

    }else{   
      RankEligibilityClaimForGlobalPool({

        RankEligibilityClaimOwnerId: MainUserData._id,
        RankEligibilityClaimOwnerUserName: MainUserData.SponserCode,
        RankEligibilityClaimOwnerEmail: MainUserData.EmailId,
        PackageOwnName: FindPackage.PackageName,
        PackageOwnPrice: FindPackage.PackagePrice,
        ClaimedReward: Reward2,
        TotBusiness: TotalBusiness

    }).save()
  }

    const findShortRecord = await ShortRecord.findOne({RecordOwner:MainUserData._id})

    if (findShortRecord) {

      let sum = Number(findShortRecord.RankEligibility) + Number(Reward2)

      const updateValue = await ShortRecord.findByIdAndUpdate({_id:findShortRecord._id},{RankEligibility:sum})

    }else{

      const createShortRecord = await ShortRecord({
        RecordOwner:list[i].id,
        RankEligibility:Reward2
      }).save()

    }


   return res.status(200).json({ message: 'Claim Reward Done' })

}
