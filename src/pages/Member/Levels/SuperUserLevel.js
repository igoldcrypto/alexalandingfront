import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const SuperUserLevel = ({datas,updateData,handleClikedSuperUser}) => {
  return (
    <Grid item xs={12}>
      {
        datas ? 


        <>
        
    <div onClick={()=>handleClikedSuperUser(datas.SuperUser.userName)} style={{ textAlign: 'center',cursor:"pointer" }}>
      <img src='/activated.png' style={{ width: 80 }} alt='' />
      <Typography variant='h6'>{datas.SuperUser.id}</Typography>
      <Typography variant='h6'>( {datas.SuperUser.userName} )</Typography>
    </div>
        
        </>

        :


        <></>
      }
    <div></div>
  </Grid>
  )
}

export default SuperUserLevel