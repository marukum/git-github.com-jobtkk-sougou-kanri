import React, { Component } from 'react';
import { Form } from "reactstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

class Search1 extends Component {
  /**
   * テキストボックスコンポーネント。
   * @param name name属性　
   * @param id input要素のid　
   */
  constructor(props) {
    super(props);
    
    // this.state = { name: props.name, id: props.id };
  }
  render() {
    return (
      // <input type="search" name={this.props.name} placeholder={this.props.name} id={this.props.id} />
      <Form type='search' outline color={this.props.color} size="sm">あいうえお</Form >
    );
  }
}

export default Text1;