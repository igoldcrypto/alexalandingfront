import React from 'react'
import Typography from '@mui/material/Typography'

const LeftOne1 = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.ThirdLevel.One.LeftLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ?

          <>

            <img src={datas.ThirdLevel.One.LeftLine.userName == 'null' ? '/empltyplace.png' :
            !datas.ThirdLevel.One.LeftLine.Package ?  "/notactivated.png": "/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>
              {datas.ThirdLevel.One.LeftLine.userName == 'null' ? 'Vacant' : datas.ThirdLevel.One.LeftLine.userName}
            </Typography>
            {datas.ThirdLevel.One.LeftLine.userName == 'null' ? <></> : <Typography variant='h6'>8</Typography>}

          </>


          :

          <>


          </>
      }
    </div>
  )
}

export default LeftOne1
