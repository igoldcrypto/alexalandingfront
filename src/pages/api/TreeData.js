import initDB from "../../helper/initDB";
import User from "../../helper/Modal/User";

initDB()

export default async(req,res)=>{

    // const {id} = req.body;
    const {userName} = req.body;

    const MainUserData = await User.findOne({FullName:userName})

    console.log(MainUserData)
    var id = MainUserData._id

    const currentUser = await User.findById(id);

    const upperLineId = await User.findById(currentUser.UpperlineUser)

    var MyDirectLeftBusiness = 0
    var MyDirectRightBusiness = 0

    const myDirectLeftDownLines = await User.find({UpperlineUser:id,Position:"Left"})


    myDirectLeftDownLines.map((hit)=>{
        return MyDirectLeftBusiness = MyDirectLeftBusiness + Number(hit.PurchasedPackagePrice)
    })

    
    
    
    const myDirectRightDownLines = await User.find({UpperlineUser:id,Position:"Right"})


    myDirectRightDownLines.map((hit)=>{
        return MyDirectRightBusiness = MyDirectRightBusiness + Number(hit.PurchasedPackagePrice)
    })




    console.log("left teams")
    
    console.log(myDirectLeftDownLines)
    
    console.log("right teams")
    
    console.log(myDirectRightDownLines)

    let currentLeftUserId = currentUser.LeftTeamId;
    let currentRightUserId = currentUser.RightTeamId;

    const leftStack = [];
    let leftPeopleBusiness = 0;
    let totalLeftPeople = 0;
    
    if(currentLeftUserId !== "null") leftStack.push(currentLeftUserId);
    
    while(leftStack.length > 0) {
        const findingUsersId = leftStack.pop();
        const foundUser = await User.findOne({_id:findingUsersId});

        if(!foundUser) continue;

        leftPeopleBusiness += foundUser.PurchasedPackagePrice;
        totalLeftPeople += 1;

        if(foundUser.LeftTeamId !== "null") leftStack.push(foundUser.LeftTeamId);
        if(foundUser.RightTeamId !== "null") leftStack.push(foundUser.LeftRightId);
    }


    const rightStack = [];
    let rightPeopleBussiness = 0;
    let totalRightPeople = 0;

    if(currentRightUserId !== "null") rightStack.push(currentLeftUserId);

    while(rightStack.length > 0) {
        const findingUsersId = rightStack.pop();
        const foundUser = await User.findOne({_id:findingUsersId});

        if(!foundUser) continue;

        rightPeopleBussiness += foundUser.PurchasedPackagePrice;
        totalRightPeople += 1;

        if(foundUser.LeftTeamId !== "null") rightStack.push(foundUser.LeftTeamId);
        if(foundUser.RightTeamId !== "null") rightStack.push(foundUser.LeftRightId);
    }


    res.json({
        UserName:currentUser.UserName,
        MemberLogin_Id:currentUser.SponserCode,
        SponserId:upperLineId.SponserCode,
        DirecrLeftTamBusiness:MyDirectLeftBusiness,
        DirectRightTeamBusiness:MyDirectRightBusiness,
        LeftPeople: totalLeftPeople,
        RightPeople: totalRightPeople,
        LeftPeopleBusiness: leftPeopleBusiness,
        RightPeopleBusiness: rightPeopleBussiness
    });
}