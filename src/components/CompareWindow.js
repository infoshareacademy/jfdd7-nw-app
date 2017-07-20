import React from 'react'
import {connect} from 'react-redux'
import {
  ButtonGroup,
  DropdownButton,
  MenuItem
} from 'react-bootstrap'

import './ResultsFilter.css'
import {fetchShops} from '../state/shops'
import {activateFilter} from '../state/productFilters'
import './CompareWindow.css'


export default connect(
  state => ({
    shops: state.shops,

    activeFilter: state.searchEngine.activeFilterName
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops()),
    activateFilter: (key) => dispatch(activateFilter(key))
  })
)(
  class compareWindow extends React.Component {

    componentWillMount() {
      this.props.fetchShops()
    }

    render() {

      return (
        <div className="compare-window">
          <div className="compare-items">

          </div>

        </div>

      )
    }
  }
)
