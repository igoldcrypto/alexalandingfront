import React from 'react'
import Typography from '@mui/material/Typography'

const RightLine = ({datas,handleClikedSuperUser}) => {
  
  return (
    <div onClick={()=>handleClikedSuperUser(datas.FirstLevel.RightLine.userName)} style={{ textAlign: 'center' }}>

      {
        datas ?


        <>
        
        <img src={datas.FirstLevel.RightLine.userName == "null" ?  '/empltyplace.png' : !datas.FirstLevel.RightLine.Package ? "/notactivated.png" : "/activated.png"} style={{ width: 80 }} alt='' />
        <Typography variant='h6'>{datas.FirstLevel.RightLine.userName == "null" ? "Vacant":datas.FirstLevel.RightLine.userName}</Typography>
        {
          datas.FirstLevel.RightLine.userName == "null" ? 
    
          <></>
          :
    
          <Typography variant='h6'>3</Typography>
    
        }
        </>

        :


        <></>
      }
  </div>
  )
}

export default RightLine