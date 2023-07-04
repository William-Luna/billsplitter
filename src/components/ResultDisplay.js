import { useSelector } from "react-redux"

const ResultDisplay = () => {
  const people = useSelector(({ people }) => { return people })
  const tip = useSelector(({ tip }) => { return tip })
  const tax = useSelector(({ tax }) => { return tax })

  const calculateTotal = person => {
    if (person.subtotal === 0) return parseFloat(0).toFixed(2)
    //const personSubtotal = person.items.reduce((accum, next) => { return accum + parseFloat(next.price) }, 0)
    const allSubtotal = people.reduce((accum, next) => { return accum + parseFloat(next.subtotal) }, 0)

    const taxPercentage = parseFloat(tax / allSubtotal)
    const indivTotalWithTax = parseFloat(person.subtotal * (1.00 + taxPercentage))
    const tipPercentage = parseFloat(tip / (allSubtotal + parseFloat(tax)))
    const total = parseFloat(indivTotalWithTax * (1.00 + tipPercentage)).toFixed(2)
    return total

  }


  return (<div>
    {people.map(person =>
      <div key={person.id}>{person.name} owes ${calculateTotal(person)}.</div>
    )}
  </div>)
}

export default ResultDisplay