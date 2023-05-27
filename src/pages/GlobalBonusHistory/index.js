// /api/History/GlobalBonusHis
import Grid from '@mui/material/Grid'
import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TableBasic from 'src/views/tables/TableBasic'

// table imports

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import axios from 'axios'

const PackageHistory = () => {

  const [datas, setDatas] = useState("")
  const [data, setData] = useState("")



  useEffect(() => {
    getDatas()
    getDat()
  }, [])




  const getDatas = () => {
    var data = localStorage.getItem('jwt')
    var parseData = JSON.parse(data)

    console.log(parseData._id)

    try {
      axios
        .post('/api/History/GlobalBonusHis', {
          id: parseData._id
        })
        .then(acc => {
          console.log(acc.data)
          setDatas(acc.data)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }



  

  const getDat = () => {
    var data = localStorage.getItem('jwt')
    var parseData = JSON.parse(data)

    console.log(parseData._id)

    try {
      axios
        .post('/api/GlobalPoolBusiness/CheckHeadDatas', {
          id: parseData._id
        })
        .then(acc => {
          console.log(acc.data)
          setData(acc.data)
    
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }










  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h4'>Global Bonus</Typography>
        </Grid>




        <Grid item xs={4}>
          <Card style={{backgroundColor:"white",padding:10}}>

            <Typography variant='h5' style={{textAlign:"center",marginBottom:10,color:"black",fontWeight:"bolder"}}>Company Business</Typography>
            <Typography variant='h4' style={{textAlign:"center",color:"black"}}>{data?data.companyBusiness:0}$</Typography>
            <Typography variant='subtitle2' style={{textAlign:"center",marginTop:10,color:"#945AFD",fontWeight:"bold"}}>{data&&data.fromDate} - {data&&data.toDate}</Typography>

          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{backgroundColor:"white",padding:10}}>

            <Typography variant='h5' style={{textAlign:"center",marginBottom:10,color:"black",fontWeight:"bolder"}}>Rank Eligibility</Typography>
            <Typography variant='h4' style={{textAlign:"center",color:"black"}}>{data?data.memberEligibleForRank:0} Person</Typography>
            <Typography variant='subtitle2' style={{textAlign:"center",marginTop:10,color:"#945AFD",fontWeight:"bold"}}>{data&&data.packageStar}</Typography>

          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{backgroundColor:"white",padding:10}}>

            <Typography variant='h5' style={{textAlign:"center",marginBottom:10,color:"black",fontWeight:"bolder"}}>Estimated Token</Typography>
            <Typography variant='h4' style={{textAlign:"center",color:"black"}}>{data?data.estimatedToken:0}$</Typography>
            <Typography variant='subtitle2' style={{textAlign:"center",marginTop:10,color:"#945AFD",fontWeight:"bold"}}>{data&&data.fromDate} - {data&&data.toDate}</Typography>

          </Card>
        </Grid>









        <Grid item xs={12}>
          <Card>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>S.N.</TableCell>
                    <TableCell>Coins</TableCell>
                    <TableCell align='left'>Percantage</TableCell>
                    <TableCell align='left'>Company Business</TableCell>
                    <TableCell align='left'>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    datas &&



                    datas.map((hit,index)=>{
                      return  <TableRow key={hit._id}
                      sx={{
                        '&:last-of-type td, &:last-of-type th': {
                          border: 0
                        }
                      }}
                    >
                  
  
                      <TableCell align='left'>{index+1}</TableCell>
                      <TableCell align='left'>{hit.Coins}</TableCell>
                      <TableCell align='left'>{hit.Percantage+"%"}</TableCell>                   
                      <TableCell align='left'>{hit.CompanyBusiness}</TableCell>                   
                      <TableCell align='left'>{hit.createdAt.slice(0,10)}</TableCell>                   
                     
                    </TableRow>
                    })
                  }
                 
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default PackageHistory
