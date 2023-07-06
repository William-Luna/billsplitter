import { Button, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from "react"

const PersonDetails = ({ person }) => {

  const [viewItems, toggleViewItems] = useState(false)

  const viewLabel = viewItems ? 'Hide Items' : 'View Items'

  return (
    <>
      <Paper elevation={2}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{person.name}</Typography>
        <Typography variant="subtitle2">Subtotal: ${person.subtotal.toFixed(2)} </Typography>
        <Button onClick={() => toggleViewItems(!viewItems)}>{viewLabel}</Button>
        <div>
          <List>
            {person.items.map(item =>
              <ListItem sx={{ display: viewItems ? '' : 'none' }} key={item.id}
                secondaryAction={
                  <IconButton edge="end">
                    <DeleteIcon />
                  </IconButton>}
              >
                <ListItemText primary={item.name} secondary={item.price.toFixed(2)} />
              </ListItem>
            )}
          </List>
        </div>
      </Paper>
      <br />
    </>
  )

}

export default PersonDetails