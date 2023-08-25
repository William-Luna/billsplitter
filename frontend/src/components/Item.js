import { IconButton, ListItem, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { updateItemsOfPerson } from '../reducers/peopleReducer'
import { setSuccessMessage } from '../reducers/notificationReducer'


const Item = ({ item, person }) => {
  const dispatch = useDispatch()

  const deleteItem = () => {
    if (window.confirm(`Deleting ${item.name}. Are you sure?`)) {
      const updatedList = person.items.filter(i => item.id !== i.id)
      const newSub = parseFloat(person.subtotal - item.price)

      const personWithNewItem = { ...person, items: updatedList, subtotal: newSub }

      dispatch(updateItemsOfPerson(personWithNewItem))
      dispatch(setSuccessMessage(`${item.name} has been deleted from ${person.name}'s bill.`))
    }
  }


  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={deleteItem}>
          <DeleteIcon />
        </IconButton>}
    >
      <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
    </ListItem>
  )
}

export default Item