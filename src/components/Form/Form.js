import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getNews}>
                <input type="text" name="search" placeholder="Search"/>
                {/* <input type="text" name="search-author" placeholder="Search Author" /> */}
                <button>Search</button>
            </form>
        )
    }
}

export default Form