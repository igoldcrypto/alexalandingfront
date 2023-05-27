import initDB from '../../helper/initDB'
import User from '../../helper/Modal/User'
import PackageHistory from '../../helper/Modal/History/PackageHistory'

initDB()

export default async (req, res) => {
  const { id } = req.body

  var findSuperUser = await User.findOne({ SponserCode: id })

  var superUserId = findSuperUser.SponserCode == "null" ? null : findSuperUser.SponserCode
  var superUserName = findSuperUser.FullName == "null" ? null : findSuperUser.FullName

  var LevelOneRightSideId = findSuperUser.RightTeamId == "null" ? "null" : findSuperUser.RightTeamId
  var LevelOneLeftSideId = findSuperUser.LeftTeamId == "null" ? "null" : findSuperUser.LeftTeamId

  if (LevelOneRightSideId !== 'null') {
    var LevelOneRightSideUser = await User.findById(LevelOneRightSideId)
    var RightSideUserName = LevelOneRightSideUser.FullName
    var RightSideUserId = LevelOneRightSideUser.SponserCode
  } else {
    RightSideUserName = 'null'
    RightSideUserId = 'null'
    LevelOneRightSideUser = 'null'
  }

  if (LevelOneLeftSideId !== 'null') {
    var LevelOneLeftSideUser = await User.findById(LevelOneLeftSideId)
    var LeftSideUserName = LevelOneLeftSideUser.FullName
    var LeftSideUserId = LevelOneLeftSideUser.SponserCode
  } else {
    LeftSideUserName = 'null'
    LeftSideUserId = 'null'
    LevelOneLeftSideUser = 'null'
  }




  if (LevelOneLeftSideUser !== 'null') {
    if (LevelOneLeftSideUser.LeftTeamId !== 'null') {
      const fName = await User.findById(LevelOneLeftSideUser.LeftTeamId)
      var leftSideId1 = fName.FullName
    } else {
      leftSideId1 = 'null'
    }

    if (LevelOneLeftSideUser.RightTeamId !== 'null') {
      const f2Name = await User.findById(LevelOneLeftSideUser.RightTeamId)
      var RightSideId2 = f2Name.FullName

    } else {
      RightSideId2 = 'null'
    }


    var leftSideName1 = LevelOneLeftSideUser.LeftTeamName
    var RightSideName2 = LevelOneLeftSideUser.RightTeamName
  } else {
    leftSideName1 = 'null'
    leftSideId1 = 'null'
    RightSideName2 = 'null'
    RightSideId2 = 'null'
  }

  if (LevelOneRightSideUser !== 'null') {
    if (LevelOneRightSideUser.LeftTeamId !== 'null') {
      const fName = await User.findById(LevelOneRightSideUser.LeftTeamId)

      var AnotherLeftSideName2 = fName.RightTeamName
      var AnotherLeftSideId = fName.FullName
    } else {
      AnotherLeftSideName2 = 'null'
      AnotherLeftSideId = 'null'
    }

    if (LevelOneRightSideUser.RightTeamId !== 'null') {
      const f2Name = await User.findById(LevelOneRightSideUser.RightTeamId)

      var AnotherRightSideId = f2Name.FullName
      var AnotherRightSideName = f2Name.LeftTeamName
    } else {
      AnotherRightSideId = 'null'
      AnotherRightSideName = 'null'
    }
  } else {
    AnotherRightSideName = 'null'
    AnotherRightSideId = 'null'
    AnotherLeftSideName2 = 'null'
    AnotherLeftSideId = 'null'
  }

  // Third Step Line


  if (LevelOneLeftSideUser.LeftTeamId !== 'null' && LevelOneLeftSideUser.LeftTeamId !== undefined) {


    var fUserData1 = await User.findById(LevelOneLeftSideUser.LeftTeamId)


    if (fUserData1.LeftTeamId !== "null") {

      var firstLeftKaLeftName = "null"
      var firstLeftKaLeftSponser = "null"

      var againLeftUpper = await User.findById(fUserData1.LeftTeamId)

      firstLeftKaLeftName = againLeftUpper.FullName
      firstLeftKaLeftSponser = againLeftUpper.SponserCode
    }


    var firstLeftKaRightName = "null"
    var firstLeftKaRightSponser = "null"

    if (fUserData1.RightTeamId !== "null") {
      var againRightUpper = await User.findById(fUserData1.RightTeamId)


      firstLeftKaRightName = againRightUpper.FullName
      firstLeftKaRightSponser = againRightUpper.SponserCode

    }







    var OneLeftLineName = fUserData1.LeftTeamName









    var OneLeftLineId = fUserData1.LeftTeamId

    var OneRightLineName = fUserData1.RightTeamName
    var OneRightLineId = fUserData1.RightTeamId
  } else {
    OneLeftLineName = 'null'
    OneLeftLineId = 'null'
    OneRightLineName = 'null'
    OneRightLineId = 'null'
  }


  if (LevelOneLeftSideUser.RightTeamId !== 'null' && LevelOneLeftSideUser.RightTeamId !== undefined) {
    var fUserData2 = await User.findById(LevelOneLeftSideUser.RightTeamId)





    if (fUserData2.LeftTeamId !== "null") {

      var SecLeftKaLeftName = "null"
      var SecLeftKaLeftSponser = "null"

      var againLeftUpper = await User.findById(fUserData2.LeftTeamId)

      SecLeftKaLeftName = againLeftUpper.FullName
      SecLeftKaLeftSponser = againLeftUpper.SponserCode
    }


    var SecLeftKaRightName = "null"
    var SecLeftKaRightSponser = "null"

    if (fUserData2.RightTeamId !== "null") {
      var againRightUpper = await User.findById(fUserData2.RightTeamId)



      SecLeftKaRightName = againRightUpper.FullName
      SecLeftKaRightSponser = againRightUpper.SponserCode

    }

    var TwoLeftLineName = fUserData2.LeftTeamName
    var TwoLeftLineId = fUserData2.SponserCode

    var TwoRightLineName = fUserData2.RightTeamName
    var TwoRightLineId = fUserData2.RightTeamId
  } else {
    TwoLeftLineName = 'null'
    TwoLeftLineId = 'null'
    TwoRightLineName = 'null'
    TwoRightLineId = 'null'
  }


  if (LevelOneRightSideUser.LeftTeamId !== 'null' && LevelOneRightSideUser.LeftTeamId !== undefined) {
    var fUserData3 = await User.findById(LevelOneRightSideUser.LeftTeamId)


    var ThirdLeftKaLeftName = "null"
    var ThirdLeftKaLeftSponser = "null"

    if (fUserData3.LeftTeamId !== "null") {


      var againLeftUpper = await User.findById(fUserData3.LeftTeamId)

      ThirdLeftKaLeftName = againLeftUpper.FullName
      ThirdLeftKaLeftSponser = againLeftUpper.SponserCode
    }


    var ThirdLeftKaRightName = "null"
    var ThirdLeftKaRightSponser = "null"

    if (fUserData3.RightTeamId !== "null") {
      var againRightUpper = await User.findById(fUserData3.RightTeamId)


      ThirdLeftKaRightName = againRightUpper.FullName
      ThirdLeftKaRightSponser = againRightUpper.SponserCode

    }


    var ThreeLeftLineName = fUserData3.LeftTeamName
    var ThreeLeftLineId = fUserData3.SponserCode

    var ThreeRightLineName = fUserData3.RightTeamName
    var ThreeRightLineId = fUserData3.RightTeamId
  } else {
    ThreeLeftLineName = 'null'
    ThreeLeftLineId = 'null'
    ThreeRightLineName = 'null'
    ThreeRightLineId = 'null'
  }



  if (LevelOneRightSideUser.RightTeamId !== 'null' && LevelOneRightSideUser.RightTeamId !== undefined) {
    var fUserData4 = await User.findById(LevelOneRightSideUser.RightTeamId)

    var FourLeftKaLeftName = "null"
    var FourLeftKaLeftSponser = "null"

    if (fUserData4.LeftTeamId !== "null") {


      var againLeftUpper = await User.findById(fUserData4.LeftTeamId)

      FourLeftKaLeftName = againLeftUpper.FullName
      FourLeftKaLeftSponser = againLeftUpper.SponserCode
    }


    var FourLeftKaRightName = "null"
    var FourLeftKaRightSponser = "null"

    if (fUserData4.RightTeamId !== "null") {
      var againRightUpper = await User.findById(fUserData4.RightTeamId)

      FourLeftKaRightName = againRightUpper.FullName
      FourLeftKaRightSponser = againRightUpper.SponserCode

    }


    var FourLeftLineName = fUserData4.LeftTeamName
    var FourLeftLineId = fUserData4.SponserCode

    var FourRightLineName = fUserData4.RightTeamName
    var FourRightLineId = fUserData4.RightTeamId
  } else {
    FourLeftLineName = 'null'
    FourLeftLineId = 'null'
    FourRightLineName = 'null'
    FourRightLineId = 'null'
  }





  // findding Active Package



  if (superUserId !== "null") {
    var findUserName1 = await User.findOne({SponserCode:superUserId})
    var findPackageForUser1 = await PackageHistory.findOne({PackageOwner:findUserName1._id})
  }

// First Level

  if (LeftSideUserId !== "null") {
    var findUserName2 = await User.findOne({SponserCode:LeftSideUserId})
    var findPackageForUser2 = await PackageHistory.findOne({PackageOwner:findUserName2._id})
  }


  if (RightSideUserId !== "null") {
    var findUserName3 = await User.findOne({SponserCode:RightSideUserId})
    var findPackageForUser3 = await PackageHistory.findOne({PackageOwner:findUserName3._id})
  }

// Second Level

  if (leftSideName1 !== "null") {
    var findUserName4 = await User.findOne({SponserCode:leftSideName1})
    var findPackageForUser4 = await PackageHistory.findOne({PackageOwner:findUserName4._id})
  }
  if (RightSideName2 !== "null") {
    var findUserName5 = await User.findOne({SponserCode:RightSideName2})
    var findPackageForUser5 = await PackageHistory.findOne({PackageOwner:findUserName5._id})
  }
  if (AnotherLeftSideName2 !== "null") {
    var findUserName6 = await User.findOne({SponserCode:AnotherLeftSideName2})
    var findPackageForUser6 = await PackageHistory.findOne({PackageOwner:findUserName6._id})
  }
  if (AnotherRightSideName !== "null") {
    var findUserName7 = await User.findOne({SponserCode:AnotherRightSideName})
    var findPackageForUser7 = await PackageHistory.findOne({PackageOwner:findUserName7._id})
  }

  // Third Level




  if (firstLeftKaLeftSponser ) {
    console.log(firstLeftKaLeftSponser)
    var findUserName8 = await User.findOne({SponserCode:firstLeftKaLeftSponser})
    var findPackageForUser8 = await PackageHistory.findOne({PackageOwner:findUserName8._id})
  }
  if (firstLeftKaRightSponser ) {
    var findUserName9 = await User.findOne({SponserCode:firstLeftKaRightSponser})
    var findPackageForUser9 = await PackageHistory.findOne({PackageOwner:findUserName9._id})
  }
  if (SecLeftKaLeftSponser ) {
    var findUserName10 = await User.findOne({SponserCode:SecLeftKaLeftSponser})
    var findPackageForUser10 = await PackageHistory.findOne({PackageOwner:findUserName10._id})
  }
  if (SecLeftKaRightSponser ) {
    var findUserName11 = await User.findOne({SponserCode:SecLeftKaRightSponser})
    var findPackageForUser11 = await PackageHistory.findOne({PackageOwner:findUserName11._id})
  }
  if (ThirdLeftKaLeftSponser ) {
    var findUserName12 = await User.findOne({SponserCode:ThirdLeftKaLeftSponser})
    var findPackageForUser12 = await PackageHistory.findOne({PackageOwner:findUserName12._id})
  }
  if (ThirdLeftKaLeftSponser ) {
    var findUserName12 = await User.findOne({SponserCode:ThirdLeftKaLeftSponser})
    var findPackageForUser12 = await PackageHistory.findOne({PackageOwner:findUserName12._id})
  }
  if (ThirdLeftKaRightSponser ) {
    var findUserName13 = await User.findOne({SponserCode:ThirdLeftKaRightSponser})
    var findPackageForUser13 = await PackageHistory.findOne({PackageOwner:findUserName13._id})
  }
  if (FourLeftKaLeftSponser ) {
    var findUserName14 = await User.findOne({SponserCode:FourLeftKaLeftSponser})
    var findPackageForUser14 = await PackageHistory.findOne({PackageOwner:findUserName14._id})
  }
  if (FourLeftKaRightSponser ) {
    var findUserName15 = await User.findOne({SponserCode:FourLeftKaRightSponser})
    var findPackageForUser15 = await PackageHistory.findOne({PackageOwner:findUserName15._id})
  }






  res.json({
    SuperUser: {
      id: superUserId,
      userName: superUserName,
      Package:findPackageForUser1? findPackageForUser1.PackagePrice : null
    },
    FirstLevel: {
      LeftLine: {
        id: LeftSideUserId,
        userName: LeftSideUserName,
        Package:findPackageForUser2? findPackageForUser2.PackagePrice : null

        
      },
      RightLine: {
        id: RightSideUserId,
        userName: RightSideUserName,
        Package:findPackageForUser3? findPackageForUser3.PackagePrice : null

      }
    },
    SecondLeve: {
      TotalLeft: {
        LeftLine: {
          id: leftSideName1,
          userName: leftSideId1,
          Package:findPackageForUser4? findPackageForUser4.PackagePrice : null

        },
        RightLine: {
          id: RightSideName2,
          userName: RightSideId2,
          Package:findPackageForUser5? findPackageForUser5.PackagePrice : null

        }
      },
      TotalRight: {
        LeftLine: {
          id: AnotherLeftSideName2,
          userName: AnotherLeftSideId,
          Package:findPackageForUser6? findPackageForUser6.PackagePrice : null

        },
        RightLine: {
          id: AnotherRightSideName,
          userName: AnotherRightSideId,
          Package:findPackageForUser7? findPackageForUser7.PackagePrice : null

        }
      }
    },
    ThirdLevel: {
      One: {
        LeftLine: {
          id: firstLeftKaLeftSponser ? firstLeftKaLeftSponser : "null",
          userName: firstLeftKaLeftName ? firstLeftKaLeftName : "null",
          Package:findPackageForUser8? findPackageForUser8.PackagePrice : null

        },
        RightLine: {
          id: firstLeftKaRightSponser ? firstLeftKaRightSponser : "null",
          userName: firstLeftKaRightName ? firstLeftKaRightName : "null",
          Package:findPackageForUser9? findPackageForUser9.PackagePrice : null

        }
      },
      Two: {
        LeftLine: {
          id: SecLeftKaLeftSponser ? SecLeftKaLeftSponser : "null",
          userName: SecLeftKaLeftName ? SecLeftKaLeftName : "null",
          Package:findPackageForUser10? findPackageForUser10.PackagePrice : null

        },
        RightLine: {
          id: SecLeftKaRightSponser ? SecLeftKaRightSponser : "null",
          userName: SecLeftKaRightName ? SecLeftKaRightName : "null",
          Package:findPackageForUser11? findPackageForUser11.PackagePrice : null

        }
      },
      Three: {
        LeftLine: {
          id: ThirdLeftKaLeftSponser ? ThirdLeftKaLeftSponser : "null",
          userName: ThirdLeftKaLeftName ? ThirdLeftKaLeftName : "null",
          Package:findPackageForUser12? findPackageForUser12.PackagePrice : null

        },
        RightLine: {
          id: ThirdLeftKaRightSponser ? ThirdLeftKaRightSponser : "null",
          userName: ThirdLeftKaRightName ? ThirdLeftKaRightName : "null",
          Package:findPackageForUser13? findPackageForUser13.PackagePrice : null

        }
      },
      Four: {
        LeftLine: {
          id: FourLeftKaLeftSponser ? FourLeftKaLeftSponser : "null",
          userName: FourLeftKaLeftName ? FourLeftKaLeftName : "null",
          Package:findPackageForUser14? findPackageForUser14.PackagePrice : null

        },
        RightLine: {
          id: FourLeftKaRightSponser ? FourLeftKaRightSponser :"null",
          userName: FourLeftKaRightName ? FourLeftKaRightName :"null",
          Package:findPackageForUser15? findPackageForUser15.PackagePrice : null

        }
      }
    }
  })
}
