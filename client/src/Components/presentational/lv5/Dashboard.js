import React, { useContext } from 'react';
import StoreContext from '../../Store/Context';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      Parabéns, você conseguiu
      <br />
      <button type="button" onClick={() => setToken(null)}>
        Sair
      </button>
    </div>
  );
};

export default PagesHome;
