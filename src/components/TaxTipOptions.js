import { useDispatch } from "react-redux"
import { setTip } from "../reducers/tipReducer"
import { setTax } from "../reducers/taxReducer"

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
          <input type='number' name='tax' placeholder='(Optional) Set Tax Amount' />
          <button type='submit'>Set</button>
        </form>
        <button onClick={clearTax}>Reset</button>
      </div>
      <div>
        <form onSubmit={handleTip}>
          <input type='number' name='tip' placeholder='(Optional) Set Tip Amount' />
          <button type='submit'>Set</button>
        </form>
        <button onClick={clearTip}>Reset</button>
      </div>
    </div>
  )
}

export default TaxTipOptions