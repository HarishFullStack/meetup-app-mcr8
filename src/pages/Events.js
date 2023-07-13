import { useNavigate } from 'react-router-dom';
import {meetupData} from '../data/Meetup';

export function Events(){

    const navigate = useNavigate();

    return(
        <div>
            <h2>Meetup Events</h2>
            <div className='continents'>
                <div className='d-flex'>
                    {meetupData.meetups.map((x) => {
                        return(
                            <div key={x.id} className='container'>
                                <div className="card" style={{width: "18rem"}} onClick={() => navigate(`/details/${x.id}`)}>
                                    <img src={x.eventThumbnail} className="card-img-top" alt={x.title}/>
                                    <div className="card-body">
                                            <p className="card-text">{x.eventStartTime}</p>
                                            <h5 className="card-title">{x.title}</h5>
                                        </div>
                                </div>
                                <div className='event-type'><span className="badge text-bg-light">{x.eventType}</span></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
} 