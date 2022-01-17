import React from 'react';
import ReactDOM from 'react-dom';

// import Title from '../lv1/title';
// import CheckBox from '../lv1/checkbox';
import Button1 from '../lv1/button_outline';

// Lv2：Buttonコンポーネント
// ボタン名の挿入：Lv1のButtonクラスの引数prop.nameに渡す
function Sample1() {
  return (
    <div>
      <Button1 name="キャンセル" />
    </div>
  );
}

export default Sample1;