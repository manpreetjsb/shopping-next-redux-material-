import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { StyledCardMedia } from './productList.styles'
import Paper from '@material-ui/core/Paper'

const ProductList: React.FC = () => {
  const [count, setCount] = useState(0)

  const deleteItem = () => {
    if (count <= 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <Container component='main'>
      <Box my={10}>
        <Grid container spacing={4}>
          <Grid container item sm={8} spacing={4}>
            <Grid item sm={6}>
              <StyledCardMedia
                image='https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                title='Iphone'
              />
            </Grid>
            <Grid item sm={6}>
              <Typography gutterBottom variant='h5' component='h2'>
                Title
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging
              </Typography>
              <Box my={2}>
                <Typography variant='subtitle1'>$19.00</Typography>
              </Box>
              <ButtonGroup
                size='small'
                aria-label='small primary filled button group'
              >
                <Button onClick={deleteItem}>-</Button>
                <Button disabled>{count}</Button>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </ButtonGroup>
              <Box my={2}>
                <Button
                  size='small'
                  variant='outlined'
                  color='primary'
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid item sm={4}>
            <Paper>
              <Box p={2}>
                <Typography variant='h5' component='h2'>
                  Cart Summary
                </Typography>
                <Typography variant='body2' component='p'>
                  Total Item : 0
                </Typography>
                <Typography variant='body2' component='p'>
                  Total Price : €0
                </Typography>
              </Box>
              <Box p={2}>
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                >
                  Checkout
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ProductList
