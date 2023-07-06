import { useSelector } from "react-redux"
import PersonDetails from "./PersonDetails"
import { Typography } from "@mui/material"

const PeopleList = () => {

  const people = useSelector(({ people }) => {
    return people
  })

  return (
    <div>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>People List</Typography>
      {people.map(person =>
        <PersonDetails key={person.id} person={person} />
      )}
    </div>
  )
}

export default PeopleList