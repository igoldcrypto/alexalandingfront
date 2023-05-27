import initDB from "../../../helper/initDB";
import RankEligibilityClaim from "../../../helper/Modal/History/RankEligibilityClaim";
import RankEligibilityBonusFill from "../../../helper/Modal/Bonus/RankEligibilityBonusFill";
import PackageHistory from "../../../helper/Modal/History/PackageHistory";
import User from "../../../helper/Modal/User";
import Plan from "../../../helper/Modal/Plan";
import RenewalPurchasePackage from "../../../helper/Modal/Renewal/RenewalPurchasePackage";

initDB()

export default async (req, res) => {

    const {id} = req.body;

    let AllPlans = []

    let ClaimedCard= []
    let PendingLock = []

    const findPackageForThisUser = await PackageHistory.findOne({PackageOwner:id})


    if (findPackageForThisUser == null) {
        return res.status(405).json("user needs to purchase any package.")
    }

    let findPurchasePackageAmount = Number(findPackageForThisUser.PackagePrice);

    if (findPurchasePackageAmount < 500) {
        return res.status(500).json("user is not suitable for rank eligibilty")
    }

    const FetchAllPlans = await Plan.find();


    FetchAllPlans.map((hit)=>{

        if (Number(hit.PackagePrice) > findPurchasePackageAmount || Number(hit.PackagePrice) < 500 ) {
            return
        }

        return AllPlans.push(hit)
    });


    // checking for claimed Rewards


    const GetRankEligibityHis = await RankEligibilityClaim.find({RankEligibilityClaimOwnerId:id})



    if (GetRankEligibityHis.length > 0) {
        for (let index = 0; index < GetRankEligibityHis.length; index++) {
     
            const claimedAmount = GetRankEligibityHis[index].RealClaimedReward;
     
     
            console.log("claimedAmount ======== -------------- ", GetRankEligibityHis[index])
     
           for (let index = 0; index < AllPlans.length; index++) {
     
               const element = AllPlans[index].RankEligibilityReward;
     
               if (claimedAmount == element ) {
                 ClaimedCard.push(AllPlans[index])
               }      
           }    
        }

        console.log("ClaimedCard ======== -------------- ", ClaimedCard)


        // AllPlans

        AllPlans.map((hit)=>{

            
            // console.log(hit.PackagePrice)


            var searchValue = hit.PackagePrice;

            var hasPropertyWithValue = ClaimedCard.some(function(item) {
            return item.PackagePrice === searchValue;
            });

            if (hasPropertyWithValue) {
            console.log("yes yes yes yes");
            console.log(hit)
        } else {
            console.log("no no no no no ");
            console.log(hit)
            PendingLock.push(hit)
            }









        })




    
   













        
       return res.json({ClaimedCard, PendingLock})
    }else{
        
        return res.json({ClaimedCard, PendingLock:AllPlans})
    }




    // res.json({ClaimedCard, PendingLock})


}