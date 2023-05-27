import User from '../../../helper/Modal/User'
import initDB from '../../../helper/initDB'
import bcrypt from 'bcrypt'
import ShortRecord from 'src/helper/Modal/ShortRecord'
import MyTeamMember from "../../../helper/Modal/MyTeamMember"

initDB()

export default async (req, res) => {
  const { FullName, Position, Country, ContactNumber, EmailId, UpperlineUser, Passsword } = req.body
 

  if (!FullName || !Position || !Country || !ContactNumber || !EmailId || !Passsword) {
    return res.status(404).json({ error: 'You Have Not Provided All The Informations' })
  }

  let checkReferalUser;

  let upUser

  if (UpperlineUser) {
    checkReferalUser = await User.findOne({ SponserCode: UpperlineUser })
    upUser = await User.findOne({ SponserCode: UpperlineUser })
    if (!checkReferalUser) {
      return res.status(404).json({ error: 'Referal Id Is Wrong. Please Check It Again.' })
    }

    if (checkReferalUser.length == 0) {
      return res.status(404).json({ error: 'Referal Id Is Wrong. Please Check It Again.' })
    } else {

      let currentChildId = Position === "Left" ? checkReferalUser.LeftTeamId : checkReferalUser.RightTeamId;

     

      while(currentChildId !== "null") {
        const currentChildNode = await User.findById(currentChildId);

       

        checkReferalUser = currentChildNode;
        currentChildId = Position === "Left" ? checkReferalUser.LeftTeamId : checkReferalUser.RightTeamId;
      }
    }
  }

 

  const hashedPassowd = await bcrypt.hash(Passsword, 12)

  var randValue = Math.floor(Math.random() * 900000)
  var randValue2 = Math.floor(Math.random() * 90000)

  var checkRandValue = await User.findOne({ UserName: randValue })

  while (checkRandValue !== null) {
    randValue = Math.floor(Math.random() * 900000)
    randValue2 = Math.floor(Math.random() * 90000)

    checkRandValue = await User.findOne({ UserName: randValue })
  }

  const generatedUserName = randValue
  var generateUserN = FullName.slice(0, 3)

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  today = yyyy + '-' + mm + '-' + dd

  if (UpperlineUser) {
    var CreateUser = await User({
      FullName,
      Position,
      Country,
      ContactNumber,
      EmailId,
      UpperlineUser: upUser._id,
      Passsword: hashedPassowd,
      SponserCode: generatedUserName,
      UserName: generateUserN + randValue2
    }).save()

    // checkReferalUser

    const findUppers = await User.findOne({SponserCode:UpperlineUser})
    const findShortRecord = await ShortRecord.findOne({RecordOwner:findUppers._id})


    if (findShortRecord) {

      let sum = Number(findShortRecord.DirectTeam) + 1
     

      const updateValue = await ShortRecord.findByIdAndUpdate({_id:findShortRecord._id},{DirectTeam:sum})

    }else{

      const createShortRecord = await ShortRecord({
        RecordOwner:findUppers._id,
        DirectTeam:1
      }).save()

    }




    if(checkReferalUser && Position === "Left") {
      const updatedCheckReferalUser = {
        LeftTeamId: CreateUser._id
      }
      await User.findByIdAndUpdate(checkReferalUser, {
        $set: updatedCheckReferalUser
      }, {
        new: true
      })
    }

    else if(checkReferalUser && Position === "Right"){
      const updatedCheckReferalUser = {
        RightTeamId: CreateUser._id
      }
      await User.findByIdAndUpdate(checkReferalUser, {
        $set: updatedCheckReferalUser
      }, {
        new: true
      })
    }
  } else {
    var CreateUser = await User({
      FullName,
      Position,
      Country,
      ContactNumber,
      EmailId,
      Passsword: hashedPassowd,
      SponserCode: generatedUserName,
      UserName: generateUserN + randValue2
    }).save()
  }








  // calculating upperlines


  if (UpperlineUser) {
    
    let upperline = await User.findById(checkReferalUser._id)

    var Level = 1

    while (upperline !== null) {


      if (Level > 10) {
        break;
      }

      await MyTeamMember({

        RecordOwner:upperline._id,
        UserId:CreateUser._id,
        Sponser:CreateUser.SponserCode,
        Position:CreateUser.Position,
        Referral:UpperlineUser,
        Level:Level

      }).save()

      let upperlineOfThis = upperline.UpperlineUser

      Level = Level +1
      if (upperlineOfThis == "null") {
       break;
      }

      upperline = await User.findById(upperlineOfThis)

    }
    
    
    
    
    
    
    
  }










  res.status(200).json(CreateUser)
}
