import { Button, Collapse, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateItemsOfPerson } from '../reducers/peopleReducer'

const PersonDetails = ({ person }) => {

  const dispatch = useDispatch()

  const [viewItems, toggleViewItems] = useState(false)
  const people = useSelector(({ people }) => {
    return people
  })

  const viewLabel = viewItems ? 'Hide Items' : 'View Items'

  // const deleteItem = item => {
  //   const targetPerson = people.find(p => person.name === p.name)
  //   const updatedList = targetPerson.items.filter(i => item.id !== i.id)

  //   const personWithNewItem = { ...targetPerson, items: updatedList, subtotal: parseFloat(targetPerson.subtotal - item.price) }

  //   dispatch(updateItemsOfPerson(personWithNewItem))
  // }

  return (
    <>
      <Paper elevation={2} sx={{ p: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{person.name}</Typography>
        <Typography variant="subtitle2">Subtotal: ${person.subtotal.toFixed(2)} </Typography>
        <Button onClick={() => toggleViewItems(!viewItems)}>{viewLabel}</Button>
        <Collapse in={viewItems}>
          <List>
            {person.items.map(item =>
              <ListItem key={item.id}
                secondaryAction={
                  <IconButton edge="end" >
                    <DeleteIcon />
                  </IconButton>}
              >
                <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
              </ListItem>
            )}
          </List>
        </Collapse>
      </Paper>
      <br />
    </>
  )

}

export default PersonDetails