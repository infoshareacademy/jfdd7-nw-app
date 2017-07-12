import React from 'react'
import { connect } from 'react-redux'
import uniqBy from 'lodash.uniqby'
import {
  Grid,
  Col
} from 'react-bootstrap'
import './ResultsView.css'
import { fetchShops } from '../state/shops'


export default connect(
  state => ({
    shops: state.shops,
    searchPhrase: state.searchEngine.searchPhrase
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops())
  })
)(


class ResultsView extends React.Component {

  componentWillMount() {
    this.props.fetchShops()
  }


  render(){
    const { data, fetching, error } = this.props.shops
    return (
      <div className="Result">
        { error === null ? null : <p>{error.message}</p> }
        { fetching === false ? null : <p>Fetching data...</p>}
        {
          data !== null && uniqBy(data.map(
            shop => shop.products,

          ).reduce(

            (total, next) => total.concat(next), [],

          ), 'name').filter(
            product => product.name.includes(this.props.searchPhrase)
          ).sort((a,b) => a.price > b.price)  .map(
            product =><Grid>
                <Col sm={3} className="resultPhoto">
                </Col>
                <Col sm={6}>
                    <div>
                        <h1 className="resultName">{product.name} </h1>
                    </div>
                </Col>
                <Col sm={3} className="resultPrice">
                    <div>{product.price + ' zł'}</div>
                     <button className="resultButton">INFO</button>
                </Col>

            </Grid>
          )
        }

      </div>

    )
  }
}
)