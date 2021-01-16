import React, { useContext } from 'react';

import EventDone from './EventDone';
import AppContext from '../contexts/AppContext'


const EventsInProgress = () => {
    const { state } = useContext(AppContext)
    return(
        <>
            <h4>Done</h4>
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
                { state.eventsDone.map((event) => (<EventDone key={event.id} event={event} />))}
                </tbody>
            </table>
            <a href="/events" style={{textDecoration: 'underline', padding: '10px'}}>一覧に戻る</a>
        </>
    )
}

export default EventsInProgress