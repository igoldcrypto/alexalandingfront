import React from 'react'
import Typography from '@mui/material/Typography'

const LevelTwo2 = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.ThirdLevel.Two.RightLine.userName)} style={{ textAlign: 'center' }}>

      {
        datas ?

          <>


            <img src={datas.ThirdLevel.Two.RightLine.userName == "null" ? '/empltyplace.png' : !datas.ThirdLevel.Two.RightLine.Package ? "/notactivated.png" :"/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>{datas.ThirdLevel.Two.RightLine.userName == "null" ? "Vacant" : datas.ThirdLevel.Two.RightLine.userName}</Typography>
            {
              datas.ThirdLevel.Two.RightLine.userName == "null" ?
                <></>
                :

                <Typography variant='h6'>11</Typography>

            }

          </>


          :


          <></>
      }
    </div>
  )
}

export default LevelTwo2