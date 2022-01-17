import React from 'react';
import ButtonLogin from '../lv1/button_default';
import ButtonCancel from '../lv1/button_outline';

  /**
   * Lv2：ログイン、キャンセルボタンコンポーネント。
   * @property name 表示名　
   * @property color ボタンカラー　
   */
function Sample1() {
  return (
    <div className="example2">
      <br></br>
      {/* <table>
        <tr>
          <td> */}
         
            <ButtonLogin size="5rem" name="ログイン" color_background ="#8F9DFF"  color="white"/>
            {/* </td>
          <td> */}
            <ButtonCancel size="5rem" name="キャンセル" color="dark"/>
          {/* </td>
        </tr>
      </table> */}
    </div>
  );
}

export default Sample1;