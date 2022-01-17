import React from 'react';
import ReactDOM from 'react-dom';

import Main from '../lv3/main_sample1';
import Header from '../lv3/header_sample1';
import Search1 from '../lv2/inputSearch_sample1';

// 各コンポーネントの配置
function Template1() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

//　レイアウトを表示
ReactDOM.render(
  <Template1 />,
  document.getElementById('root')
);

export default Template1;