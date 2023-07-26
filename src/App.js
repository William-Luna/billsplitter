import PeopleList from './components/PeopleList'
import PersonForm from './components/PersonForm'
import ItemForm from './components/ItemForm'
import ResultDisplay from './components/ResultDisplay'
import TaxTipOptions from './components/TaxTipOptions'
import TopNavbar from './components/TopNavbar'
import Footer from './components/Footer'
import Notification from './components/Notification'

import { Box, Container, CssBaseline, Paper } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const App = () => {


  return (
    <>
      <CssBaseline />
      <Notification />
      <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
        <TopNavbar />
        <main>
          <Container maxWidth="lg">
            <Paper elevation={2} sx={{ p: 2 }}>
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
                <Grid2 xs={12} sm={5}>
                  <PeopleList />
                </Grid2>
                <Grid2 xs={12} sm={0}></Grid2>
                <Grid2 xs={12} sm={5}>
                  <ResultDisplay />
                </Grid2>
                <Grid2 xs={12} sm={1}></Grid2>
              </Grid2>
            </Paper>
          </Container>
        </main>
        <Footer />
      </Box>

    </>
  )
}

export default App
