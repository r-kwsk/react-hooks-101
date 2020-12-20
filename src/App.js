import React, { useState } from 'react';

const App = props => {

  const [state, setState] = useState(props)
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)

  const reset = () =>{
    // setPrice(props.price)
    // setName(props.name)
    setState(props)
  }

  return (
    // 空タグは<React.Fragment>と同じ
    <>
      <p>現在の{state.name}は，{state.price}円です</p>
      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
      {/* props.price自体は普遍．変化するのはuseStateで渡した変数のみ */}
      <button onClick={reset}>Reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
