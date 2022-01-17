import React, { Component } from 'react';
import { Button } from "reactstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

class Button1 extends Component {
  /**
   * Outlineボタンコンポーネント。
   * @param name ボタン名
   * @param color ボタンカラー
   * @param size
   */
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button outline style={{width: this.props.size}} color={this.props.color} size="sm">{this.props.name}</Button >
    );
  }
}
export default Button1;