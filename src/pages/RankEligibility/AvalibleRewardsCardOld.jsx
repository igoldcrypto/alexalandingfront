import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import axios from 'axios'

const AvalibleRewardsCard = ({userCurrentWallet,teamCount}) => {

    const [datas, setDatas] = useState("")



    console.log("user wallet is ==> "+userCurrentWallet)



    console.log("my team count is ===> "+teamCount)



    useEffect(() => {

        getData() 
        
        
    }, [])
    
    
    const getData = () =>{



    let getData = localStorage.getItem("jwt")
    let parseIt = JSON.parse(getData)

    try {
        

        axios.post("/api/RankEligibility/SeachForActivePackage", {
            id: parseIt._id
        })
            .then((acc) => {
                console.log(acc.data)
                setDatas(acc.data)
            })
            .catch((err) => {
                console.log(err)
            })


    } catch (error) {
        console.log(error)
    }

}

    const handleButtonPress = (Reward,TotalBusiness) => {

        const ids = localStorage.getItem("jwt")
        const parsed = JSON.parse(ids)
    
    
        try {
    
    
          axios.post("/api/RankEligibility/ClaimReward",{
            id:parsed._id,
            ClaimedReward:Reward,
            TotalBusiness:TotalBusiness
          })
          .then((acc)=>{
            console.log(acc.data)
            window.alert(acc.data.message)
        getData() 

          })
          .catch((err)=>{
            console.log(err)
          })
    
    
    
    
          
        } catch (error) {
          console.log(error)
        }
    
    
    
    
    
    
    
      }








    return (
        <div>


            <Grid container spacing={6}>




                {
                    datas && datas.ClaimedCard.map((hit, index) => {
                        return <Grid key={index} item xs={4}>
                            <Card style={{ backgroundColor: "#05A4A6", paddingBottom: 20 }} >
                               

                                <h6 style={{ textAlign: "center", color: "black", marginTop: 20, fontSize: 20 }}>Team Business : {hit.RankEligibilityDirectTeamBusiness}</h6>
                                <h6 style={{ textAlign: "center", color: "black", marginTop: -40, fontSize: 20 }}>Reward : {hit.RankEligibilityReward}</h6>
                                <h6 style={{ textAlign: "center", color: "black", marginTop: -40, fontSize: 20 }}>Team : {hit.RankEligibilityTeam}</h6>
                                <div style={{ textAlign: "center" }}>
                                    <Button disabled style={{ backgroundColor: "green", color: "white", fontWeight: "bolder" }} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                                        Clailmed
                                    </Button>
                                </div>
                            </Card>
                        </Grid>
                    })
                }
                {
                    
                    datas && datas.PendingLock.map((hit, index) => {
                        return <Grid key={index} item xs={4}>
                            <Card style={{ backgroundColor: "#05A4A6", paddingBottom: 20 }} >
                               
                                <h6 style={{ textAlign: "center", color: "black", marginTop: 20, fontSize: 20 }}> Team Business : {hit.RankEligibilityDirectTeamBusiness}</h6>
                                <h6 style={{ textAlign: "center", color: "black", marginTop: -40, fontSize: 20 }}>Reward : {hit.RankEligibilityReward}</h6>
                                <h6 style={{ textAlign: "center", color: "black", marginTop: -40, fontSize: 20 }}>Team : {hit.RankEligibilityTeam}</h6>

                                <div style={{ textAlign: "center" }}>
                                    {index == 0 ?

                                    userCurrentWallet >= Number(hit.RankEligibilityDirectTeamBusiness) && teamCount >= Number(hit.RankEligibilityTeam)? 

                                        <Button onClick={()=>handleButtonPress(hit.RankEligibilityReward,hit.RankEligibilityDirectTeamBusiness)} style={{ backgroundColor: "white", color: "black", fontWeight: "bolder" }} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                                            Claim Now
                                        </Button>

                                    :




                                        <Button disabled style={{ backgroundColor: "gray", color: "black", fontWeight: "bolder" }} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                                            Claim Now
                                        </Button>


                                        :
                                        <Button disabled style={{ backgroundColor: "gray", color: "white", fontWeight: "bolder" }} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>

                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                            </svg>


                                        </Button>

                                    }
                                </div>
                            </Card>
                        </Grid>
                    })
                }

            </Grid>




        </div>
    )
}

export default AvalibleRewardsCard