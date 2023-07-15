import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

Chart.register(ArcElement, Tooltip, Legend)

const DonutChart = ({ people }) => {

  const names = people.map(p => p.name)
  const totals = people.map(p => p.subtotal)
  const bgColors = people.map(p => p.color.replace(')', ', 0.8').replace('rgb', 'rgba'))
  const bgBorders = people.map(p => p.color.replace(')', ', 1').replace('rgb', 'rgba'))

  const data = {
    labels: names,
    datasets: [
      {
        label: 'Subtotal',
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