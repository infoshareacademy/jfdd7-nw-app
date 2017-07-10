import React from 'react'
import {Grid, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = (props) => (
  <Grid fluid>
    <Button>
      <Link to="/">Home</Link>
    </Button>
    <Button>
      <Link to="/product-page-view">ProductPageView</Link>
    </Button>
    <Button>
      <Link to="/result-view">Results</Link>
    </Button>
  </Grid>
)

export default Home