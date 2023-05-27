import initDB from "../../../helper/initDB";
import PackageHistory from "../../../helper/Modal/History/PackageHistory";
import User from "../../../helper/Modal/User";

initDB()

export default async (req, res) => {

    const { id} = req.body;


    const currentUser = await User.findById(id);

    if(!currentUser) {
        // Handle non exsistent user edge case
    }

    const currentSubUsers = await User.find({
        UpperlineUser: currentUser.id
    });

    let totalData = {
        users: 0,
        bussiness: 0,
    };

    const bfsQueue = [];

    currentSubUsers.forEach((sub) => {
        bfsQueue.push(sub);
    });

    while(bfsQueue.length > 0) {
        const currentUser = bfsQueue.shift();

        const latestPackageHistory = await PackageHistory.findOne({
            PackageOwner: currentUser.id
        });

        if(latestPackageHistory && Number(latestPackageHistory.PackagePrice) > 0) {
            const currentUserPackage = Number(latestPackageHistory.PackagePrice);

            totalData["bussiness"] += currentUserPackage;
            totalData["users"] += 1;
        }

        const currentUsersSubs = await User.find({
            UpperlineUser: currentUser.id
        });

        currentUsersSubs.forEach((sub) => {
            bfsQueue.push(sub);
        });


    } 
    console.log(totalData.users) // The total number of this user childs






   return res.status(200).json(totalData.users)

}