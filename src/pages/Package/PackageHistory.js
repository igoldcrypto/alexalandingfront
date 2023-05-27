import Grid from '@mui/material/Grid'
import React from 'react'
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

const PackageHistory = ({ TopUpHistory,setShowHistoryScreen }) => {
  console.log(TopUpHistory)

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant='h4'>Active Package</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography onClick={()=>setShowHistoryScreen(false)} style={{textAlign:"right",fontWeight:"bold",cursor:'pointer'}} variant='subtitle2'>Repurchase Package</Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Package Name</TableCell>
                    <TableCell align='left'>Price</TableCell>
                    
                    <TableCell align='left'>Maximum Limit</TableCell>
                    <TableCell align='left'>Alexa Tokens</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      '&:last-of-type td, &:last-of-type th': {
                        border: 0
                      }
                    }}
                  >
                    <TableCell align='left'>{TopUpHistory ? TopUpHistory[0].PackageName : ''}</TableCell>
                    <TableCell align='left'>{TopUpHistory ? TopUpHistory[0].PackagePrice : ''}</TableCell>
                    
                    <TableCell align='left'>{TopUpHistory ? TopUpHistory[0].PackageMaximumLimit + '%' : ''}</TableCell>
                    <TableCell align='left'>{TopUpHistory ? TopUpHistory[0].LykaToken : ''}</TableCell>
                   
                  </TableRow>
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
