import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Header: React.FC = () => {
  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <Grid>
              <Typography variant='h4'> Shopping cart </Typography>
            </Grid>
            <Grid>
              <Button color='inherit' startIcon={<ShoppingCartIcon />}>
                Total Item : 0
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
