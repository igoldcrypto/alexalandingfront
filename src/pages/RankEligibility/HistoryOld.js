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

const History = () => {

  const [datas, setDatas] = useState("")



  useEffect(() => {


    const getDatass = () =>{

      const ids = localStorage.getItem("jwt")
      const parsedData = JSON.parse(ids)
      console.log(parsedData)


      try {
        

        axios.post("/api/History/RankEligibility",{
          id:parsedData._id
        })
        .then((acc)=>{
          console.log(acc.data)
          setDatas(acc.data)
        })
        .catch((err)=>{
          console.log(err)
        })


      } catch (error) {
        console.log(error)
      }




    }

    getDatass()
    
  
  
  }, [])
  
  return (

    <div style={{marginTop:50}}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h4'>Rank Eligibity History</Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>S.N.</TableCell>
                    <TableCell>My Sponser Code</TableCell>
                    <TableCell align='left'>My Email</TableCell>
                    <TableCell align='left'>Earned From Sponser</TableCell>
                    <TableCell align='left'>Earned From Email</TableCell>
                    <TableCell align='left'>Business Amount</TableCell>
                    <TableCell align='left'>Purchased Package</TableCell>
                    <TableCell align='left'>Package Price</TableCell>
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
                      <TableCell align='left'>{hit.UpperLineUserSponser}</TableCell>
                      <TableCell align='left'>{hit.UpperLineUserEmail}</TableCell>
                      <TableCell align='left'>{hit.DownLineUserSponser}</TableCell>
                      <TableCell align='left'>{hit.DownLineUserEmail}</TableCell>
                      <TableCell align='left'>{hit.BusinessAmount}$</TableCell>
                      <TableCell align='left'>{hit.PurchasedPackageName}</TableCell>
                      <TableCell align='left'>{hit.PurchasedPackagePrice}</TableCell>
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

export default History
