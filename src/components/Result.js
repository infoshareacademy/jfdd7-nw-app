import React from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'


import './Result.css'



const Result = (props) => (
  <div className="Result">
    <Grid>
        <Col sm={4}>
        <div> Search Photo </div>
        </Col>
         <Col sm={4}>
        <div>
            <h1>Name</h1>
            <button>INFO</button>
        </div>
         </Col>
          <Col sm={4}>
        <div>Price</div>
          </Col>

    </Grid>
  </div>

)

export default Result