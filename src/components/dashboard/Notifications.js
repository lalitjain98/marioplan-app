import React from 'react';
import moment from 'moment';

const Notifications = (props)=> {
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">
                        Notifications
                    </div>
                    <ul className="notifications">    
                        {
                            props.notifications && props.notifications.map(item=>{
                                return (
                                    <li key={item.id}>
                                        <span className="pink-text">{item.user} </span>
                                        <span>{item.content}</span>
                                        <div className="grey-text note-date">
                                            {
                                               item.time && moment(item.time.seconds*1000).calendar()
                                            }
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;