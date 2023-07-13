import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import {meetupData} from '../data/Meetup';
import { Modal } from "react-bootstrap";

export function EventDetails(){

    const navigate = useNavigate();

    const {eventId} = useParams();
    const [event, setEvent] = useState();
    const [showModal, setShowModal] = useState(false);

    const getEventDetail = () => {
        console.log(eventId);
        setEvent(meetupData.meetups.find((x) => x.id === eventId));
    }

    useEffect(() => {
        getEventDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleRSVP = (id) => {
        setEvent({...event, isRSVPed: event.id === id});
    }

    return(
        event &&    <div>
            <div className="d-flex justify-content-center"><i className="fa fa-arrow-left back-button" aria-hidden="true"  onClick={() => navigate("/")}></i><h2>{event.title}</h2></div>
            <div className="d-flex">
            <div className="thumbnail w-50 justify-content-start">
                <img src = {event.eventThumbnail} alt={event.title}></img>
                <h4>Details</h4>
            <p>{event.eventDescription}</p>
            <h4>Additional Information</h4>
            <b>Dress code: </b><span>{event.additionalInformation.dressCode}</span>
            <b>Age Restrictions: </b><span>{event.additionalInformation.ageRestrictions}</span>
            <h4>Event Tags</h4>
            {
                event.eventTags.map((y) => {
                    return(
                        <span class="badge text-bg-danger">{y}</span>
                    )
                })
            }
            </div>
            <div className="event-details w-50">
            

            <div className="card" style={{width: "36rem"}}>
                <div className="card-body">
                        <p className="card-text">{event.eventStartTime} to {event.eventEndTime}</p>
                        <p className="card-title">{event.location} {event.address}</p>
                        <p className="card-title">Rs. {event.price}</p>
                    </div>
            </div>

            <h4>Speakers: ({event.speakers.length})</h4>

            <div className='d-flex justify-content-center'>

                {event.speakers.map((z) => {
                    return (
                        <div className="card" style={{width: "15rem"}}>
                            <div className="card-body">
                                <img src={z.image} className="card-img-top profile" alt={z.name}/>
                                    <p><b className="card-title">{z.name}</b></p>
                                    <p className="card-title">{z.designation}</p>
                                </div>
                        </div>
                    )
                })}
            </div>


            <button className="btn btn-danger" onClick={() => setShowModal(true)}>{event.isRSVPed ? 'Already RSVPed' : 'RSVP'}</button>            
            </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}  size="md">
                <Modal.Header>
                    <Modal.Title>
                        Complete Your RSVP
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>*Fill in your personal details</div>
                        <label>Name:</label>
                    <input type="text col-md-6" className="form-control"/>
                    <label>Email:</label>
                    <input type="text col-md-6" className="form-control"/>
                    
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row">*You have to make payment at the venue</div>
                    <div className="row"><button type="button" className="btn btn-danger" onClick={() => [handleRSVP(event.id), setShowModal(false)]}>RSVP</button></div>
                </Modal.Footer>
        </Modal>
        </div>
    )
} 