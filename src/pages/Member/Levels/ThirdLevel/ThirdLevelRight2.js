import React from 'react'
import Typography from '@mui/material/Typography'


const ThirdLevelRight2 = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.SecondLeve.TotalRight.RightLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ?


          <>
            <img src={datas.SecondLeve.TotalRight.RightLine.userName == "null" ? '/empltyplace.png' : datas.SecondLeve.TotalRight.RightLine.Package ?  "/notactivated.png": "/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>{datas.SecondLeve.TotalRight.RightLine.userName == "null" ? "Vacant" : datas.SecondLeve.TotalRight.RightLine.userName}</Typography>
            {
              datas.SecondLeve.TotalRight.RightLine.userName == "null" ?
                <></>
                :
                <Typography variant='h6'>7</Typography>
            }

          </>

          :


          <></>
      }
    </div>
  )
}

export default ThirdLevelRight2