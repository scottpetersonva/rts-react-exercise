import React from "react";



// const myMap = 

class Display extends React.Component {
    

    render() {
        return (
            <div>
            <div>
                {this.props.headlines[0]}
            </div>
            <div>
                {this.props.headlines[1]}
            </div>
            <div>
                {this.props.headlines[3]}
            </div>
            <div>
                {this.props.headlines[4]}
            </div>
            <div>
                {this.props.headlines[5]}
            </div>
            </div>
        )
    }

    
}

export default Display