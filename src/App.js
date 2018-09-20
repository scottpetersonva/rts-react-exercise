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
    e.preventDefault()
    const search = e.target.elements.search.value
    const apiCall = await fetch('http://hn.algolia.com/api/v1/search?query=' + search);
    const data = await apiCall.json()
    console.log(data.hits[0].title)
    // const list = data.hits.map((pic))
    

    this.setState({
      title: data.hits[0].title,
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