import { useSelector } from "react-redux"

const ResultDisplay = () => {
  const people = useSelector(({ people }) => { return people })
  const tip = useSelector(({ tip }) => { return tip })
  const tax = useSelector(({ tax }) => { return tax })

  const calculateTotal = person => {
    //const personSubtotal = person.items.reduce((accum, next) => { return accum + parseFloat(next.price) }, 0)
    const allSubtotal = people.reduce((accum, next) => { return accum + parseFloat(next.subtotal) }, 0)
    console.log(`allSubtotal: ${allSubtotal}`)

    const taxPercentage = parseFloat(tax / allSubtotal)
    console.log(`taxPercentage: ${taxPercentage}`)
    const totalWithTax = parseFloat(person.subtotal * (1.00 + taxPercentage))
    console.log(`totalWithTax: ${totalWithTax}`)
    const tipPercentage = parseFloat(tip / totalWithTax)
    console.log(`tipPercentage: ${tipPercentage}`)
    const total = parseFloat(totalWithTax * (1.00 + tipPercentage)).toFixed(2)
    console.log(`total: ${total}`)
    return total

  }


  return (<div>
    {people.map(person =>
      <div>{person.name} owes ${calculateTotal(person)}.</div>
    )}
  </div>)
}

export default ResultDisplay