import React from 'react'
import {connect} from 'react-redux'
import {toggle} from '../state/comparedProducts'
import {Table, Grid} from 'react-bootstrap'

export default connect(
  state => ({
    productsIds: state.comparedProducts.productsIds,
    shops: state.shops
  }),
  dispatch => ({
    toggleCompare: id => dispatch(toggle(id)),

  })
)(
  class Comparison extends React.Component {

    render() {
      const {data} = this.props.shops

      const dataToDisplay = data === null ? [] : data.map(
        shop => shop.products
      ).reduce(
        (total, next) => total.concat(next), []
      ).filter(
        product => this.props.productsIds.includes(product.id)
      )

      console.log(dataToDisplay)


      const attributes = Object.keys(dataToDisplay[0])

      return (
        <Grid>
            <Table striped bordered condensed hover>
            <tbody>
            {
              attributes.map(
                attribute => (
                  <tr>
                    {
                      dataToDisplay.map(
                        product => (
                          <td>{product[attribute]}</td>
                        )
                      )
                    }
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </Grid>
      )
    }

  }
)