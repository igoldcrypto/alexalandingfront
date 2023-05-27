import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PackageHistory from './PackageHistory'
import Web3 from 'web3';
import ABI from '../../../src/Web3Resources/ABI';


const MUITable = () => {
  const [packageId, setPackageId] = useState('')
  const [price, setPrice] = useState('')
  const [datas, setDatas] = useState('')
  const [showHistoryScreen, setShowHistoryScreen] = useState(null)
  const [TopUpHistory, setTopUpHistory] = useState('')
  const [myPackagePrice, setMyPackagePrice] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData()
    getAllPackages()
    getMyPackage()
  }, [])

  const getData = () => {
    var UserData = localStorage.getItem('jwt')
    var parsedData = JSON.parse(UserData)

    axios
      .post('/api/Package/CheckPackage', {
        ids: parsedData._id
      })
      .then(acc => {
        if (acc.data == 0) {
          setShowHistoryScreen(false)
        } else {
          setShowHistoryScreen(true)
          setTopUpHistory(acc.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getAllPackages = () => {
    try {
      axios
        .get('/api/Package/getAllPackages')
        .then(acc => {

          setDatas(acc.data)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const getMyPackage = () => {
    const ids = localStorage.getItem("jwt")
    const parsedData = JSON.parse(ids)


    try {

      axios.post("/api/Package/getMyPackage", {
        id: parsedData._id
      })
        .then((acc) => {

          setMyPackagePrice(acc.data)
        })
        .catch((err) => {
          console.log(err)
        })


    } catch (error) {
      console.log(error)
    }





  }

  const handlePurchaseTopUp = (packId,amounts) => {



    console.log("packId ==> "+packId)
    console.log("amounts ==> "+amounts)


    setIsLoading(true)




    var data = localStorage.getItem('jwt')
    var parseData = JSON.parse(data)

    try {
      axios
        .post('/api/Package/PurchasePackage', {
          packageId: packId,
          Anount: amounts,
          id: parseData._id
        })
        .then(acc => {
          setIsLoading(false)
          getData()
    getMyPackage()

          window.alert('Package Created Successfuly')
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      {showHistoryScreen == true ? (
        <PackageHistory setShowHistoryScreen={setShowHistoryScreen} TopUpHistory={TopUpHistory} />
      ) : (
        showHistoryScreen == false && (
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant='h4'>Package</Typography>
            </Grid>

            <Grid item xs={12}>
              <Card>
                {/* <CardHeader title='Topup With Alexa Token (BEP-20)' titleTypographyProps={{ variant: 'h6' }} /> */}

                {/* <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 40, marginTop: 20 }}>
                  <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Select Package</InputLabel>
                    <Select
                      onChange={(e) => { setPackageId(e.target.value) }}
                      label='Select Package'
                      defaultValue=''
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'

                    >
                      {datas ? (
                        datas.map(acc => {


                          if (Number(acc.PackagePrice) < Number(myPackagePrice)) {
                            return
                          }



                          return (
                            <MenuItem onClick={() => setPrice(acc.PackagePrice)} style={{ backgroundColor: "#062929" }} key={acc._id} value={acc._id}>
                              {acc.PackageName} - ${acc.PackagePrice}
                            </MenuItem>
                          )
                        })
                      ) : (
                        <MenuItem value='null'>Loading...</MenuItem>
                      )}
                    </Select>
                  </FormControl>

                  <p>Alexa Coin (Including 1% admin fee)</p>
                  <TextField disabled={true} fullWidth label='Total Alexa' placeholder='Carter' />

                  <div style={{ textAlign: 'center', marginTop: 30 }}>
                    {
                      isLoading ?

                        <Button style={{ backgroundColor: "gray" }} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                          Loading...
                        </Button>

                        :

                        <Button onClick={handlePurchaseTopUp} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                          Submit
                        </Button>


                    }
                  </div>
                </div> */}


                <Grid container spacing={6}>


                  {
                    datas && datas.map((hit,index)=>{

                        console.log(hit.PackagePrice)

                        console.log(myPackagePrice)

                      if (Number(hit.PackagePrice) < Number(myPackagePrice)) {
                        return
                      }




                      return <Grid key={index} item xs={4}>

                      <Card style={{ backgroundColor: "#30304C", paddingBottom: 20 }} >
  
                        <h5 style={{ textAlign: "center" }}>{hit.PackageName.toUpperCase()}</h5>
                        <h1 style={{ textAlign: "center", marginTop: -15 }}>{hit.PackagePrice} $</h1>
  
                        <div style={{ alignSelf: "center", textAlign: "center" }}>
                          {/* <Button disabled style={{ backgroundColor: "#05A4A6", color: "white", fontWeight: "bolder" }} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                            Activate Now
                          </Button> */}




                          {
                      isLoading ?

                        <Button style={{ backgroundColor: "gray" }} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                          Loading...
                        </Button>

                        :

                        <Button onClick={()=>handlePurchaseTopUp(hit._id,hit.PackagePrice)} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                          Activate Now
                        </Button>


                    }




                        </div>
  
  
  
  
  
                      </Card>
  
  
                    </Grid>
                    })
                  }

                  





                </Grid>















              </Card>
            </Grid>
          </Grid>
        )
      )}
    </>
  )
}

export default MUITable
