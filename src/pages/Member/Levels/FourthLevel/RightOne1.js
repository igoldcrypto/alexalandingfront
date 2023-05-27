import React from 'react'
import Typography from '@mui/material/Typography'


const RightOne1 = ({ datas, handleClikedSuperUser }) => {
  return (
    <div onClick={() => handleClikedSuperUser(datas.ThirdLevel.One.RightLine.userName)} style={{ textAlign: 'center' }}>
      {
        datas ?

          <>


            <img src={datas.ThirdLevel.One.RightLine.userName == "null" ? '/empltyplace.png' : !datas.ThirdLevel.One.RightLine.Package ? "/notactivated.png" : "/activated.png"} style={{ width: 80 }} alt='' />
            <Typography variant='h6'>{datas.ThirdLevel.One.RightLine.userName == "null" ? "Vacant" : datas.ThirdLevel.One.RightLine.userName}</Typography>
            {
              datas.ThirdLevel.One.RightLine.userName == "null" ?

                <></>
                :

                <Typography variant='h6'>9</Typography>

            }

          </>


          :


          <></>
      }
    </div>
  )
}

export default RightOne1