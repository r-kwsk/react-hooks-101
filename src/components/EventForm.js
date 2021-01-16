import React,{ useState, useContext } from 'react';

import { CREATE_EVENT, DELETE_ALL_EVENTS, ADD_OPERATION_LOG} from '../actions'
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';


const EventForm = () => {
    const { dispatch } = useContext(AppContext)

    //以下のように新規のstateを作らない．app.jsからpropとして受け取る
    // const [state, dispatch] = useReducer(reducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [createCount, setCreateCount] = useState(0)

    const addEvent = (e) => {
        e.preventDefault();//画面のリロードを行わない
        setCreateCount(createCount + 1)
        console.log(createCount)
        dispatch({
          //action
          type: CREATE_EVENT,
          title,
          body,
          createCount
        }) 

        dispatch({
          type: ADD_OPERATION_LOG,
          description: 'イベントを作成しました',
          operatedAt: timeCurrentIso8601()
        })

        // 以下のコードはいらない？もしかして初期化してる？
        // setTitle('')
        // setBody('')
    }

  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm(`全てのイベントを本当に削除しますか？`)
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS })

      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  //どちらか空文字の場合はtrue
  const unCreatable = title === '' || body === ''
    return(
        <>
        <h4>r-kwskのToDoList</h4>
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
            {/* <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button> */}
        </form>
      </>
    )
}

export default EventForm
