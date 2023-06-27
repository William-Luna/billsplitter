import { useSelector } from "react-redux"
import PersonDetails from "./PersonDetails"

const PersonList = () => {

  const people = useSelector(({ people }) => {
    return people
  })

  return (
    <div>
      {people.map(person =>
        <PersonDetails person={person} />
      )}
      <br />
    </div>
  )
}

export default PersonList