import React from 'react'
import Typography from '@mui/material/Typography'

const LeftLine = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.FirstLevel.LeftLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ?


          <>

            <img src={datas.FirstLevel.LeftLine.userName == "null" ? '/empltyplace.png' :!datas.FirstLevel.LeftLine.Package? "/notactivated.png":  "/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'> {datas.FirstLevel.LeftLine.userName == "null" ? "Vacant" : (datas.FirstLevel.LeftLine.userName)} </Typography>
            {
              datas.FirstLevel.LeftLine.userName == "null" ?

                <></>
                :

                <Typography variant='h6'>2</Typography>

            }

          </>


          :


          <></>
      }
    </div>
  )
}

export default LeftLine