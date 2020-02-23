import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import pfp from '../../assets/imgs/girl.svg';

const Cards = ({ title, name, description, tech }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="project__item">
            {/* {avatar} */}
            <div>
                <img src={pfp} alt="profile-pic" className="project-pfp" />
                <h2>
                    {title}
                </h2>
                <h3>{name}</h3>
            </div>
            <p>
                {description}
            </p>
            <p className="tech-stack">{tech}</p>
            <Button onClick={handleShow}>
                Collaborate with me!
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{name}</Modal.Body>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Body className="tech-stack">{tech}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <a href={"mailto:" + `${email}`}> */}
                    <a href="mailto:lyang@redventures.com">
                        <Button onClick={handleClose}>
                            Contact me!
                    </Button>
                    </a>
                    {/* </a> */}
                </Modal.Footer>
            </Modal>
        </div >
    );
}


export default Cards;