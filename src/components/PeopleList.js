import { useSelector } from "react-redux"

const PersonList = () => {

  const people = useSelector(({ people }) => {
    return people
  })

  return (
    <div>
      {people.map(person =>
        <div>{person.name} -
          {person.items.map(item =>
            <span> {item.name}</span>
          )}
        </div>
      )}
    </div>
  )
}

export default PersonList