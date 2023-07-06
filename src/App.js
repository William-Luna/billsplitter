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
      <Container>
        <Typography align="center" gutterBottom variant="h2">Bill Splitter</Typography>
        <Grid2 container spacing={2} align="center">
          <Grid2 xs={12} sm={4}>
            <PersonForm />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <ItemForm />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TaxTipOptions />
          </Grid2>
          <Grid2 xs={12} sm={1}></Grid2>
          <Grid2 xs={6} sm={5}>
            <PeopleList />
          </Grid2>
          <Grid2 xs={6} sm={5}>
            <ResultDisplay />
          </Grid2>
          <Grid2 xs={12} sm={1}></Grid2>
        </Grid2>
      </Container>
    </main>
  )
}

export default App
