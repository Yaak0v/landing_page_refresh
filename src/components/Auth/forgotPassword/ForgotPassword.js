import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from "react-bootstrap"
import { useAuth } from '../../../contexts/AuthCon'
import { Link } from "react-router-dom"
import Navbar from "../../Archive/navold/navbarold"

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch { 
            setError("Failed to reset password")
        }
        setLoading(false) 
    }

    return (
        <>
        <Navbar/>
        <Container 
            className="d-flex align-items-center justify-content-center"
            style= {{ minHeight: "100vh"}}
        >
            <div className="w-100" style={{maxWidth: '400px'}}>
            <div>
            <Card>
                <Card.Body className="body">
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100 mt-4">Reset Password</Button>
                        <div className="w-100 text-center mt-3"> 
                            <Link to="/login">Login</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            </div>
            </div> 
        </Container>
        </>
    )
}
