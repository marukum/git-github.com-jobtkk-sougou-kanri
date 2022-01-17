import React from 'react';
import ButtonControlUser from "../lv1/button_default";
import ButtonCancel from "../lv1/button_outline";

function createRegisterButton() { 
  return (
    <div>
      &nbsp;&nbsp;
      <ButtonControlUser
        size="8rem"
        name="ユーザー登録"
        color_background="#8F9DFF"
        color="white"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ButtonControlUser
        size="8rem"
        name="一覧"
        color_background="#8F9DFF"
        color="white"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ButtonControlUser
        size="8rem"
        name="CSV出力"
        color_background="#8F9DFF"
        color="white"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ButtonControlUser
        size="8rem"
        name="同期"
        color_background="#8F9DFF"
        color="white"
      />
      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonCancel size="8rem" name="キャンセル" color="dark" />
      </div>
    </div>
  );
}



export default createRegisterButton;
