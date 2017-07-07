import React from 'react'
import {
  FormGroup,
  FormControl,
  InputGroup,
  DropdownButton,
  MenuItem,
  Button,
  Col,
  Grid
} from 'react-bootstrap'

import './SearchMain.css'

export default class SearchMain extends React.Component {

  render() {
    return (
<Grid>
      <Col mdOffset={2} md={8}>
      <FormGroup>
        <InputGroup>
          <FormControl type="text"/>

          <DropdownButton
            componentClass={InputGroup.Button}
            id="input-dropdown-addon"
            title="aaaAction"
            style={{borderRadius: 0}}
          >
            <MenuItem key="1">Item</MenuItem>
          </DropdownButton>
          <InputGroup.Button>
            <Button>Before</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
      </Col>
</Grid>
    )
  }
}


