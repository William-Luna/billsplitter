import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import calculateTotal from '../helpers/calculateTotal'
import { useSelector } from 'react-redux'

Chart.register(ArcElement, Tooltip, Legend)

const DonutChart = ({ allSubtotal }) => {
  const people = useSelector(({ people }) => { return people })
  const tip = parseFloat(useSelector(({ tip }) => { return tip }))
  const tax = parseFloat(useSelector(({ tax }) => { return tax }))

  const names = people.map(p => p.name)
  const totals = people.map(p => calculateTotal(p, allSubtotal, tax, tip))
  const bgColors = people.map(p => p.color.replace(')', ', 0.8').replace('rgb', 'rgba'))
  const bgBorders = people.map(p => p.color.replace(')', ', 1').replace('rgb', 'rgba'))

  const data = {
    labels: names,
    datasets: [
      {
        label: 'Total',
        data: totals,
        backgroundColor: bgColors,
        borderColor: bgBorders
      }
    ]
  }

  return (
    <Doughnut data={data} />
  )
}

export default DonutChart