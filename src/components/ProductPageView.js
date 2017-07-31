import React from 'react'
import {connect} from 'react-redux'
import uniqBy from 'lodash.uniqby'
import {Grid, Col, Row, Carousel, Tab, Tabs, Panel, Table, Button} from 'react-bootstrap'
import {fetchShops} from '../state/shops'
import './ProductPageView.css'
import {toggle} from '../state/comparedProducts'

export default connect(
  state => ({
    shops: state.shops
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops()),
    toggleCompare: id => dispatch(toggle(id))

  })
)(
  class ProductPageView extends React.Component {

    componentWillMount() {
      this.props.fetchShops()
    }

    render() {
      const {data, fetching, error} = this.props.shops
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <p className="oferts">{this.props.match.params.productName}</p>
            </Col>
            <Col xs={12} sm={6}>
              {
                data !== null && uniqBy(data.map(
                  shop => shop.products
                ).reduce(
                  (total, next) => total.concat(next), []
                ), 'screenSize', 'camera', 'memory', 'slotSd').filter(
                  product => product.name === this.props.match.params.productName
                ).map(
                  product =>
                    <div key="product.id">
                      <Carousel>
                        <Carousel.Item>
                          <img width={500} alt=""
                               src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'}/>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={500} alt=""
                               src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '2.jpg'}/>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={500} alt=""
                               src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '3.jpg'}/>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                )}
            </Col>
            {error === null ? null : <p>{error.message}</p>}
            {fetching === false ? null : <p>Fetching data...</p>}
            <Col xs={12} sm={6}>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Cechy produktu">
                  <Table bordered condensed hover>
                    {
                      data !== null && uniqBy(data.map(
                        shop => shop.products
                      ).reduce(
                        (total, next) => total.concat(next), []
                      ), 'screenSize', 'camera', 'memory', 'slotSd').filter(
                        product => product.name === this.props.match.params.productName
                      ).map(
                        product =>
                            <tbody key="product.id">
                            <tr>
                              <td>
                                <Button className="ButtonCompare" onClick={event => {
                                  this.props.toggleCompare(product.id)
                                  event.preventDefault()
                                }}>
                                  Porównaj
                                </Button></td>
                            </tr>
                            <tr>
                              <td>Przekątna ekranu: {product.screenSize} "</td>
                            </tr>
                            <tr>
                              <td>Aparat cyfrowy: {product.camera} Mpix</td>
                            </tr>
                            <tr>
                              <td>Wbudowana pamięć: {product.memory} GB</td>
                            </tr>
                            <tr>
                              <td>Obsługa kart pamięci: {product.slotSD}</td>
                            </tr>
                            </tbody>
                      )}
                  </Table>
                </Tab>
                <Tab eventKey={2} title="Opis produktu">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum."
                </Tab>
              </Tabs>
            </Col>
            <Col xs={12}>
              <p className="oferts">Najlepsze oferty znalezione przez nasz serwis</p>
              {
                data !== null && data.map(
                  shop => shop.products.map(product => ({...product, shopName: shop.name, shopCity: shop.city}))
                ).reduce(
                  (total, next) => total.concat(next), []
                ).filter(
                  product => product.name === this.props.match.params.productName
                ).sort((a, b) => a.price > b.price).map(
                  product =>
                    <Panel>
                      <Col xs={4}>
                        <div>Nazwa sklepu<br/>{product.shopName}</div>
                      </Col>
                      <Col xs={4}>
                        <div>Lokalizacja<br/>{product.shopCity}</div>
                      </Col>
                      <Col xs={4}>
                        <div>Cena<br/>{product.price + ' zł'}</div>
                      </Col>
                    </Panel>
                )}
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)