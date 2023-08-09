import PeopleList from './PeopleList'
import PersonForm from './PersonForm'
import ItemForm from './ItemForm'
import ResultDisplay from './ResultDisplay'
import TaxTipOptions from './TaxTipOptions'

import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const MainApp = () => {
  return (

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
  )
}

export default MainApp