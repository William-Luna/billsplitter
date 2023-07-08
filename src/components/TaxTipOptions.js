import { useDispatch } from "react-redux"
import { setTip } from "../reducers/tipReducer"
import { setTax } from "../reducers/taxReducer"
import { Button, FormControl, InputAdornment, Paper, TextField, Typography } from "@mui/material"

const TaxTipOptions = () => {
  const dispatch = useDispatch()

  const handleTax = event => {
    event.preventDefault()
    const tax = event.target.tax.value
    dispatch(setTax(tax))
    event.target.tax.value = ''
  }

  const handleTip = event => {
    event.preventDefault()
    const tip = event.target.tip.value
    dispatch(setTip(tip))
    event.target.tip.value = ''
  }

  const clearTax = () => {
    dispatch(setTax(0))
  }

  const clearTip = () => {
    dispatch(setTip(0))
  }


  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Set Tax And Tip</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <form onSubmit={handleTax}>
          <FormControl>
            <TextField variant="filled" label="Tax Amount" size="small" type='number' name='tax' min='0' step='0.01'
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
              }} />
            <Button variant="contained" type='submit'>Set</Button>
            <Button onClick={clearTax}>Reset</Button>
          </FormControl>
        </form>
        <form onSubmit={handleTip}>
          <FormControl>
            <TextField variant="filled" label="Tip Amount" type='number' name='tip' min='0' step='0.01'
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }} />
            <Button variant="contained" type='submit'>Set</Button>
            <Button onClick={clearTip}>Reset</Button>
          </FormControl>
        </form>
      </Paper>
    </>
  )
}

export default TaxTipOptions