import initDB from "../../../helper/initDB";
import User from "../../../helper/Modal/User";
import PackageHistory from "../../../helper/Modal/History/PackageHistory";
import ShortRecord from "../../../helper/Modal/ShortRecord"

initDB()

export default async (req, res) => {

    const { id } = req.body;

    const findShort = await ShortRecord.findOne({RecordOwner:id})



    if (!findShort) {
        return res.json(0)
    }


    console.log("the sit ===> "+findShort.DirectBusiness)

   

   return res.json(Number(findShort.DirectBusiness))
}