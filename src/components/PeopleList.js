import { useSelector } from "react-redux"
import PersonDetails from "./PersonDetails"
import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const PeopleList = () => {

  const people = useSelector(({ people }) => {
    return people
  })

  return (
    <div>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>People List</Typography>
      <Grid2 container>
        {people.map(person =>
          <>
            <Grid2 xs={12} sm={5}><PersonDetails key={person.id} person={person} /></Grid2>
            <Grid2 xs={12} sm={1}></Grid2>
          </>
        )}
      </Grid2>
    </div >
  )
}

export default PeopleList