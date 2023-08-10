import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

const MissingFeature = () => {
  return (
    <>
      <Typography variant='h5' align='center'>This feature is under maintainance.</Typography>
      <Typography variant='body1'><Link to={-1}>Click here</Link> to go back.</Typography>
    </>
  )
}

export default MissingFeature