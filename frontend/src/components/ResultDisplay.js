import { Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import DonutChart from './DonutChart'
import calculateTotal from '../helpers/calculateTotal'
import calculateAllSubtotal from '../helpers/calculateAllSubtotal'

const ResultDisplay = () => {
  const people = useSelector(({ people }) => { return people })
  const tip = parseFloat(useSelector(({ tip }) => { return tip }))
  const tax = parseFloat(useSelector(({ tax }) => { return tax }))

  const allSubtotal = parseFloat(calculateAllSubtotal(people))
  const billTotal = parseFloat(tax + tip + allSubtotal).toFixed(2)


  return (
    <div>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Summary</Typography>
      <Paper evaluation={2} align="left" sx={{ p: 1 }}>
        <div><b>Tax</b> - ${parseFloat(tax).toFixed(2)}</div>
        <div><b>Tip</b> - ${parseFloat(tip).toFixed(2)}</div>
        <div><b>Bill Total</b> - ${billTotal}</div><br />
        {people.map(person =>
          <div key={person.id}><b>{person.name}</b> owes ${calculateTotal(person, allSubtotal, tax, tip)}.</div>
        )}
        <DonutChart allSubtotal={allSubtotal} />
      </Paper>
    </div>
  )
}

export default ResultDisplay