import initDB from "../../helper/initDB"
import Plan from "../../helper/Modal/Plan"






initDB()

export default async (req, res) => {


    const {PackageName,PackagePrice,PaackagePeriod,PackageMaximumLimit,LykaToken,PackageReferalCommision,RankEligibilityDirectTeamBusiness,RankEligibilityReward ,RankEligibilityTeam} = req.body;


    const updatePlan = await Plan({
        PackageName,
        PackagePrice,
        PaackagePeriod,
        PackageMaximumLimit,
        LykaToken,
        PackageReferalCommision,
        RankEligibilityDirectTeamBusiness,
        RankEligibilityReward,
        RankEligibilityTeam
    }).save()



res.json("done")

}