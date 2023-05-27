import initDB from "../../helper/initDB";
import User from "../../helper/Modal/User";


initDB()

export default async (req, res) => {

    const { sponserID } = req.body;


    const findUser = await User.findOne({ SponserCode: sponserID })

    console.log("this => "+findUser)
    if (findUser == null) {
        res.status(500).json("poing")
    }else{

        res.json(findUser.FullName)
    }

}