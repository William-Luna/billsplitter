const calculateTotal = (person, allSubtotal, tax, tip) => {

  if (person.subtotal === 0) return parseFloat(0).toFixed(2)

  const taxPercentage = parseFloat(tax / allSubtotal)
  const indivTotalWithTax = parseFloat(person.subtotal * (1.00 + taxPercentage))
  const tipPercentage = parseFloat(tip / (allSubtotal + parseFloat(tax)))
  const total = parseFloat(indivTotalWithTax * (1.00 + tipPercentage)).toFixed(2)
  return total

}

export default calculateTotal