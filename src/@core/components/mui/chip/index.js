// ** MUI Imports
import MuiChip from '@mui/material/Chip'

// ** Third Party Imports
import clsx from 'clsx'



const Chip = props => {
  // ** Props
  const { sx, skin, color, rounded } = props

  // ** Hook

  const propsToPass = { ...props }
  propsToPass.rounded = undefined

  return (
    <MuiChip
      {...propsToPass}
      variant='filled'
      className={clsx({
        'MuiChip-rounded': rounded,
        'MuiChip-light': skin === 'light'
      })}

    />
  )
}

export default Chip
