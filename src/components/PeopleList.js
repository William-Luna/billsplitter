import { useSelector } from "react-redux"

const PersonList = () => {

  const people = useSelector(({ people }) => {
    return people
  })

  return (
    <div>
      {people.map(person =>
        <div key={person.id}>{person.name} -
          {person.items.map(item =>
            <span key={item.id}> {item.name} ({item.price}) </span>
          )}
          <div>Subtotal - {person.subtotal}</div>
        </div>
      )}
      <br />
    </div>
  )
}

export default PersonList