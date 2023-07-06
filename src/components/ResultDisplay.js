import { Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"

const ResultDisplay = () => {
  const people = useSelector(({ people }) => { return people })
  const tip = useSelector(({ tip }) => { return tip })
  const tax = useSelector(({ tax }) => { return tax })

  const allSubtotal = people.reduce((accum, next) => { return accum + parseFloat(next.subtotal) }, 0)
  const billTotal = parseFloat(tax + tip + allSubtotal).toFixed(2)

  const calculateIndivTotal = person => {
    if (person.subtotal === 0) return parseFloat(0).toFixed(2)

    const taxPercentage = parseFloat(tax / allSubtotal)
    const indivTotalWithTax = parseFloat(person.subtotal * (1.00 + taxPercentage))
    const tipPercentage = parseFloat(tip / (allSubtotal + parseFloat(tax)))
    const total = parseFloat(indivTotalWithTax * (1.00 + tipPercentage)).toFixed(2)
    return total

  }


  return (
    <div>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Summary</Typography>
      <Paper evaluation={2} align="left">
        <div><b>Tax</b> - ${tax.toFixed(2)}</div>
        <div><b>Tip</b> - ${tip.toFixed(2)}</div>
        <div><b>Bill Total</b> - ${billTotal}</div><br />
        {people.map(person =>
          <div key={person.id}><b>{person.name}</b> owes ${calculateIndivTotal(person)}.</div>
        )}
      </Paper>
    </div>
  )
}

export default ResultDisplay