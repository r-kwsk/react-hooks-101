import React from 'react';

import { DELETE_EVENT } from '../actions'


const Event = ({ dispatch, event }) => {
    const id = event.id
     const handleClickDeleteButton = () => {
        const result = window.confirm(`id${id}のイベントを本当に削除しますか？`)
        if (result) {
            dispatch({ 
            type: DELETE_EVENT,
            id,//id: idの短縮系
            })
        }
    }
    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type='button' className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}
export default Event
