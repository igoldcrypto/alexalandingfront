// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Styled component for the image
const Img = styled('img')({
  right: 7,
  bottom: 0,
  height: 177,
  position: 'absolute'
})

const CardStatsCharacter = ({ data }) => {
  // ** Vars
  const { title, chipText, src, stats, trendNumber, trend = 'positive', chipColor = 'primary' } = data



  return (
    <Card sx={{ overflow: 'visible', position: 'relative', backgroundColor: 'white' }} style={{backgroundColor: 'rgba(3, 232, 235, 0.1)', color: 'rgb(6, 165, 167)', border: 'solid'}}>
      <CardContent >
        <Typography sx={{ mb: 6.5, fontWeight: 600, }}>{title}</Typography>
        <Box sx={{ mb: 1.5, rowGap: 1, width: '55%', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Typography variant='h5' sx={{ mr: 1.5,   }}>
            {stats}
          </Typography>

        </Box>

        <Img src={src} alt={title} />
      </CardContent>
    </Card>
  )
}

export default CardStatsCharacter
