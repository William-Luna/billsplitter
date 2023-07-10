import { IconButton, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { updateItemsOfPerson } from '../reducers/peopleReducer'

const Item = ({ item, person }) => {
  const dispatch = useDispatch()
  // const people = useSelector(({ people }) => {
  //   return people
  // })

  const deleteItem = () => {
    const updatedList = person.items.filter(i => item.id !== i.id)
    const newSub = parseFloat(person.subtotal - item.price)

    const personWithNewItem = { ...person, items: updatedList, subtotal: newSub }

    dispatch(updateItemsOfPerson(personWithNewItem))
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