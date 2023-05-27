import React,{useEffect,useState} from 'react'
import Grid from '@mui/material/Grid'
import axios from 'axios'

const MatchingBonusAboveCard = () => {

    const [Datas, setDatas] = useState("")

    useEffect(() => {
      getData()
    }, [])


    const getData = () =>{

        const getData = localStorage.getItem("jwt")
        const parseData = JSON.parse(getData)

        try {
            
            axios.post("http://64.227.156.27:4000/api/CountMyLeftRightDirects",{
                id:parseData._id
            })
            .then((acc)=>{
                
                setDatas(acc.data)
            })
            .catch((err)=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error)
        }

    }
    

    return (

        <Grid container spacing={6}>

            <Grid style={{ marginTop: 20, marginLeft: 10 }} container spacing={12}>
                <Grid item xs={12} md={4}>

                    <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>

                        <div style={{ textAlign: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC", marginBottom: -18 }} width={26} height={26} fill="currentColor" className="bi bi-box2-fill" viewBox="0 0 16 16">
                                <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z" />
                            </svg>
                        </div>

                        <h4 style={{ textAlign: "center" }}>Direct Left Business</h4>
                        <h3 style={{ marginTop: -20, textAlign: "center" }}>{Datas?Datas.MyLeftDirectBusiness:0}</h3>

                    </div>

                </Grid>
                <Grid item xs={12} md={4}>

                    <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>

                        <div style={{ textAlign: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC", marginBottom: -18 }} width={26} height={26} fill="currentColor" className="bi bi-box2-fill" viewBox="0 0 16 16">
                                <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z" />
                            </svg>
                        </div>

                        <h4 style={{ textAlign: "center" }}>Direct Right Business</h4>
                        <h3 style={{ marginTop: -20, textAlign: "center" }}>{Datas?Datas.MyRightDirectBusiness:0}</h3>

                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
{/* 
                    <div style={{ borderColor: "#06A5A7", borderStyle: "solid", borderWidth: 3, padding: 10, borderRadius: 20, backgroundColor: 'rgb(3 232 235 / 10%)', paddingLeft: 20, backgroundImage: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg", backgroundSize: 80, backgroundRepeat: "no-repeat" }}>

                        <div style={{ textAlign: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#07AAAC", marginBottom: -18 }} width={26} height={26} fill="currentColor" className="bi bi-box2-fill" viewBox="0 0 16 16">
                                <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z" />
                            </svg>
                        </div>

                        <h4 style={{ textAlign: "center" }}>Qualified (YES / NO)</h4>
                        <h3 style={{ marginTop: -20, textAlign: "center" }}>0.00</h3>

                    </div> */}

                </Grid>
            </Grid>
        </Grid>
    )
}

export default MatchingBonusAboveCard