import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ProductPageView from "./ProductPageView"
import CategoriesMain from './CategoriesMain'
import Home from './Home'
import ResultView from './ResultsView'
import SearchMain from './SearchMain'
import Footer from './Footer'
export default class App extends React.Component {



  render() {
    return (
      <Router>
        <div>
          <Home/>
          <SearchMain />
          <Route path="/result-view" component={ResultView}/>
          <Route exact path="/" component={CategoriesMain}/>
          <Route path="/product-page-view" component={ProductPageView}/>
          <Footer />
        </div>
      </Router>
    )
  }
}