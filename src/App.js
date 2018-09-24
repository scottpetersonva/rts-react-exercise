import React from "react";
import './App.css';

import { Provider } from 'react-redux'

import store from './store'

import Titles from "./components/Titles/Titles";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";


class App extends React.Component {

  state = {
    headlines: []
  }

  getNews = async (e) => {

    e.preventDefault()
    const search = e.target.elements.search.value
    const apiCall = await fetch('http://hn.algolia.com/api/v1/search?query=' + search);
    const data = await apiCall.json()
    let results = data.hits

    const mapThrough = results
    .map(function (a) {
      return a.title
    });

    this.setState({
      headlines: mapThrough      
    })   
  }

  render() {
    
    return (
      <Provider store={store}>
        <div>
          <Titles />
          <Form getNews={this.getNews}/>
          <hr />
          <p>results</p>
          <hr />
          <Display
            headlines={this.state.headlines}
            error={this.state.error}
          />
        </div>
      </Provider>
    )
  }
}



export default App;