import React, { Component } from 'react';
import { Button } from "reactstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from 'react-router-dom';
import { browserHistory } from 'react-router';


class Button1 extends Component {
  /**
   * 標準ボタンコンポーネント。
   * @param name ボタン名
   * @param color ボタンカラー
   * @param color_background
   * @param size
   * @param command
   */
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)    
  }
  
  handleClick = () => {
    alert('Hello!');
    
  };
  render() {
    return (
        
      <Button type="submit" style={{width: this.props.size,backgroundColor:this.props.color_background ,color:this.props.color}} onClick={this.props.command}  >{this.props.name}</Button >

    );
  }
}
export default Button1;