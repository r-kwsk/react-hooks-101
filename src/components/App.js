import React, { useReducer, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event'
import reducer from '../reducers/';//indexは省略可

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault();//画面のリロードを行わない
    dispatch({
      //action
      type: 'CREATE_EVENT',
      title,
      body
    }) 
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm(`全てのイベントを本当に削除しますか？`)
    if (result) {
      dispatch({ type: 'DELETE_ALL_EVENTS' });
    }
  }

  //どちらかがから文字の場合はtrue
  const unCreatable = title === '' || body === ''

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>

      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* event={event}などは子コンポーネントにpropsを渡している */}
          { state.map((event) => (<Event key={event.id} event={event} dispatch={dispatch} />))}
  
        </tbody>
      </table>
    </div>
  );
}

export default App;
