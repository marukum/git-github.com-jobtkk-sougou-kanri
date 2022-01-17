import React from 'react';
import ReactDOM from 'react-dom';

import Label1 from '../lv1/label';
import Text1 from '../lv1/text';
import Button1 from '../lv1/button_default';

  /**
   * Lv2：検索コンポーネント。
   * @property name 表示テキスト　
   * @property id input要素のid　
   */
const id = "input_search1"
function Sample1() {
  return (
    <div>
      <Label1 name="Search the site:" id={id} />
      <Text1 name="検索" id={id} />
      <Button1 name="Search" />
    </div>

  );
}

export default Sample1;