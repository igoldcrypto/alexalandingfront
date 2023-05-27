import initDB from "../../../helper/initDB";
import MatchingBonusHistory from "../../../helper/Modal/History/MatchingBonusHistory"

initDB()

export default async (req, res) => {

    const { id } = req.body;

    const findRecords = await MatchingBonusHistory.find({ BonusOwner: id })

    res.json(findRecords)





}