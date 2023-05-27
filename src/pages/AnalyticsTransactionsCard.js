// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import Avatar from '@mui/material/Avatar'

const salesData = [
  {
    stats: '245k',
    title: 'Max Earning',
    color: 'primary',
    icon: <Icon icon='mdi:trending-up' />
  },
  {
    stats: '12.5k',
    title: 'Left Earnings',
    color: 'success',
    icon: <Icon icon='mdi:account-outline' />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Total Earning',
    icon: <Icon icon='mdi:cellphone-link' />
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'Available Earning',
    icon: <Icon icon='mdi:currency-usd' />
  },

]

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index} >
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          color={item.color}
          sx={{ mr: 3, boxShadow: 3, width: 44, height: 44, '& svg': { fontSize: '1.75rem' } }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const AnalyticsTransactionsCard = () => {
  return (
    <Card style={{backgroundColor: 'rgba(3, 232, 235, 0.1)', color: 'rgb(6, 165, 167)', border: 'solid'}}>
      <CardHeader
        title='Active ( 500$ package)'

        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
          ReferLink: kdnkd
            </Box>{' '}

          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AnalyticsTransactionsCard
