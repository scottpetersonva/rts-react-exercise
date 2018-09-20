import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Titles extends React.Component {

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <h1>Hacker News</h1>
          <p>Search for the latest news!</p>
      </div>
    );
  }
}

export default Titles;
