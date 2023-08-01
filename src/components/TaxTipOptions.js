import { Paper, Typography } from '@mui/material'
import TaxForm from './TaxForm'
import TipForm from './TipForm'
import { useSelector } from 'react-redux'

const TaxTipOptions = () => {

  const people = useSelector(({ people }) => { return people })


  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Set Tax And Tip</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <TaxForm people={people} />
        <TipForm people={people} />
      </Paper>
    </>
  )
}

export default TaxTipOptions