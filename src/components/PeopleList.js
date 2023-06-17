import { useSelector } from "react-redux"

const PersonList = () => {

  const people = useSelector(({ people }) => {
    return people
  })

  return (
    <div>
      {people.map(person =>
        <div>{person.name}</div>
      )}
    </div>
  )
}

export default PersonList