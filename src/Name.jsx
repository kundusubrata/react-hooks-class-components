import React from 'react'
import Prototype from "prop-types";

// const Name = () => {
//   return (
//     <div>Name</div>
//   )
// }


class Name extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<p>{this.props.name}</p>);
    }
}

Name.protoTypes = {
    // name: Prototype.string,
    name: Prototype.string.isRequired,
}
// Name.defaultProps = {
//     name: "default",
// }

export default Name