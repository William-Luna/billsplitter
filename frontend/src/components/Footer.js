import { Box, Container, Divider, Link, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <Container maxWidth="lg" disableGutters={false} align="center">
      <br />
      <Divider color="grey" />
      <Typography variant="body2" color="grey" m={1}>© 2023 William Luna</Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link href="https://github.com/William-Luna" target="_blank">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/williamluna/" target="_blank">
          <LinkedInIcon />
        </Link>
      </Box>
    </Container>
  )
}

export default Footer