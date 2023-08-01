const calculateAllSubtotal = people => {
  return people.reduce((accum, next) => { return accum + parseFloat(next.subtotal) }, 0)
}

export default calculateAllSubtotal