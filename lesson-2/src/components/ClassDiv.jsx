import React from "react";
import ClassButton from "./ClassButton";

class ClassDiv extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.header}</h3>
                <p>{this.props.text}</p>
                <ClassButton text="Yes" />
            </div>
        );
    }
}

export default ClassDiv;
