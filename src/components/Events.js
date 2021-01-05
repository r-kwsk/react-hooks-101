import React, { useContext } from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext'


const Events = () => {
    const { state } = useContext(AppContext)
    return(
        <>
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
                { state.events.map((event) => (<Event key={event.id} event={event} />))}
        
                </tbody>
            </table>
            <a href="/events/logs" style={{textDecoration: 'underline', padding: '10px'}}>操作ログを確認する</a>
        </>
    )
}

export default Events