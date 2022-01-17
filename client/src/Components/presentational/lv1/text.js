import React, { Component } from 'react';
import { Input } from "reactstrap";

class inputText extends Component {
  /**
   * テキストボックスコンポーネント。
   * @param name 初期表示テキスト　   
   * @param type
   * @param placeholder
   * @param value
   * @param onChange
   *  
   */
  constructor(props) {
    super(props);

    // this.state = { name: props.name, id: props.id };
  }
  render() {
    return (
      // <input type="text" name="text1" placeholder={this.props.name} id={this.props.id} />
      <Input type={this.props.type}  name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} 
                                                            onChange={this.props.onChange} required />
    );
  }
}

export default inputText;