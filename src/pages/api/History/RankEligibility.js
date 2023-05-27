import initDB from "../../../helper/initDB";
import RankEligibilityClaim from "../../../helper/Modal/History/RankEligibilityClaim";

initDB()

export default async(req,res)=>{

    const {id} = req.body;


    const fetchDatas = await RankEligibilityClaim.find({RankEligibilityClaimOwnerId:id})



    res.status(200).json(fetchDatas)





}