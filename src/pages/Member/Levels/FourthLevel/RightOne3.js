import React from 'react'
import Typography from '@mui/material/Typography'

const RightOne3 = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.ThirdLevel.Three.RightLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ?


          <>

            <img src={datas.ThirdLevel.Three.RightLine.userName == "null" ? '/empltyplace.png' :!datas.ThirdLevel.Three.RightLine.Package ? "/notactivated.png" :  "/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>{datas.ThirdLevel.Three.RightLine.userName == "null" ? "Vacant" : datas.ThirdLevel.Three.RightLine.userName}</Typography>
            {
              datas.ThirdLevel.Three.RightLine.userName == "null" ?
                <></>
                :
                <Typography variant='h6'>13</Typography>

            }

          </>

          :


          <></>
      }
    </div>
  )
}

export default RightOne3
