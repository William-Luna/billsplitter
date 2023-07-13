import { Chart, ArcElement, Tooltip, Legend } from "chart.js/auto"
import { Doughnut } from "react-chartjs-2"

Chart.register(ArcElement, Tooltip, Legend)

const DonutChart = () => {
  const data = {
    labels: ['Person 1', 'Person 2'],
    datasets: [{ label: 'Total', data: [4, 6], backgroundColor: ['rgb(30,30,30)', 'rgb(60,60,60)'], }]
  }

  return (
    <Doughnut data={data} />
  )
}

export default DonutChart