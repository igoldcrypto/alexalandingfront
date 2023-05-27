// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import ProgressBar from '@ramonak/react-progress-bar'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { Line, Circle } from 'rc-progress';


const WeeklyOverview = () => {
  const [percantage, setPercantage] = useState(0)
  const [crWall, setCrWall] = useState(0)
  const [yourReward, setYourReward] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const jwt = localStorage.getItem('jwt')
      const parsedData = JSON.parse(jwt)
      console.log("this is is => "+parsedData._id)

      axios
        .post('/api/checkPercantage', {
          id: parsedData._id
        })
        .then(acc => {
          console.log("below ==> ")
          console.log(acc.data)
          setPercantage(acc.data.goal)
          setCrWall(acc.data.crWall)
          setYourReward(acc.data.reward)



          console.log("current value is => "+acc.data.crWall)
          console.log("max goal is => "+acc.data.goal)
          console.log("reward got is => "+acc.data.reward)





        })
        .catch(err => {
          console.log(err)
        })
    }
    getData()
  }, [])

  return (
    <Card>
      <CardHeader
        title={`Rank Eligibility `}
        // title={`Rank Eligibility ${((Number(crWall)/Number(percantage))*100).toFixed(2)}%`}
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <div style={{ paddingBottom: 40, marginTop: 10 }}>
        <Line  percent={(Number(crWall)/Number(percantage))*100} strokeWidth={4} strokeColor="#9357FD" />
          {/* <ProgressBar className="wrapper"   completed={crWall} maxCompleted={percantage} /> */}
      <Grid container spacing={6}>
          <Grid item xs={6}>
          <p>0</p>
            </Grid>
          <Grid item xs={6}>
          <p style={{textAlign:"right"}}>{percantage?percantage:""}</p>
            </Grid>
</Grid>


<h2 style={{textAlign:"center",color:"#9357FD"}}>FINISH {percantage?percantage:""}$ GOAL & GET {yourReward}$</h2>
        </div>
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
