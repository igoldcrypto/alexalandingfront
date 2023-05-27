import React from 'react'
import Typography from '@mui/material/Typography'

const ThirdLevelRight = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.SecondLeve.TotalLeft.RightLine.userName)} style={{ textAlign: 'center' }}>

      {
        datas ?


          <>

            <img src={datas.SecondLeve.TotalLeft.RightLine.userName == 'null'
              ? '/empltyplace.png' :!datas.SecondLeve.TotalLeft.RightLine.Package ? "/notactivated.png" : "/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>
              {datas.SecondLeve.TotalLeft.RightLine.userName == 'null'
                ? 'Vacant'
                : datas.SecondLeve.TotalLeft.RightLine.userName}
            </Typography>
            {datas.SecondLeve.TotalLeft.RightLine.userName == 'null' ? <></> : <Typography variant='h6'>5</Typography>}

          </>

          :

          <></>
      }
    </div>
  )
}

export default ThirdLevelRight
