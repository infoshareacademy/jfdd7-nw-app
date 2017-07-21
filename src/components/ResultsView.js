import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import uniqBy from 'lodash.uniqby'
import {
  Col,
  Row,
  Grid,
  Button
} from 'react-bootstrap'
import './ResultsView.css'
import ResultsFilter from './ResultsFilter'
import {toggle } from '../state/comparedProducts'

export default connect(
  state => ({
    productsIds: state.comparedProducts.productsIds,
    shops: state.shops,
    searchPhrase: state.searchEngine.searchPhrase,
    activeFilter: state.searchEngine.activeFilterName,
    activeFilterNames: state.productFilters.activeFilterNames
  }),
  dispatch => ({
    toggleCompare: id => dispatch(toggle(id)),

  })
)(
  class ResultsView extends React.Component {


    render() {
      const {data, fetching, error} = this.props.shops
      const shops = data === null ? [] : data
      const filters = {
        name_iphone: product => product.name === 'Iphone',
        name_lenovo: product => product.name === 'Lenovo',
        name_xiaomi: product => product.name === 'Xiaomi',
        name_huawei: product => product.name === 'Huawei',
        name_htc: product => product.name === 'HTC',
        name_lg: product => product.name === 'LG',
        name_samsung: product => product.name === 'Samsung',

        shopName_Zabka: product => product.shopName === 'Żabka',
        shopName_Biedronka: product => product.shopName === 'Biedronka',
        shopName_uMarcina: product => product.shopName === 'uMarcina',
        shopName_Malpka: product => product.shopName === 'Małpka',
        shopName_uJarka: product => product.shopName === 'uJarka',
        shopName_uOskara: product => product.shopName === 'uOskara',

        camera_3p2: product => product.camera === 3.2,
        camera_4: product => product.camera === 4,
        camera_6: product => product.camera === 6,
        camera_6p4: product => product.camera === 6.4,
        camera_12: product => product.camera === 12,
        camera_24: product => product.camera === 24,

        slot_sd: product => product.slotSD === "Tak",
        no_slot: product => product.slotSD === "Nie",

        size_3p9: product => product.screenSize === 3.9,
        size_4p2: product => product.screenSize === 4.2,
        size_4p5: product => product.screenSize === 4.5,
        size_4p8: product => product.screenSize === 4.8,
        size_5p1: product => product.screenSize === 5.1,
        size_5p2: product => product.screenSize === 5.2,
        size_6: product => product.screenSize === 6
      }
      const allProducts = shops.map(
        shop => shop.products.map(product => ({...product, shopName: shop.name}))
      ).reduce(
        (total, next) => total.concat(next), []
      ).filter(
        product => product.name.includes(this.props.searchPhrase)
      ).filter(
        product => product.category === this.props.activeFilter
      ).filter(
        product => this.props.activeFilterNames.map(
          filterName => filters[filterName] || (() => true)
        ).every(
          f => f(product) === true
        )
      ).sort(
        (a, b) => a.price > b.price
      )
      const uniqueProducts = uniqBy(allProducts, 'name')

      return (
        <div className="Result">
          <Grid>
            <Row>
              <Col sm={3}>
                <ResultsFilter/>
              </Col>
              <Col sm={9}>

                { error === null ? null : <p>{error.message}</p> }
                { fetching === false ? null : <p>Fetching data...</p>}
                { uniqueProducts.map(
                    product => (
                      <Link to={'/product-page-view/' + product.name}>

                      <Row className="ResultItem">
                        <Col sm={2} className="resultPhoto">
                          <div>
                            <img width={200} height={200} alt=""
                                 src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'}/></div>
                        </Col>
                        <Col sm={7}>
                        </Col>
                        <Col sm={3}>
                          <div>
                            <h1 className="resultName">{product.name} </h1>
                          </div>
                          <div className="resultPrice">{product.price + ' zł'}</div>

                          <Button onClick={event => {
                            this.props.toggleCompare(product.id)
                            event.preventDefault()
                          }}>
                            Porównaj
                          </Button>
                        </Col>
                      </Row>
                      </Link>
                    )
                  )
                }
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
  }
)