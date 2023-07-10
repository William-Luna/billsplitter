import { Button, Collapse, List, Paper, Typography } from "@mui/material"
import { useState } from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Item from "./Item"

const PersonDetails = ({ person }) => {

  const [viewItems, toggleViewItems] = useState(false)
  const viewLabel = viewItems ? 'Hide Items' : 'View Items'

  return (
    <Grid2 xs={12} sm={5} sx={{ ml: 1, mr: 1 }}>
      <Paper elevation={2} sx={{ p: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{person.name}</Typography>
        <Typography variant="subtitle2">Subtotal: ${person.subtotal.toFixed(2)} </Typography>
        <Button onClick={() => toggleViewItems(!viewItems)}>{viewLabel}</Button>
        <Collapse in={viewItems}>
          <List>
            {person.items.map(item =>
              <Item key={item.id} item={item} person={person} />
            )}
          </List>
        </Collapse>
      </Paper>
      <br />
    </Grid2>
  )

}

export default PersonDetails