// ** React Imports
import { useState,useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = ({datas,dashData}) => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [sides, setSides] = useState("Left")
  const [leftCode, setLeftCode] = useState("")

  console.log(datas)

  useEffect(() => {

    setLeftCode(`https://alexapro.vercel.app/?RferCode=${datas.SponserCode}&Posi=${sides}`)
    
  
   
  }, [])
  

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  const chnageSide = () =>{
    console.log("clicked")

    if (sides == "Left") {
      setSides("Right")
    }
    if (sides == "Right") {
      setSides("Left")
    }


  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
        

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Username' value={datas.UserName}  />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Name' value={datas.FullName} placeholder='John Doe' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder='johnDoe@example.com'
             value={datas.EmailId}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
            <TextField
              fullWidth
              type='text'
              label='Position'
              placeholder='Your Position'
             value={datas.Position}
            />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
            <TextField
              fullWidth
              type='number'
              label='Contact Number'
              placeholder='Contact Number'
             value={datas.ContactNumber}
            />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              fullWidth
              type='number'
              label='Main Wallet'
              placeholder='Main Wallet'
             value={Number(dashData.AvaibleTokens)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              fullWidth
              type='number'
              label='Sponser Code'
              placeholder='Sponser Code'
             value={datas.SponserCode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              fullWidth
              type='text'
              label='Earning Percantage'
              placeholder='Earning Percantage'
             value={datas.UserEarnPercantage}
            />
          </Grid>

        </Grid>
      </form>


<div style={{marginTop:30}}>

    






          <Grid item xs={10} sm={6}>
          <FormControl fullWidth>
            <TextField
            contentEditable={false}
              fullWidth
              type='text'
              label='Refer Code'
              placeholder='Refer Code'
             value={`https://alexapro.vercel.app?RferCode=${datas.SponserCode}&Posi=${sides}`}
            />

            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <h5 style={{cursor:"pointer"}} onClick={chnageSide}>Change Side
        

          </h5>
          </Grid>












</div>
    </CardContent>
  )
}

export default TabAccount
