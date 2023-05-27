import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import SuperUserLevel from '../Levels/SuperUserLevel'
import LeftLine from '../Levels/SecondLevel/LeftLine'
import RightLine from '../Levels/SecondLevel/RightLine'
import ThirdLevelLeft from '../Levels/ThirdLevel/ThirdLevelLeft'
import ThirdLevelRight from '../Levels/ThirdLevel/ThirdLevelRight'
import ThirdLevelLeft2 from '../Levels/ThirdLevel/ThirdLevelLeft2'
import ThirdLevelRight2 from '../Levels/ThirdLevel/ThirdLevelRight2'
import LeftOne1 from '../Levels/FourthLevel/LeftOne1'
import RightOne1 from '../Levels/FourthLevel/RightOne1'
import LevelTwo2 from '../Levels/FourthLevel/RightOne2'
import LeftOne2 from '../Levels/FourthLevel/LeftOne2'
import LeftOne3 from '../Levels/FourthLevel/LeftOne3'
import RightOne3 from '../Levels/FourthLevel/RightOne3'
import LeftOne4 from '../Levels/FourthLevel/LeftOne4'
import RightOne4 from '../Levels/FourthLevel/RightOne4'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Modal ,Box} from '@mui/material'



const MUITable = () => {

  const [packageId, setPackageId] = useState('63a09f41f5579f410045984c')
  const [price, setPrice] = useState('')
  const [datas, setDatas] = useState('')
  const [showHistoryScreen, setShowHistoryScreen] = useState(null)
  const [TopUpHistory, setTopUpHistory] = useState('')
  const [idName, setIdName] = useState("")
  const [openModal, setOpenModal] = useState(false)



  const [userName, setUserName] = useState("")
  const [userLoginId, setUserLoginId] = useState("")
  const [sponserId, setSponserId] = useState("")
  const [LeftPpl, setLeftPpl] = useState("")
  const [rightPpl, setRightPpl] = useState("")
  const [LeftPplBusiness, setLeftPplBusiness] = useState("")
  const [RightPplBusiness, setRightPplBusiness] = useState("")
  const [leftDirectBusiness, setLeftDirectBusiness] = useState("")
  const [rightDirectBusiness, setRightDirectBusiness] = useState("")

  const router = useRouter()

  useEffect(() => {
    if(!router.isReady) return;
   

      axios.post("/api/ChartGeograph", {
        id: router.query.id
      }).then((acc) => {
        console.log(acc.data)
        setDatas(acc.data)
      })
        .catch((err) => {
          console.log(err)
        })

  }, [router.isReady])



  const handleClikedSuperUser = (ids) =>{

    setUserName("")
          setUserLoginId("")
          setSponserId("")
          setLeftPpl("")
          setRightPpl("")
          setLeftPplBusiness("")
          setRightPplBusiness("")
          setLeftDirectBusiness("")
          setRightDirectBusiness("")

      console.log(ids)

      setOpenModal(true)


      try {


        axios.post("/api/TreeData",{
          userName:ids
        })
        .then((acc)=>{
          console.log(acc.data)

          setUserName(acc.data.UserName)
          setUserLoginId(acc.data.MemberLogin_Id)
          setSponserId(acc.data.SponserId)
          setLeftPpl(acc.data.LeftPeople)
          setRightPpl(acc.data.RightPeople)
          setLeftPplBusiness(acc.data.LeftPeopleBusiness)
          setRightPplBusiness(acc.data.RightPeopleBusiness)
          setLeftDirectBusiness(acc.data.DirecrLeftTamBusiness)
          setRightDirectBusiness(acc.data.DirectRightTeamBusiness)




        })
        .catch((err)=>{
          console.log(err)
        })




        
      } catch (error) {
        console.log(error)
      }











  }


  return (
    <>



<Modal
  open={openModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box style={{backgroundColor:"white",width:"50%",marginTop:150,marginLeft:350,paddingBottom:40}}>

    <div onClick={()=>setOpenModal(false)} style={{textAlign:"right",marginRight:20,marginTop:30,cursor:"pointer"}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" style={{marginTop:10,color:'red'}} fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
    </div>

    <div style={{marginLeft:20}}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      UserName : {userName}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Login Id : {userLoginId}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Sponser Id : {sponserId}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Left Team : {LeftPpl}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Right Team : {rightPpl}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Left Team Business : {LeftPplBusiness}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Right Team Business : {RightPplBusiness}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Left Direct Team Business : {leftDirectBusiness}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Right Direct Team Business : {rightDirectBusiness}
    </Typography>
    </div>
   






  </Box>
</Modal>





      {
        datas ?

          <Grid container>
            <Grid item xs={12}>
              <Typography variant='h4'>Member/Genealogy</Typography>
            </Grid>

            <SuperUserLevel handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
            <Grid item xs={12}>
              <div style={{ alignSelf: "center", alignItems: "center", alignContent: "center" }}>
                <img className="center" src="/lines.png" alt="" />
              </div>
            </Grid>

            <Grid item xs={6}>
              <LeftLine handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
              <Grid item xs={12}>
                <div style={{ alignSelf: "center", alignItems: "center", alignContent: "center" }}>
                  <img className="center" style={{ width: "60%" }} src="/lines.png" alt="" />
                </div>
              </Grid>
              <div style={{ marginTop: 30 }}>
                <Grid container>
                  <Grid item xs={6}>
                    <ThirdLevelLeft handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                    <Grid item xs={12}>
                      <div style={{ alignSelf: "center", alignItems: "center", alignContent: "center" }}>
                        <img className="center" style={{ width: "60%" }} src="/lines.png" alt="" />
                      </div>
                    </Grid>
                    <div style={{ marginTop: 40 }}>
                      <Grid container>
                        <Grid item xs={6}>
                          <LeftOne1 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                          <div></div>
                        </Grid>
                        <Grid item xs={6}>
                          <RightOne1 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                          <div></div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <ThirdLevelRight handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                    <Grid item xs={12}>
                      <div style={{ alignSelf: "center", alignItems: "center", alignContent: "center" }}>
                        <img className="center" style={{ width: "60%" }} src="/lines.png" alt="" />
                      </div>
                    </Grid>
                    <div style={{ marginTop: 40 }}>
                      <Grid container>
                        <Grid item xs={6}>
                          <LeftOne2 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />

                          <div></div>
                        </Grid>
                        <Grid item xs={6}>
                          <LevelTwo2 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                          <div></div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={6}>
              <RightLine handleClikedSuperUser={handleClikedSuperUser} datas={datas} />

              <Grid item xs={12}>
                <div style={{ alignSelf: "center", alignItems: "center", alignContent: "center" }}>
                  <img className="center" style={{ width: "60%" }} src="/lines.png" alt="" />
                </div>
              </Grid>
              <div style={{ marginTop: 30 }}>
                <Grid container>
                  <Grid item xs={6}>
                    <ThirdLevelLeft2 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                    <Grid item xs={12}>
                      <div style={{ alignSelf: "center", alignItems: "center", alignContent: "center" }}>
                        <img className="center" style={{ width: "60%" }} src="/lines.png" alt="" />
                      </div>
                    </Grid>
                    <div style={{ marginTop: 40 }}>
                      <Grid container>
                        <Grid item xs={6}>
                          <LeftOne3 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />

                          <div></div>
                        </Grid>
                        <Grid item xs={6}>
                          <RightOne3 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                          <div></div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <ThirdLevelRight2 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                    <Grid item xs={12}>
                      <div style={{ alignSelf: "center", alignItems: "center", alignContent: "center" }}>
                        <img className="center" style={{ width: "60%" }} src="/lines.png" alt="" />
                      </div>
                    </Grid>
                    <div style={{ marginTop: 40 }}>
                      <Grid container>
                        <Grid item xs={6}>
                          <LeftOne4 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />

                          <div></div>
                        </Grid>
                        <Grid item xs={6}>
                          <RightOne4 handleClikedSuperUser={handleClikedSuperUser} datas={datas} />
                          <div></div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>

          :


          <></>
      }
    </>
  )
}

export default MUITable
