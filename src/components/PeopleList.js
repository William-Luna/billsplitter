import { useSelector } from "react-redux"
import PersonDetails from "./PersonDetails"

const PeopleList = () => {

  const people = useSelector(({ people }) => {
    return people
  })

  return (
    <div>
      {people.map(person =>
        <PersonDetails key={person.id} person={person} />
      )}
      <br />
    </div>
  )
}

export default PeopleList