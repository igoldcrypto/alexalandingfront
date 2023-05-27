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



  useEffect(() => {
    getDatas()
  }, [])




  const getDatas = () => {
    var data = localStorage.getItem('jwt')
    var parseData = JSON.parse(data)

    console.log(parseData._id)

    try {
      axios
        .post('/api/History/ReferalHistory', {
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

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h4'>Refer Commisions</Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>S.N.</TableCell>
                    <TableCell>AMOUNT</TableCell>
                    <TableCell align='left'>RATE</TableCell>
                    <TableCell align='left'>PACKAGE</TableCell>
                    <TableCell align='left'>THROUGH</TableCell>
                    <TableCell align='left'>DATE</TableCell>
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
                      <TableCell align='left'>{hit.ReferralCoins}</TableCell>
                      <TableCell align='left'>{hit.ReferralPercantage+"%"}</TableCell>
                      <TableCell align='left'>{hit.PackageName}</TableCell>
                      <TableCell align='left'>{hit.ReferralFrom}</TableCell>
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
