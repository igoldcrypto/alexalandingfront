import initDB from "../../helper/initDB"
import MyTeamMember from "../../helper/Modal/MyTeamMember"






initDB()

export default async (req, res) => {


    const {id} = req.body;



    const findData = await MyTeamMember.find({RecordOwner:id})



    res.json(findData) 

}