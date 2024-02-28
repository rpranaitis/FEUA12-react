import React from "react";
import "./Button.css";

class ClassButton extends React.Component {
    render() {
        return <button>{this.props.text}</button>;
    }
}

export default ClassButton;
