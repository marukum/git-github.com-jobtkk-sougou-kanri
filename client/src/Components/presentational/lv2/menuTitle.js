import React from 'react';
import ReactDOM from 'react-dom';

import Title1 from '../lv1/title';

// Lv2：タイトルコンポーネント
// タイトルテキストの挿入：Lv1のButtonクラスの引数prop.nameに渡す
function Sample1() {
  return (
    <div>
      <Title1 name="管理者メニュー" />
    </div>
  );
}

//　レイアウトを表示
ReactDOM.render(
  <Sample1 />,
  document.getElementById('root')
);
export default Sample1;