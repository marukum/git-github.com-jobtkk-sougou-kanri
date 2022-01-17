import React from 'react';
import ReactDOM from 'react-dom';

import Label1 from '../lv1/label';
import Text1 from '../lv1/text';

  /**
   * Lv2：入力テキストコンポーネント。
   * @property name 表示テキスト　
   * @property id input要素のid　
   */
const id = "input_text1"
function InputText() {
  return (
    // <div style={{textAlign: 'center'}}>
    <div className="input1">
      <Label1 name="ログインID" />
      <Text1 placeholder="IDを入力" type="mail" />
    </div>

  );
}

export default InputText;