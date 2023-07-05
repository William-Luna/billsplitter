import { Paper } from "@mui/material"
import { useState } from "react"

const PersonDetails = ({ person }) => {

  const [viewItems, toggleViewItems] = useState(false)

  const viewLabel = viewItems ? 'Hide Items' : 'View Items'

  return (
    <>
      <Paper elevation={2}>
        {person.name} - Subtotal: ${person.subtotal.toFixed(2)}
        <button onClick={() => toggleViewItems(!viewItems)}>{viewLabel}</button>
        {person.items.map(item =>
          <span style={{ display: viewItems ? '' : 'none' }} key={item.id}> {item.name} (${item.price.toFixed(2)}) </span>
        )}
      </Paper>
      <br />
    </>
  )

}

export default PersonDetails