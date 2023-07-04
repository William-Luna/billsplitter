import PeopleList from './components/PeopleList'
import PersonForm from './components/PersonForm'
import ItemForm from './components/ItemForm'
import ResultDisplay from './components/ResultDisplay'
import TaxTipOptions from './components/TaxTipOptions'
import { Container, CssBaseline, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const App = () => {

  return (
    <main>
      <CssBaseline />
      <Typography align="center" gutterBottom variant="h2">Bill Splitter</Typography>
      <Container maxWidth="md">
        <Grid2 container spacing={2}>
          <Grid2>
            <PersonForm />
            <ItemForm />
          </Grid2>
          <Grid2>
            <TaxTipOptions />
          </Grid2>
          <Grid2>
            <PeopleList />
            <ResultDisplay />
          </Grid2>
        </Grid2>
      </Container>
    </main>
  )
}

export default App
