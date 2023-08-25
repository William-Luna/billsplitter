import { useDispatch } from 'react-redux'
import { setAll } from '../reducers/tipReducer'
import { Button, FormControl, InputAdornment, Switch, TextField } from '@mui/material'
import { setSuccessMessage } from '../reducers/notificationReducer'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useState } from 'react'

const TipForm = ({ people }) => {
  const dispatch = useDispatch()
  const [tipPercent, toggleTip] = useState(false)

  const handleTip = event => {
    event.preventDefault()
    const tipInput = event.target.tip.value

    dispatch(setAll({ value: tipInput, isPercent: tipPercent }))
    const message = tipPercent ? `Tip has been adjusted to ${tipInput}%.`
      : `Tip has been adjusted to $${tipInput}.`
    dispatch(setSuccessMessage(message))
    event.target.tip.value = ''
  }

  const handleTipToggle = () => {
    toggleTip(!tipPercent)
  }

  const clearTip = () => {
    dispatch(setAll({ value: 0, isPercent: false }))
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