import PeopleList from './components/PeopleList'
import PersonForm from './components/PersonForm'
import ItemForm from './components/ItemForm'
import ResultDisplay from './components/ResultDisplay'
import TaxTipOptions from './components/TaxTipOptions'

const App = () => {

  return (
    <div >
      <h1>Bill Splitter</h1>
      <PersonForm />
      <ItemForm />
      <TaxTipOptions />
      <PeopleList />
      <ResultDisplay />
    </div>
  )
}

export default App
