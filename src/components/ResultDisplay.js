import { Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import DonutChart from './DonutChart'

const ResultDisplay = () => {
  const people = useSelector(({ people }) => { return people })
  const tip = parseFloat(useSelector(({ tip }) => { return tip }))
  const tax = parseFloat(useSelector(({ tax }) => { return tax }))

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
      <Paper evaluation={2} align="left" sx={{ p: 1 }}>
        <div><b>Tax</b> - ${parseFloat(tax).toFixed(2)}</div>
        <div><b>Tip</b> - ${parseFloat(tip).toFixed(2)}</div>
        <div><b>Bill Total</b> - ${billTotal}</div><br />
        {people.map(person =>
          <div key={person.id}><b>{person.name}</b> owes ${calculateIndivTotal(person)}.</div>
        )}
        <DonutChart />
      </Paper>
    </div>
  )
}

export default ResultDisplay