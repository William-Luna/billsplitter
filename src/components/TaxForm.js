import { useDispatch } from 'react-redux'
import { setTax } from '../reducers/taxReducer'
import { Button, FormControl, InputAdornment, Switch, TextField } from '@mui/material'
import { setSuccessMessage } from '../reducers/notificationReducer'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useState } from 'react'
import calculateAllSubtotal from '../helpers/calculateAllSubtotal'

const TaxForm = ({ people }) => {
  const dispatch = useDispatch()
  const [taxPercent, toggleTax] = useState(false)

  const handleTax = event => {
    event.preventDefault()
    const taxInput = event.target.tax.value

    const tax = taxPercent ? parseFloat(taxInput / 100) * calculateAllSubtotal(people) : taxInput

    dispatch(setTax(tax))
    dispatch(setSuccessMessage(`Tax has been adjusted to $${tax}.`))
    event.target.tax.value = ''
  }

  const handleTaxToggle = () => {
    toggleTax(!taxPercent)
  }

  const clearTax = () => {
    dispatch(setTax(0))
    dispatch(setSuccessMessage(`Tax has been reset.`))
  }

  const iconAdornment = taxPercent ?
    {
      endAdornment: <InputAdornment position='start'>%</InputAdornment>
    }
    :
    {
      startAdornment: <InputAdornment position='start'>$</InputAdornment>
    }


  return (
    <form onSubmit={handleTax}>
      <FormControl>
        <TextField variant="filled" label="Tax" size="small" type='number' name='tax' required
          inputProps={{ min: 0, step: 0.01 }}
          InputProps={iconAdornment} />
        <Grid2 container alignItems='center' justifyContent='center'>
          <Grid2>Amount</Grid2>
          <Grid2>
            <Switch checked={taxPercent} onChange={handleTaxToggle} value='checked' />
          </Grid2>
          <Grid2>Percent</Grid2>
        </Grid2>
        <br />
        <Button variant="contained" type='submit'>Set</Button>
        <Button color="error" onClick={clearTax}>Reset</Button>
      </FormControl>
    </form>
  )
}

export default TaxForm