import React, { Component } from 'react';

class Title1 extends Component {// Title コンポーネントの定義
  /**
   * タイトルンポーネント。
   * @param name タイトル表示
   */
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <h1　> {this.props.name}</h1>
    );
  }
}

export default Title1;