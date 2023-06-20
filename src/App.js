import PeopleList from './components/PeopleList'
import PersonForm from './components/PersonForm'
import ItemForm from './components/ItemForm'
import ResultDisplay from './components/ResultDisplay'

const App = () => {

  return (
    <div >
      <h1>Bill Splitter</h1>
      <PersonForm />
      <ItemForm />
      <PeopleList />
      <ResultDisplay />
    </div>
  )
}

export default App
