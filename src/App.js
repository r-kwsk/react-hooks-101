import React, { useState } from 'react';

const App = props => {

  // useStateを使用することにより状態を持つことができる．
  // 従って，以下の文がないとjsx内で変数を持つことができない．
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () =>{
    setPrice(props.price)
    setName(props.name)
  }

  return (
    // 空タグは<React.Fragment>と同じ
    <>
      <p>現在の{name}は，{price}円です</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      {/* props.price自体は普遍．変化するのはuseStateで渡した変数のみ */}
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </>
  );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
