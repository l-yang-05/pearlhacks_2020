import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const Cards = ({ title, name, avatar, description, tech }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="project__item">
            {avatar}
            <h2>
                {title}
            </h2>
            <h3>{name}</h3>
            <p>
                {description}
            </p>
            <Button onClick={handleShow}>
                Collaborate with me!
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{name}</Modal.Body>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Body>{tech}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <a href={"mailto:" + `${email}`}> */}
                    <a href="mailto:lyang@redventures.com">
                        <Button variant="primary" onClick={handleClose}>
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