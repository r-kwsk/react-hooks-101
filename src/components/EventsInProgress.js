import React, { useContext } from 'react';

import EventInProgress from './EventInProgress';
import AppContext from '../contexts/AppContext'


const EventsInProgress = () => {
    const { state } = useContext(AppContext)
    return(
        <>
            <h4>In progress</h4>
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
                { state.eventsInProgress.map((event) => (<EventInProgress key={event.id} event={event} />))}
        
                </tbody>
            </table>
            <a href="/events/logs" style={{textDecoration: 'underline', padding: '10px'}}>操作ログを確認する</a>
        </>
    )
}

export default EventsInProgress