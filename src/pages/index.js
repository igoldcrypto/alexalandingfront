import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import axios from 'axios'
import { Input, Button } from '@mui/material'
import AnalyticsTransactionsCard from './AnalyticsTransactionsCard'



const Dashboard = () => {

  const data = [
    {
      stats: '1%',
      title: 'Self',
      trendNumber: '+38%',
      chipColor: 'primary',
      chipText: 'Year of 2022',
      src: 'http://localhost:3001/images/cards/pose_f9.png'
    },
    {
      stats: '10',
      trend: 'negative',
      title: 'Daily Staking',
      trendNumber: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      src: 'http://localhost:3001/images/cards/pose_m18.png'
    },
    {
      stats: '24.5k',
      trend: 'negative',
      title: 'Power Staking',
      trendNumber: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      src: 'http://localhost:3001/images/cards/pose_m18.png'
    },
    {
      stats: '24.5k',
      trend: 'negative',
      title: 'Rebuy Bonus',
      trendNumber: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      src: 'http://localhost:3001/images/cards/pose_m18.png'
    },
    {
      stats: '24.5k',
      trend: 'negative',
      title: 'Direct',
      trendNumber: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      src: 'http://localhost:3001/images/cards/pose_m18.png'
    },
    {
      stats: '24.5k',
      trend: 'negative',
      title: 'Matching',
      trendNumber: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      src: 'http://localhost:3001/images/cards/pose_m18.png'
    },{
      stats: '24.5k',
      trend: 'negative',
      title: 'OneTime',
      trendNumber: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      src: 'http://localhost:3001/images/cards/pose_m18.png'
    },
    {
      stats: '24.5k',
      trend: 'negative',
      title: 'GlobalPool',
      trendNumber: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      src: 'http://localhost:3001/images/cards/pose_m18.png'
    }
  ]

  const [datas, setDatas] = useState("")
  const [side, setSide] = useState("Right")
  const [dashData, setDashData] = useState("")

  useEffect(() => {


    const datas = localStorage.getItem("jwt")
    const parseIt = JSON.parse(datas)
    console.log(parseIt)


    try {

      axios.post("/api/DashData", {
        id: parseIt._id
      })
        .then((acc) => {
          console.log(acc.data)
          setDashData(acc.data)
        })
        .catch((err) => {
          console.log(err)
        })


    } catch (error) {
      console.log(error)
    }





  }, [])

  return (
    <div>

      <ApexChartWrapper>


      <Grid item xs={12} md={8}>
          <AnalyticsTransactionsCard />
        </Grid>

    <br></br>
    <h1>Rewards</h1>

        <Grid container spacing={6}>

        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[1]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[2]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[3]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[4]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[5]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[6]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[7]} />
        </Grid>







          {
            dashData ?

              <Grid style={{ marginTop: 20, marginLeft: 10 }} container spacing={12}>


                <Grid item xs={12} md={4}>

                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>

                    <div style={{ textAlign: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC", marginBottom: -18 }} width={26} height={26} fill="currentColor" className="bi bi-box2-fill" viewBox="0 0 16 16">
                        <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z" />
                      </svg>
                    </div>

                    <h4 style={{ textAlign: "center" }}>Active Package</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{dashData.ActivePackage}</h3>

                  </div>

                </Grid>


                <Grid item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat", textAlign: "center" }}>

                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC", marginBottom: -18 }} width={26} height={26} fill="currentColor" className="bi bi-currency-exchange" viewBox="0 0 16 16">
                      <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
                    </svg>

                    <h4>Maximum Earning</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{dashData.MaxCaping == "No Active Package" ? "No Active Package" : Number(dashData.MaxCaping).toFixed(2)}</h3>

                  </div>

                </Grid>














                <Grid item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>

                    <div style={{ textAlign: "center" }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC", marginBottom: -18 }} width={26} height={26} fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                      </svg>

                    </div>




                    <h4 style={{ textAlign: "center" }}>Left Earnings</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{dashData.FutureIWillGet}</h3>

                  </div>

                </Grid>








                <Grid style={{ marginTop: -20 }} item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20 }}>


                    <div style={{ textAlign: "center" }}>

                      {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC", marginBottom: -18 }} width={26} height={26} fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                      </svg> */}



                      <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} style={{ color: "#07AAAC", marginBottom: -18 }} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>



                    <h4 style={{ textAlign: "center" }}>Total Earning</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>${Number(dashData.TotalEarnings).toFixed(2)}</h3>

                  </div>

                </Grid>










                <Grid style={{ marginTop: -20 }} item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20 }}>

                    <div style={{ textAlign: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC", marginBottom: -18 }} width={26} height={26} fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                      </svg>
                    </div>

                    <h4 style={{ textAlign: "center" }}>Avalible Tokens</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>${Number(dashData.AvaibleTokens).toFixed(2)}</h3>

                  </div>

                </Grid>








                <Grid item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>

                    <div style={{ textAlign: "center" }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>



                    <h4 style={{ textAlign: "center" }}>Total Withdrawal</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>0.00</h3>

                  </div>

                </Grid>

























                <Grid item xs={6} md={6}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" ,height:135}}>

                    <div style={{ textAlign: "center" }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>



                    <h4 style={{ textAlign: "center" }}>Staking Reward</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{Number(dashData.DailyStakig).toFixed(2)}</h3>

                  </div>

                </Grid>
                <Grid item xs={6} md={6}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat",height:135 }}>

                    <div style={{ textAlign: "center"}}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>



                    <h4 style={{ textAlign: "center" }}>Advance Reward</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>0.00</h3>

                  </div>

                </Grid>


















                <Grid item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>


                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Dalily Bonus</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{dashData.DailyFastBonus}</h3>

                  </div>

                </Grid>

                <Grid item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20 }}>


                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Power Staking</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{Number(dashData.PowerStaing).toFixed(2)}</h3>

                  </div>

                </Grid>
                <Grid item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20 }}>

                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Direct Reward</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{Number(dashData.DirectReward).toFixed(2)}</h3>

                  </div>

                </Grid>








                <Grid style={{ marginTop: -20 }} item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>


                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Matching Bonus</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{Number(dashData.MatcingBonus).toFixed(2)}</h3>

                  </div>

                </Grid>
                <Grid style={{ marginTop: -20 }} item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20 }}>

                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Rank Eligibilty</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{Number(dashData.RankEligibility).toFixed(2)}</h3>

                  </div>

                </Grid>
                <Grid style={{ marginTop: -20 }} item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20 }}>

                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Global Pool Bonus</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{Number(dashData.GobalPoolBonus).toFixed(2)}</h3>

                  </div>

                </Grid>




                <Grid style={{ marginTop: -20 }} item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>
                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Rebuy Bonus</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{Number(dashData.RebuyBonus).toFixed(2)}</h3>

                  </div>

                </Grid>
                <Grid style={{ marginTop: -20 }} item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20 }}>
                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Direct Team</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>{Number(dashData.DirectTeam).toFixed(2)}</h3>

                  </div>

                </Grid>







                <Grid style={{ marginTop: -20 }} item xs={12} md={4}>
                  <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20 }}>
                    <div style={{ textAlign: "center", marginTop: 20 }}>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC" }} width={26} height={26} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                      </svg>


                    </div>
                    <h4 style={{ textAlign: "center" }}>Direct Business</h4>
                    <h3 style={{ marginTop: -20, textAlign: "center" }}>${Number(dashData.DirectBusiness).toFixed(2)}</h3>

                  </div>

                </Grid>




              </Grid>

              :



              <div style={{ alignSelf: "center" }}>
                <h1 style={{ textAlign: 'center', alignSelf: "center", alignContent: "center" }}>Loading...</h1>
              </div>
          }





        </Grid>
      </ApexChartWrapper>
    </div>
  )
}

export default Dashboard
