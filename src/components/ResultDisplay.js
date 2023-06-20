import { useSelector } from "react-redux"

const ResultDisplay = () => {
  const people = useSelector(({ people }) => { return people })

  const calculateTotal = person => {
    return person.items.reduce((accum, next) => { return accum + parseFloat(next.price) }, 0)
  }


  return (<div>
    {people.map(person =>
      <div>{person.name} owes ${calculateTotal(person)}.</div>
    )}
  </div>)
}

export default ResultDisplay