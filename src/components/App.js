import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CategoriesMain from './CategoriesMain'
import SearchMain from './SearchMain'
export default class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <SearchMain />
          <CategoriesMain/>
        </div>
      </Router>
    )
  }
}