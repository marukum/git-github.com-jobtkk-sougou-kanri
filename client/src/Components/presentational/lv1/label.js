import React, { Component } from 'react';

class Label1 extends Component {
  /**
   * ラベルコンポーネント。
   * @param name 表示名　
   * @param id input要素のid　
   * 
   */
  constructor(props) {
    super(props);
    // this.state = { name: props.name, id: props.id };
  }
  render() {
    return (
      <label for={this.props.id}>{this.props.name} </label>
    );
  }
}

export default Label1;