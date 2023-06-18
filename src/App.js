import PeopleList from './components/PeopleList'
import PersonForm from './components/PersonForm'
import ItemForm from './components/ItemForm'

const App = () => {


  return (
    <div >
      <h1>Bill Splitter</h1>
      <PersonForm />
      <ItemForm />
      <PeopleList />
    </div>
  )
}

export default App
