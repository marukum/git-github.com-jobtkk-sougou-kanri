import React from 'react';
import ReactDOM from 'react-dom';

import ButtonSample1 from '../lv2/button_sample1';
import Label1 from '../lv2/inputText_sample1';
import Search1 from '../lv2/inputSearch_sample1';

// 各コンポーネントの配置
function MainSample1() {
  return (
    <div>
      <div>
        <Label1 />
      </div>
      <div>
        <ButtonSample1 />
      </div>
      <div>
        <Search1 />
      </div>
    </div>
  );
}
ReactDOM.render(
    <React.StrictMode>
      <MainSample1 />
    </React.StrictMode>,
    document.getElementById('root')
  );

export default MainSample1;