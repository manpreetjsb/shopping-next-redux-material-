import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Container component='footer'>
      <Box my={10}>
        <Grid container>
          <Typography variant='caption'>© 2021.</Typography>
        </Grid>
      </Box>
    </Container>
  )
}

export default Footer
