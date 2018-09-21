import React from "react";
import Titles from "./components/Titles/Titles";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";


// const App = () => <Search />;

// export default App;

class App extends React.Component {

  state = {
    title: [],
    // author: undefined,
    // date: undefined,
    error: undefined,
  }

  getNews = async (e) => {

    const {
      title
    } = this.state;

    e.preventDefault()
    const search = e.target.elements.search.value
    const apiCall = await fetch('http://hn.algolia.com/api/v1/search?query=' + search);
    const data = await apiCall.json()
    // console.log(data.hits[0].title)
    let results = data.hits

    const mapThrough = results.map(function (officer) {
      return officer.title
      
    });
    // console.log(a)
    // console.log(results)

    title.push({
      mapThrough
    });

    

    console.log(this.state)

    this.setState({
      title: mapThrough,
      // author: ,
      // date: ,
      error: "",
      
    })
    

    
  }
  render() {
    
    return (
    <div>
      <Titles />
      <Form getNews={this.getNews}/>
      <Display
        title={this.state.title}
        error={this.state.error}
      />
    </div>
    )
  }
}

export default App;