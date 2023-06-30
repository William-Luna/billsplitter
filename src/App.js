import PeopleList from './components/PeopleList'
import PersonForm from './components/PersonForm'
import ItemForm from './components/ItemForm'
import ResultDisplay from './components/ResultDisplay'
import TaxTipOptions from './components/TaxTipOptions'
import { Container, CssBaseline, Typography } from '@mui/material'

const App = () => {

  return (
    <main>
      <CssBaseline />
      <Typography align="center" gutterBottom variant="h2">Bill Splitter</Typography>
      <Container maxWidth="md">
        <PersonForm />
        <ItemForm />
        <TaxTipOptions />
        <PeopleList />
        <ResultDisplay />
      </Container>
    </main>
  )
}

export default App
