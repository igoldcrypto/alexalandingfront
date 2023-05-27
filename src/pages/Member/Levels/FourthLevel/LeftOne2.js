import React from 'react'
import Typography from '@mui/material/Typography'

const LeftOne2 = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.ThirdLevel.Two.LeftLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ?

          <>

            <img src={datas.ThirdLevel.Two.LeftLine.userName == "null" ? '/empltyplace.png' :
            !datas.ThirdLevel.Two.LeftLine.Package ? "/notactivated.png" : "/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>{datas.ThirdLevel.Two.LeftLine.userName == "null" ? "Vacant" : datas.ThirdLevel.Two.LeftLine.userName}</Typography>

            {
              datas.ThirdLevel.Two.LeftLine.userName == "null" ?

                <></>
                :

                <Typography variant='h6'>10</Typography>

            }

          </>


          :


          <></>
      }


    </div>
  )
}

export default LeftOne2