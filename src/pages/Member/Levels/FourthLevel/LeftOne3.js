import React from 'react'
import Typography from '@mui/material/Typography'


const LeftOne3 = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.ThirdLevel.Three.LeftLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ?

          <>
            <img src={datas.ThirdLevel.Three.LeftLine.userName == "null" ? '/empltyplace.png' :!datas.ThirdLevel.Three.LeftLine.Package ? "/notactivated.png":  "/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>{datas.ThirdLevel.Three.LeftLine.userName == "null" ? "Vacant" : datas.ThirdLevel.Three.LeftLine.userName}</Typography>
            {
              datas.ThirdLevel.Three.LeftLine.userName == "null" ?

                <></>
                :

                <Typography variant='h6'>12</Typography>

            }

          </>

          :


          <></>
      }
    </div>
  )
}

export default LeftOne3