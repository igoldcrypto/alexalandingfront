import React from 'react'
import Typography from '@mui/material/Typography'


const leftOne4 = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.ThirdLevel.Four.LeftLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ?

          <>
            <img src={datas.ThirdLevel.Four.LeftLine.userName == "null" ? '/empltyplace.png' : !datas.ThirdLevel.Four.LeftLine.Package ? "/notactivated.png" :"/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>{datas.ThirdLevel.Four.LeftLine.userName == "null" ? "Vacant" : datas.ThirdLevel.Four.LeftLine.userName}</Typography>
            {
              datas.ThirdLevel.Four.LeftLine.userName == "null" ?
                <></>
                :
                <Typography variant='h6'>14</Typography>

            }</>


          :


          <></>
      }

    </div>
  )
}

export default leftOne4