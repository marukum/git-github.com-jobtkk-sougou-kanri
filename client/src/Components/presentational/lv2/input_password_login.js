import React from 'react';
import Label from '../lv1/label';
import Text from '../lv1/text';

  /**
   * Lv2：パスワード入力コンポーネント。
   * @property name 表示テキスト　
   * @property id input要素のid　
   */

function InputPassoword() {
  return (
    <div className="input1">
    <Label name="パスワード"  />
    <Text placeholder="パスワードを入力" type="password" />
  </div>

  );
}

export default InputPassoword;