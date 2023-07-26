import { Alert, Snackbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { closeMessage } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()

  const notification = useSelector(({ notification }) => { return notification })

  const handleClose = () => {
    dispatch(closeMessage())
  }

  return (<Snackbar
    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    open={notification.open}
    autoHideDuration={4000}
    onClose={handleClose}
  >
    <Alert
      severity={notification.severity}
      onClose={handleClose}
    >
      {notification.message}
    </Alert>
  </Snackbar>
  )
}

export default Notification