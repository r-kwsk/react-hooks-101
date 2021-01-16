import React, { useContext } from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext'


const Events = () => {
    const { state } = useContext(AppContext)
    return(
        <>
            <h4>ToDo</h4>
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
            
        </>
    )
}

export default Events