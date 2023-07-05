import { useDispatch } from "react-redux"
import { setTip } from "../reducers/tipReducer"
import { setTax } from "../reducers/taxReducer"
import { Button, FormControl, TextField } from "@mui/material"

const TaxTipOptions = () => {
  const dispatch = useDispatch()

  const handleTax = event => {
    event.preventDefault()
    const tax = event.target.tax.value
    dispatch(setTax(tax))

  }

  const handleTip = event => {
    event.preventDefault()
    const tip = event.target.tip.value
    dispatch(setTip(tip))

  }

  const clearTax = () => {
    dispatch(setTax(0))
  }

  const clearTip = () => {
    dispatch(setTip(0))
  }


  return (
    <div>
      <div>
        <form onSubmit={handleTax}>
          <FormControl>
            <TextField type='number' name='tax' min='0' step='0.01' placeholder='(Optional) Set Tax Amount' />
            <Button variant="contained" type='submit'>Set</Button>
            <Button onClick={clearTax}>Reset</Button>
          </FormControl>
        </form>
      </div>
      <div>
        <form onSubmit={handleTip}>
          <FormControl>
            <TextField type='number' name='tip' min='0' step='0.01' placeholder='(Optional) Set Tip Amount' />
            <Button variant="contained" type='submit'>Set</Button>
            <Button onClick={clearTip}>Reset</Button>
          </FormControl>
        </form>
      </div>
    </div>
  )
}

export default TaxTipOptions