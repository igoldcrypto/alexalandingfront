import React,{useState,useEffect} from 'react'
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'


const navigation = () => {
  const [myId, setMyId] = useState("")



  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {

      const getUser = localStorage.getItem("jwt")
      const parseData = JSON.parse(getUser)
      setMyId(parseData.SponserCode)

    }
  }, [])




  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Setting',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'My Team',
      icon: AccountCogOutline,
      path: '/MyTeam'
    },
    {
      sectionTitle: 'Fund Manager'
    },
    {
        title: 'Top Up',
        icon: AccountCogOutline,
        path: '/Package'
      },
    {
        title: 'Top-Up History',
        icon: AccountCogOutline,
        path: '/TopUpHistory'
      },
   
    {
      sectionTitle: 'Team Details'
    },
    {
      title: 'Direct Referrals',
      icon: AccountCogOutline,
      path: '/DirectReferal'
    },
  
    {
      title: 'Genealogy',
      icon: AccountCogOutline,
      path: `/Member/Genealogy?id=${myId}`
    },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    // {
    //   title: 'Top Up',
    //   icon: AccountCogOutline,
    //   path: '/Package'
    // },

    
    {
      sectionTitle: 'Rewards'
    },
    {
      title: 'Daily Staking Reward',
      icon: AccountCogOutline,
      path: '/DailyBounus'
    },
    {
      title: 'Power Staking Reward',
      icon: AccountCogOutline,
      path: '/FastBonus'
    },
    {
      title: 'Direct Reward',
      icon: AccountCogOutline,
      path: '/ReferalCommisions'
    },
    {
      title: 'Matching Bonus',
      icon: AccountCogOutline,
      path: '/MatchingBonus'
    },
   
    // {
    //   title: 'Genealogy',
    //   icon: AccountCogOutline,
    //   path: `/Member/Genealogy?id=${myId}`
    // },
    {
      title: 'Rank Eligibility',
      icon: AccountCogOutline,
      path: '/RankEligibility'
    },
    {
      title: 'Global Bonus Bonus',
      icon: AccountCogOutline,
      path: '/GlobalBonusHistory'
    },
    {
      title: 'Rebuy Bonus',
      icon: AccountCogOutline,
      path: '/RebuyBonus'
    },

    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
