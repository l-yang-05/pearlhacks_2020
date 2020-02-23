import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../assets/css/styles.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="signUp">
                <Form>
                    <h1>Sign Up</h1>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to="/survey">
                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                    </Link>

                </Form>
            </div>
        </>
    )
}

export default Login;