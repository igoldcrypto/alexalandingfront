import React from 'react'
import Typography from '@mui/material/Typography'

const ThirdLevelLeft = ({datas,handleClikedSuperUser}) => {
  return (
    <div onClick={()=>handleClikedSuperUser(datas.SecondLeve.TotalLeft.LeftLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ? 



        <>
        
        <img src={datas.SecondLeve.TotalLeft.LeftLine.userName == "null" ? '/empltyplace.png'   : !datas.SecondLeve.TotalLeft.LeftLine.Package ?  "/notactivated.png" : "/activated.png" } style={{ width: 80 }} alt='' />
        <Typography variant='h6'>{datas.SecondLeve.TotalLeft.LeftLine.userName == "null" ? "Vacant" : datas.SecondLeve.TotalLeft.LeftLine.userName}</Typography>
        {
          datas.SecondLeve.TotalLeft.LeftLine.userName == "null" ? 

          <></>
          
          :
          <Typography variant='h6'>4</Typography>

        }
        
        </>

        :


        <>
        
        
        </>
      }
                </div>
  )
}

export default ThirdLevelLeft