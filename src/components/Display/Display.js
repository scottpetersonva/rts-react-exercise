import React from "react";


class Display extends React.Component {
    

    render() {
        return (
            <div>
                <ul>
                    <li>
                    {this.props.title}
                    </li>
                </ul>
            </div>
        )
    }

    
}

export default Display

// import React from "react";

// // Whenever we try to render an array containing JSX, React knows to render each JSX element separately
// const List = props => (
//   <ul>
//     {props.groceries.map(item => (
//       <li key={item.id}>
//         {item.name}
//       </li>
//     ))}
//   </ul>
// );

// export default List;