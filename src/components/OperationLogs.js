import React, { useContext } from 'react'

import { DELETE_ALL_OPERATION_LOGS } from '../actions';
import OperationLog from './OperationLog';
import AppContext from '../contexts/AppContext'

const OperationLogs = () => {
    //styleの定義
    // const under = {
    //     textDecoration: 'underline'
    // }
    //js
    const { state, dispatch } = useContext(AppContext)
    const deleteAllOperationLogs = e => {
        e.preventDefault()
        const result = window.confirm(`全ての操作ログを本当に削除しますか？`)

        if (result) {
            dispatch({
                type: DELETE_ALL_OPERATION_LOGS
            })
        }
    }
    return (
        <>
            <h4>操作ログ一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>内容</th>
                        <th>日時</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        //ユニークなキーはindexよりログのidの方が良いかも
                        state.operationLogs.map((operationLog, index) => {
                            return <OperationLog key={index} operationLog={operationLog}/>
                        })
                    }
                </tbody>
            </table>
            <button className="btn btn-danger" onClick={deleteAllOperationLogs}　disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
            <a href="/events" style={{textDecoration: 'underline', padding: '10px'}}>一覧に戻る</a>
            
        </>
    )
}

export default OperationLogs