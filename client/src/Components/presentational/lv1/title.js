import React, { Component } from 'react';

class Title1 extends Component {
  /**
   * タイトルンポーネント。
   * @param name タイトル表示
   */
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1  class="title_kanri_menu"> {this.props.name}</h1>
    );
  }
}

export default Title1;