import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {stack as Menu} from 'react-burger-menu'
import {Button, Image} from 'react-bootstrap'
import {toggle} from '../state/comparedProducts'
import './ComparePreview.css'

export default connect(
  state => ({
    productsIds: state.comparedProducts.productsIds,
    shops: state.shops
  }),
  dispatch => ({
    toggleCompare: id => dispatch(toggle(id)),
  })
)(
  class ComparePreview extends React.Component {

    render() {
      const {data} = this.props.shops
      const dataToDisplay = data === null ? [] : data.map(
        shop => shop.products
      ).reduce(
        (total, next) => total.concat(next), []
      )
      return (
        <div id="outer-container">
          <Menu
            width={ "200px" }
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            customBurgerIcon={<Button>Porównanie</Button>}>
            <Link style={{marginBottom: "15%"}} to="/comparison">
              Przejdź do porównywarki
            </Link>
            {
              dataToDisplay.filter(
                product => this.props.productsIds.includes(product.id)
              ).map(
                product =>
                  <div key="product.id">
                    <Link to={'/product-page-view/' + product.name}>
                      <Image
                        width="100"
                        src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'} responsive
                        thumbnail/>
                    </Link>
                    <br/>
                    <span>{product.name}</span>
                    <br/>
                    <Button  style={{
                      marginBottom: "15px",
                      padding: "1px 6px"
                    }}
                          onClick={event => {
                          this.props.toggleCompare(product.id)
                              event.preventDefault()
                          }}>
                      Usuń
                    </Button>
                  </div>
              )}
          </Menu>
          <main id="page-wrap">
            {this.props.children}
          </main>
        </div>
      )
    }
  }
)
