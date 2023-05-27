// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'
import axios from 'axios'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('account')
  const [datas, setDatas] = useState("")
  const [dashData, setDashData] = useState("")


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const getData = () => {
      var ids = localStorage.getItem('jwt')
      var parsedId = JSON.parse(ids)


      try {
        axios
          .post('/api/User/UserProfile', {
            id: parsedId._id
          })
          .then(acc => {
            console.log(acc.data)
            setDatas(acc.data)
          })
          .catch(err => {
            console.log(err)
          })
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])




  useEffect(() => {


    const datas = localStorage.getItem("jwt")
    const parseIt = JSON.parse(datas)
    console.log(parseIt)

     try {
      
      axios.post("/api/DashData",{
        id:parseIt._id
      })
      .then((acc)=>{
        console.log(acc.data)
        setDashData(acc.data)
      })
      .catch((err)=>{
        console.log(err)
      })


     } catch (error) {
      console.log(error)
     }




  
  }, [])





  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Account</TabName>
              </Box>
            }
          />
        </TabList>
            {datas ?
            
            <TabPanel sx={{ p: 0 }} value='account'>

            <TabAccount dashData={dashData} datas={datas} />
          </TabPanel>
            
          
          
          :
          
          
          <></>}


              <div style={{textAlign:"center"}}>
                
          <h6 className='text-center text-dark'>V.2 05/05/2023 : 12:38 PM</h6>
              </div>
       
      
      </TabContext>
    </Card>
  )
}

export default AccountSettings
