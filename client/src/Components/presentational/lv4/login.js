import React from 'react';
import ReactDOM from 'react-dom';
import MainLogin from '../lv3/main_LoginTop';
import {Background_login, Box_centered} from '../../../styles';

// 各コンポーネントの配置
function Template1() {
  return (   
      <Background_login>  
        <MainLogin />
      </Background_login>   
  );
}

export default Template1;