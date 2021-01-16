import React, { useContext } from 'react';

import { DELETE_EVENT_DONE, ADD_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';


const EventDone = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`id${id}のイベントを本当に削除しますか？`)
        if (result) {
            dispatch({ 
            type: DELETE_EVENT_DONE,
            id,//id: idの短縮系
            })

            dispatch({
                type: ADD_OPERATION_LOG,
                description: `${id}のイベントを削除しました`,
                operatedAt: timeCurrentIso8601()
            })
        }
    }

    //遷移ボタンが必要
    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type='button' className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}
export default EventDone
