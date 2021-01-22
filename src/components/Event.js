import React, { useContext } from 'react';

import { DELETE_EVENT, START_EVENT, ADD_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';


const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id
    const title = event.title
    const body = event.body
    const handleClickDeleteButton = () => {
        const result = window.confirm(`id${id}のイベントを本当に削除しますか？`)
        if (result) {
            dispatch({ 
            type: DELETE_EVENT,
            id,//id: idの短縮系
            })

            dispatch({
                type: ADD_OPERATION_LOG,
                description: `${id}のイベントを削除しました`,
                operatedAt: timeCurrentIso8601()
            })
        }
    }
    const handleClickStartButton = () => {
        const result = window.confirm(`id${id}のイベントを本当に開始しますか？`)
        if (result) {
            // setTitle(title)
            // setBody(body)
            dispatch({ 
            type: START_EVENT,
            id,//id: idの短縮系
            title, 
            body
            })

            dispatch({ 
            type: DELETE_EVENT,
            id,//id: idの短縮系
            })

            dispatch({
                type: ADD_OPERATION_LOG,
                description: `${id}のイベントを開始しました`,
                operatedAt: timeCurrentIso8601()
            })
        }
    }

    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type='button' className='btn btn-primary' onClick={handleClickStartButton}>開始</button></td>
            {/* <td><button type='button' className='btn btn-primary' onClick={onClickMethod(event.title, event.body)}>開始</button></td> */}
            <td><button type='button' className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
        
    )
}
export default Event
