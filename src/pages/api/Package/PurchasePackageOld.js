import initDB from '../../../helper/initDB'
import Package from '../../../helper/Modal/Plan'
import PackageHistory from '../../../helper/Modal/History/PackageHistory'
import ReferralHistory from '../../../helper/Modal/History/ReferralHistory'
import User from '../../../helper/Modal/User'
import LykaFastBonus from '../../../helper/Modal/Bonus/LykaFastBonus'
import GlobalBonus from '../../../helper/Modal/Bonus/GlobalBonus'
import RankEligibilityBonusFill from '../../../helper/Modal/Bonus/RankEligibilityBonusFill'
import RankBonusHistory from '../../../helper/Modal/History/RankBonusHistory'
import RenewalPurchasePackage from 'src/helper/Modal/Renewal/RenewalPurchasePackage'
import RankEligibilityClaim from 'src/helper/Modal/History/RankEligibilityClaim'
import PurchasePackageInvoice from 'src/helper/Modal/Invoice/PurchasePackageInvoice'
import ShortRecord from 'src/helper/Modal/ShortRecord'
import LapWallet from 'src/helper/Modal/History/LapWallet'

initDB()

export default async (req, res) => {
  const { packageId, Anount, id } = req.body



  var checkUpperlineUser = await User.findById(id)

  var findPack = await PackageHistory.findOne({ PackageOwner: id })





  if (checkUpperlineUser.UpperlineUser !== "null") {
    var findUpperlineUser = await User.findById(checkUpperlineUser.UpperlineUser)
    var checkUpperlineUserPackageName = findUpperlineUser.PurchasedPackageName
  }



  const checkPackageHis = await PackageHistory.find({ PackageOwner: id })

  var checkRenewalPackage = ""
  var findMyPackage = await Package.findById(packageId)




  if (checkPackageHis == 0) {

    var Lamount = Number(Anount) * 30

    const findPackage = await Package.findOne({ PackageName: checkUpperlineUserPackageName })

    const findPackagePurchaseUser = await User.findById(id)

    const uplineUser = findPackagePurchaseUser.UpperlineUser

    if (uplineUser !== 'null') {
      var findUplineUserDetails = await User.findById(uplineUser)

      var upperPack = await Package.findOne({ PackageName: findUplineUserDetails.PurchasedPackageName })


      var upperPercantage = upperPack.PackageReferalCommision



      checkRenewalPackage = await RenewalPurchasePackage.find({ PackageOwner: uplineUser }).sort({ createdAt: -1 })

      const lastWallete = findUplineUserDetails.MainWallet






      const PackagePercantage = (Number(findMyPackage.PackagePrice) * Number(upperPercantage)) / 100


      // 

      const calWallete = Number(lastWallete) + Number(PackagePercantage)

      // await User.findByIdAndUpdate({ _id: uplineUser }, { MainWallet: calWallete })

      const findOldWallet = await User.findById(uplineUser)


      const FindPackage = await PackageHistory.findOne({ PackageOwner: uplineUser })

      const Max_Cap = Number(FindPackage.PackagePrice) * 300 / 100



      const Got_Reward = Number(PackagePercantage)


      const My_Wallet = Number(findOldWallet.MainWallet)




      if (Got_Reward + My_Wallet >= Max_Cap) {

        var Add_Money_In_Wallet = Max_Cap > My_Wallet ? Max_Cap - My_Wallet : My_Wallet - Max_Cap

        const Lap_Income = Got_Reward > Add_Money_In_Wallet ? Got_Reward - Add_Money_In_Wallet : Add_Money_In_Wallet - Got_Reward

        const fetch_Last_Lap_Wallet = await LapWallet.findOne({ BonusOwner: uplineUser })

        if (fetch_Last_Lap_Wallet) {

          await LapWallet.findByIdAndUpdate({ _id: fetch_Last_Lap_Wallet._id }, { LapAmount: fetch_Last_Lap_Wallet.LapAmount + Lap_Income })

        } else {

          await LapWallet({
            BonusOwner: uplineUser,
            LapAmount: Lap_Income
          }).save()

        }

        if (Add_Money_In_Wallet > 0) {
          const ReferalHistory = await ReferralHistory({
            ReferralFrom: findPackagePurchaseUser.SponserCode,
            ReferralTo: uplineUser,
            ReferralCoins: Add_Money_In_Wallet,
            ReferralPercantage: upperPercantage,
            PackageName: findMyPackage.PackageName
          }).save()

          await User.findByIdAndUpdate({ _id: uplineUser }, { MainWallet: Number(lastWallete) + Number(Add_Money_In_Wallet) })



          // short record is below 


          const findShortRecord = await ShortRecord.findOne({ RecordOwner: uplineUser })


          if (findShortRecord) {

            let sum = Number(findShortRecord.DirectReward) + Number(Add_Money_In_Wallet)

            const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { DirectReward: sum })

          } else {

            const createShortRecord = await ShortRecord({
              RecordOwner: uplineUser,
              DirectReward: Add_Money_In_Wallet
            }).save()

          }



        }


      } else {

        var Add_Money_In_Wallet = Got_Reward + My_Wallet


        if (Add_Money_In_Wallet > 0) {


          const ReferalHistory = await ReferralHistory({
            ReferralFrom: findPackagePurchaseUser.SponserCode,
            ReferralTo: uplineUser,
            ReferralCoins: Got_Reward,
            ReferralPercantage: upperPercantage,
            PackageName: findMyPackage.PackageName
          }).save()
          await User.findByIdAndUpdate({ _id: uplineUser }, { MainWallet: Number(lastWallete) + Number(Got_Reward) })
        }

        // short record is below 

        const findShortRecord = await ShortRecord.findOne({ RecordOwner: uplineUser })


        if (findShortRecord) {

          let sum = Number(findShortRecord.DirectReward) + Number(Got_Reward)

          const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { DirectReward: sum })

        } else {

          const createShortRecord = await ShortRecord({
            RecordOwner: uplineUser,
            DirectReward: Got_Reward
          }).save()

        }

      }

      const uplinerCreationDate = findUplineUserDetails.createdAt

      var date = new Date(uplinerCreationDate)
      var dateToday = new Date()
      var month = date.getMonth() + 1
      var month2 = dateToday.getMonth() + 1

      var creationDate = month + '/' + date.getDate() + '/' + date.getFullYear()
      var todayDate = month2 + '/' + dateToday.getDate() + '/' + dateToday.getFullYear()



      const date1 = new Date(creationDate)
      const date2 = new Date(todayDate)
      const diffTime = Math.abs(date2 - date1)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))


      if (diffDays <= 10) {
        const findData = await LykaFastBonus.find({ FastBonusCandidate: uplineUser })



        if (findData.length !== 0) {
          const updateData = await LykaFastBonus.findByIdAndUpdate(
            { _id: findData[0]._id },
            { ReferLength: Number(findData[0].ReferLength) + 1 }
          )
        } else {
          const createLykaFastBonus = await LykaFastBonus({
            FastBonusCandidate: uplineUser,
            ReferLength: '1'
          }).save()

          const CreateGlobalBonus = await GlobalBonus({
            BonusOwner: id,
            Percantage: "1"
          }).save()



        }
      }


      const upperlineWallet = findUplineUserDetails.PurchasedPackagePrice

      if (findMyPackage.PackagePrice >= upperlineWallet) {



        const AddRankEligibility = await RankEligibilityBonusFill({

          UpperLineUserId: uplineUser,
          DownLineUserId: id,
          BusinessAmount: findMyPackage.PackagePrice,
          BusinessMonth: month,
          BusinessYear: date.getFullYear()

        }).save()

        const AddRankEligibilityHistory = await RankBonusHistory({
          UpperLineUserId: uplineUser,
          UpperLineUserSponser: findUplineUserDetails.SponserCode,
          UpperLineUserEmail: findUplineUserDetails.EmailId,
          DownLineUserId: id,
          DownLineUserSponser: findPackagePurchaseUser.SponserCode,
          DownLineUserEmail: findPackagePurchaseUser.EmailId,
          BusinessAmount: findMyPackage.PackagePrice,
          PurchasedPackageName: findMyPackage.PackageName,
          PurchasedPackagePrice: findMyPackage.PackagePrice

        }).save()

        if (checkRenewalPackage.length !== 0) {

          const makeRenewalBonusActive = await RenewalPurchasePackage.findByIdAndUpdate({ _id: checkRenewalPackage[0]._id }, { DirectReferalDone: "true" })
        }
      }

    }

    const createPackage = await PackageHistory({
      PackageName: findMyPackage.PackageName,
      PackagePrice: findMyPackage.PackagePrice,
      PaackagePeriod: findMyPackage.PaackagePeriod,
      PackageMaximumLimit: '300',
      LykaToken: Lamount,
      PackgeRewardWallte: '0',
      PackageOwner: id,
      Type: "Basic"
    }).save()


    const createPackageInvoice = await PurchasePackageInvoice({
      PackageName: findMyPackage.PackageName,
      PackagePrice: findMyPackage.PackagePrice,
      PaackagePeriod: findMyPackage.PaackagePeriod,
      PackageMaximumLimit: '300',
      LykaToken: Lamount,
      PackgeRewardWallte: '0',
      PackageOwner: id,
      Type: "Basic"
    }).save()




    if (checkUpperlineUser.UpperlineUser !== "null") {

      const findShortRecord = await ShortRecord.findOne({ RecordOwner: checkUpperlineUser.UpperlineUser })

      if (findShortRecord) {

        let sum = Number(findShortRecord.DirectBusiness) + Number(findMyPackage.PackagePrice)

        const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { DirectBusiness: sum })

      } else {

        const createShortRecord = await ShortRecord({
          RecordOwner: checkUpperlineUser.UpperlineUser,
          DirectBusiness: findMyPackage.PackagePrice
        }).save()

      }
    }



    const createAnotherEntry = await User.findOneAndUpdate({ _id: id }, { PurchasedPackageName: findMyPackage.PackageName, PurchasedPackagePrice: Number(findMyPackage.PackagePrice), PurchasedPackageDate: "today" })

    return res.json('Package Created Successfully')


  } else {


    await PackageHistory.findByIdAndDelete(checkPackageHis[0]._id)
    if (checkRenewalPackage.length !== 0) {
      await RenewalPurchasePackage.findByIdAndDelete(checkRenewalPackage[0]._id)
    }


    var Lamount = Number(Anount) * 30

    const findPackage = await Package.findOne({ PackageName: checkUpperlineUserPackageName })

    // 

    const findPackagePurchaseUser = await User.findById(id)

    const uplineUser = findPackagePurchaseUser.UpperlineUser


    if (uplineUser !== 'null') {
      console.log("came is first boxes ========================================> ")
      var findUplineUserDetails = await User.findById(uplineUser)

      const lastWallete = findUplineUserDetails.MainWallet


      console.log("uplineUser => " + uplineUser)






      var findUplineUserDetails = await User.findById(uplineUser)

      // 

      var upperPack = await Package.findOne({ PackageName: findUplineUserDetails.PurchasedPackageName })


      var upperPercantage = upperPack.PackageReferalCommision










      const PackagePercantage = (Number(findMyPackage.PackagePrice) * Number(upperPercantage)) / 100

      // 

      const calWallete = Number(lastWallete) + Number(PackagePercantage)

      // await User.findByIdAndUpdate({ _id: uplineUser }, { MainWallet: calWallete })











      const findOldWallet = await User.findById(uplineUser)



      const FindPackage = await PackageHistory.findOne({ PackageOwner: uplineUser })

      const Max_Cap = Number(FindPackage.PackagePrice) * 300 / 100

      const Got_Reward = Number(PackagePercantage)

      const My_Wallet = Number(findOldWallet.MainWallet)



      if (Got_Reward + My_Wallet >= Max_Cap) {

        var Add_Money_In_Wallet = Max_Cap > My_Wallet ? Max_Cap - My_Wallet : Max_Cap - My_Wallet

        const Lap_Income = Got_Reward > Add_Money_In_Wallet ? Got_Reward - Add_Money_In_Wallet : Add_Money_In_Wallet - Got_Reward

        const fetch_Last_Lap_Wallet = await LapWallet.findOne({ BonusOwner: uplineUser })

        if (fetch_Last_Lap_Wallet) {

          await LapWallet.findByIdAndUpdate({ _id: fetch_Last_Lap_Wallet._id }, { LapAmount: fetch_Last_Lap_Wallet.LapAmount + Lap_Income })

        } else {

          await LapWallet({
            BonusOwner: uplineUser,
            LapAmount: Lap_Income
          }).save()

        }

        if (Add_Money_In_Wallet > 0) {

          const ReferalHistory = await ReferralHistory({
            ReferralFrom: findPackagePurchaseUser.SponserCode,
            ReferralTo: uplineUser,
            ReferralCoins: Add_Money_In_Wallet,
            ReferralPercantage: upperPercantage,
            PackageName: findMyPackage.PackageName
          }).save()

          await User.findByIdAndUpdate({ _id: uplineUser }, { MainWallet: Number(lastWallete) + Number(Add_Money_In_Wallet) })

        }

        // short record is bwlow



        const findShortRecord = await ShortRecord.findOne({ RecordOwner: uplineUser })


        if (findShortRecord) {

          let sum = Number(findShortRecord.DirectReward) + Number(Add_Money_In_Wallet)

          const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { DirectReward: sum })

        } else {

          const createShortRecord = await ShortRecord({
            RecordOwner: uplineUser,
            DirectReward: Add_Money_In_Wallet
          }).save()

        }


      } else {

        var Add_Money_In_Wallet = Got_Reward + My_Wallet

        const ReferalHistory = await ReferralHistory({
          ReferralFrom: findPackagePurchaseUser.SponserCode,
          ReferralTo: uplineUser,
          ReferralCoins: Got_Reward,
          ReferralPercantage: upperPercantage,
          PackageName: findMyPackage.PackageName
        }).save()

        await User.findByIdAndUpdate({ _id: uplineUser }, { MainWallet: Number(lastWallete) + Number(Got_Reward) })

        // short record is bwlow



        const findShortRecord = await ShortRecord.findOne({ RecordOwner: uplineUser })


        if (findShortRecord) {

          let sum = Number(findShortRecord.DirectReward) + Number(Got_Reward)

          const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { DirectReward: sum })

        } else {

          const createShortRecord = await ShortRecord({
            RecordOwner: uplineUser,
            DirectReward: Got_Reward
          }).save()

        }





      }













      const uplinerCreationDate = findUplineUserDetails.createdAt

      var date = new Date(uplinerCreationDate)
      var dateToday = new Date()
      var month = date.getMonth() + 1
      var month2 = dateToday.getMonth() + 1

      var creationDate = month + '/' + date.getDate() + '/' + date.getFullYear()
      var todayDate = month2 + '/' + dateToday.getDate() + '/' + dateToday.getFullYear()


      const date1 = new Date(creationDate)
      const date2 = new Date(todayDate)
      const diffTime = Math.abs(date2 - date1)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))


      if (diffDays <= 10) {
        const findData = await LykaFastBonus.find({ FastBonusCandidate: uplineUser })



        if (findData.length !== 0) {
          const updateData = await LykaFastBonus.findByIdAndUpdate(
            { _id: findData[0]._id },
            { ReferLength: Number(findData[0].ReferLength) + 1 }
          )
        } else {
          const createLykaFastBonus = await LykaFastBonus({
            FastBonusCandidate: uplineUser,
            ReferLength: '1'
          }).save()

          const CreateGlobalBonus = await GlobalBonus({
            BonusOwner: id,
            Percantage: "1"
          }).save()



        }
      }


      const upperlineWallet = findUplineUserDetails.PurchasedPackagePrice

      if (findMyPackage.PackagePrice >= upperlineWallet) {



        const AddRankEligibility = await RankEligibilityBonusFill({

          UpperLineUserId: uplineUser,
          DownLineUserId: id,
          BusinessAmount: findMyPackage.PackagePrice,
          BusinessMonth: month,
          BusinessYear: date.getFullYear()

        }).save()



        const AddRankEligibilityHistory = await RankBonusHistory({
          UpperLineUserId: uplineUser,
          UpperLineUserSponser: findUplineUserDetails.SponserCode,
          UpperLineUserEmail: findUplineUserDetails.EmailId,
          DownLineUserId: id,
          DownLineUserSponser: findPackagePurchaseUser.SponserCode,
          DownLineUserEmail: findPackagePurchaseUser.EmailId,
          BusinessAmount: findMyPackage.PackagePrice,
          PurchasedPackageName: findMyPackage.PackageName,
          PurchasedPackagePrice: findMyPackage.PackagePrice

        }).save()


      }



    }

    // maximum caping start

    if (uplineUser !== 'null') {

      const findOldWallet = await User.findById(uplineUser)



      const FindPackage = await PackageHistory.findOne({ PackageOwner: uplineUser })

      const Max_Cap = Number(FindPackage.PackagePrice) * 300 / 100

      const Got_Reward = Number(findMyPackage.PackagePrice)

      const My_Wallet = Number(findOldWallet.MainWallet)



      if (Got_Reward + My_Wallet >= Max_Cap) {

        var Add_Money_In_Wallet = Max_Cap > My_Wallet ? Max_Cap - My_Wallet : Max_Cap - My_Wallet

        const Lap_Income = Got_Reward > Add_Money_In_Wallet ? Got_Reward - Add_Money_In_Wallet : Add_Money_In_Wallet - Got_Reward

        const fetch_Last_Lap_Wallet = await LapWallet.findOne({ BonusOwner: uplineUser })

        if (fetch_Last_Lap_Wallet) {

          await LapWallet.findByIdAndUpdate({ _id: fetch_Last_Lap_Wallet._id }, { LapAmount: fetch_Last_Lap_Wallet.LapAmount + Lap_Income })

        } else {

          await LapWallet({
            BonusOwner: uplineUser,
            LapAmount: Lap_Income
          }).save()

        }


        const createPackage = await PackageHistory({
          PackageName: findMyPackage.PackageName,
          PackagePrice: findMyPackage.PackagePrice,
          PaackagePeriod: findMyPackage.PaackagePeriod,
          PackageMaximumLimit: '300',
          LykaToken: Lamount,
          PackgeRewardWallte: '0',
          PackageOwner: id,
          Type: "Repurchased"
        }).save()

        const createPackageInvoice = await PurchasePackageInvoice({
          PackageName: findMyPackage.PackageName,
          PackagePrice: findMyPackage.PackagePrice,
          PaackagePeriod: findMyPackage.PaackagePeriod,
          PackageMaximumLimit: '300',
          LykaToken: Lamount,
          PackgeRewardWallte: '0',
          PackageOwner: id,
          Type: "Repurchased"
        }).save()

        const RemoveLastWallet = await User.findByIdAndUpdate({_id:id},{MainWallet:0})



     




        // }



        // const findShortRecord = await ShortRecord.findOne({ RecordOwner: uplineUser })


        // if (findShortRecord) {

        //   let sum = Number(findShortRecord.RebuyBonus) + Number(Add_Money_In_Wallet)

        //   const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { RebuyBonus: sum })

        // } else {

        //   const createShortRecord = await ShortRecord({
        //     RecordOwner: uplineUser,
        //     RebuyBonus: Add_Money_In_Wallet
        //   }).save()

        // }


        // short record is done


      } else {

        var Add_Money_In_Wallet = Got_Reward + My_Wallet


        // if ( Add_Money_In_Wallet > 0) {


        console.log("this one =========================> ")
        console.log("Add_Money_In_Wallet ==> " + Add_Money_In_Wallet)

        const createPackage = await PackageHistory({
          PackageName: findMyPackage.PackageName,
          PackagePrice: findMyPackage.PackagePrice,
          PaackagePeriod: findMyPackage.PaackagePeriod,
          PackageMaximumLimit: '300',
          LykaToken: Lamount,
          PackgeRewardWallte: '0',
          PackageOwner: id,
          Type: "Repurchased"
        }).save()


        const createPackageInvoice = await PurchasePackageInvoice({
          PackageName: findMyPackage.PackageName,
          PackagePrice: findMyPackage.PackagePrice,
          PaackagePeriod: findMyPackage.PaackagePeriod,
          PackageMaximumLimit: '300',
          LykaToken: Lamount,
          PackgeRewardWallte: '0',
          PackageOwner: id,
          Type: "Repurchased"
        }).save()

        const RemoveLastWallet = await User.findByIdAndUpdate({_id:id},{MainWallet:0})






        // }


        // short record is bwlow



        const findShortRecord = await ShortRecord.findOne({ RecordOwner: uplineUser })


        if (findShortRecord) {

          let sum = Number(findShortRecord.RebuyBonus) + Number(Got_Reward)

          // const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { RebuyBonus: sum })

        } else {

          const createShortRecord = await ShortRecord({
            RecordOwner: uplineUser,
            RebuyBonus: Got_Reward
          }).save()

        }





      }


      if (checkUpperlineUser.UpperlineUser !== "null") {


        const findShortRecord = await ShortRecord.findOne({ RecordOwner: checkUpperlineUser.UpperlineUser })


        if (findShortRecord) {

          let sum = Number(findShortRecord.DirectBusiness) + Number(findMyPackage.PackagePrice)

          const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { DirectBusiness: sum })

        } else {

          const createShortRecord = await ShortRecord({
            RecordOwner: checkUpperlineUser.UpperlineUser,
            DirectBusiness: findMyPackage.PackagePrice
          }).save()

        }
      }


      // this is the thirdonen








      if (Got_Reward + My_Wallet >= Max_Cap) {

        var Add_Money_In_Wallet = Max_Cap > My_Wallet ? Max_Cap - My_Wallet : Max_Cap - My_Wallet

        const Lap_Income = Got_Reward > Add_Money_In_Wallet ? Got_Reward - Add_Money_In_Wallet : Add_Money_In_Wallet - Got_Reward

        const fetch_Last_Lap_Wallet = await LapWallet.findOne({ BonusOwner: uplineUser })

        if (fetch_Last_Lap_Wallet) {

          await LapWallet.findByIdAndUpdate({ _id: fetch_Last_Lap_Wallet._id }, { LapAmount: fetch_Last_Lap_Wallet.LapAmount + Lap_Income })

        } else {

          await LapWallet({
            BonusOwner: uplineUser,
            LapAmount: Lap_Income
          }).save()

        }


        // maximum caping close
        // if ( Add_Money_In_Wallet > 0) {

        console.log("this two =========================> ")


        console.log("Add_Money_In_Wallet ==> " + Add_Money_In_Wallet)


       

        // }
        // short record is bwlow



        // const findShortRecord = await ShortRecord.findOne({ RecordOwner: uplineUser })


        // if (findShortRecord) {

        //   let sum = Number(findShortRecord.RebuyBonus) + Number(Add_Money_In_Wallet)

        //   const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { RebuyBonus: sum })

        // } else {

        //   const createShortRecord = await ShortRecord({
        //     RecordOwner: uplineUser,
        //     RebuyBonus: Add_Money_In_Wallet
        //   }).save()

        // }


        // short record is done


      } else {

        var Add_Money_In_Wallet = Got_Reward + My_Wallet


        // if (Add_Money_In_Wallet > 0) {
        console.log("this three =========================> ")

        console.log("Add_Money_In_Wallet ==> " + Add_Money_In_Wallet)

    




        const findShortRecord = await ShortRecord.findOne({ RecordOwner: uplineUser })


        if (findShortRecord) {

          let sum = Number(findShortRecord.RebuyBonus) + Number(Got_Reward)

          // const updateValue = await ShortRecord.findByIdAndUpdate({ _id: findShortRecord._id }, { RebuyBonus: sum })

        } else {

          const createShortRecord = await ShortRecord({
            RecordOwner: uplineUser,
            RebuyBonus: Got_Reward
          }).save()

        }





      }









    } else {


      const createPackage = await PackageHistory({
        PackageName: findMyPackage.PackageName,
        PackagePrice: findMyPackage.PackagePrice,
        PaackagePeriod: findMyPackage.PaackagePeriod,
        PackageMaximumLimit: '300',
        LykaToken: Lamount,
        PackgeRewardWallte: '0',
        PackageOwner: id,
        Type: "Repurchased"
      }).save()

      const createPackageInvoice = await PurchasePackageInvoice({
        PackageName: findMyPackage.PackageName,
        PackagePrice: findMyPackage.PackagePrice,
        PaackagePeriod: findMyPackage.PaackagePeriod,
        PackageMaximumLimit: '300',
        LykaToken: Lamount,
        PackgeRewardWallte: '0',
        PackageOwner: id,
        Type: "Repurchased"
      }).save()
      const RemoveLastWallet = await User.findByIdAndUpdate({_id:id},{MainWallet:0})



    }
































    const updateDataS = await RankEligibilityClaim.findOne({ RankEligibilityClaimOwnerId: id })


    // const updatesdatas = await RankEligibilityClaim.findByIdAndUpdate({_id:updateDataS._id},{})
    if (updateDataS !== null) {
      const deleteOldData = await RankEligibilityClaim.findByIdAndDelete(updateDataS._id)
    }




    await RenewalPurchasePackage({
      PackageOwner: id
    }).save()




    await User.findByIdAndUpdate({ _id: id }, { UserEarnPercantage: "0%" })


    const createAnotherEntry = await User.findOneAndUpdate({ _id: id }, { PurchasedPackageName: findMyPackage.PackageName, PurchasedPackagePrice: Number(findMyPackage.PackagePrice), PurchasedPackageDate: "today" })

    return res.json('Package Created Successfully')



  }

}
