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
      <Col mdOffset={2} md={8} >
      <FormGroup >
        <InputGroup >
          <FormControl className="search-field" type="text" bsSize="large" placeholder="Czego potrzebujesz?" />

          <DropdownButton
            componentClass={InputGroup.Button}
            id="input-dropdown-addon"
            title="Kategorie"
            style={{borderRadius: 0}}
            bsSize="large"
          >
            <MenuItem key="1">Kategoria1</MenuItem>
            <MenuItem key="2">Kategoria2</MenuItem>
            <MenuItem key="3">Kategoria3</MenuItem>
            <MenuItem key="4">Kategoria4</MenuItem>
            <MenuItem key="4">Kategoria5</MenuItem>
          </DropdownButton>
          <InputGroup.Button>
            <Button bsSize="large"><img alt="" src={process.env.PUBLIC_URL + '/images/magnifier.png'} height="20"/></Button>

          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
      </Col>
</Grid>
    )
  }
}


