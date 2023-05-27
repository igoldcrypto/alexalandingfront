import initDB from "../../../helper/initDB";
import User from "../../../helper/Modal/User";


initDB()

export default async (req, res) => {

    const { id } = req.body;


    const findUserData = await User.find({ UpperlineUser: id })


    res.json(findUserData)







}