import { useDispatch } from 'react-redux'
import { setTip } from '../reducers/tipReducer'
import { Button, FormControl, InputAdornment, Switch, TextField } from '@mui/material'
import { setSuccessMessage } from '../reducers/notificationReducer'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useState } from 'react'
import calculateAllSubtotal from '../helpers/calculateAllSubtotal'

const TipForm = ({ people }) => {
  const dispatch = useDispatch()
  const [tipPercent, toggleTip] = useState(false)

  const handleTip = event => {
    event.preventDefault()
    const tipInput = event.target.tip.value

    const tip = tipPercent ? parseFloat(tipInput / 100) * calculateAllSubtotal(people) : tipInput

    dispatch(setTip(tip))
    dispatch(setSuccessMessage(`Tip has been adjusted to $${tip}.`))
    event.target.tip.value = ''
  }

  const handleTipToggle = () => {
    toggleTip(!tipPercent)
  }

  const clearTip = () => {
    dispatch(setTip(0))
    dispatch(setSuccessMessage(`Tip has been reset.`))
  }

  const iconAdornment = tipPercent ?
    {
      endAdornment: <InputAdornment position='start'>%</InputAdornment>
    }
    :
    {
      startAdornment: <InputAdornment position='start'>$</InputAdornment>
    }


  return (
    <form onSubmit={handleTip}>
      <FormControl>
        <TextField variant="filled" label="Tip" size="small" type='number' name='tip' required
          inputProps={{ min: 0, step: 0.01 }}
          InputProps={iconAdornment} />
        <Grid2 container alignItems='center' justifyContent='center'>
          <Grid2>Amount</Grid2>
          <Grid2>
            <Switch checked={tipPercent} onChange={handleTipToggle} value='checked' />
          </Grid2>
          <Grid2>Percent</Grid2>
        </Grid2>
        <br />
        <Button variant="contained" type='submit'>Set</Button>
        <Button color="error" onClick={clearTip}>Reset</Button>
      </FormControl>
    </form>
  )
}

export default TipForm