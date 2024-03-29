import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markcomplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.onDelete.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5x 8x",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
