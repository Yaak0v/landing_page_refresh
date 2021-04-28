import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from "react-bootstrap"
import { useAuth } from '../../../contexts/AuthCon'
import { Link, useHistory } from "react-router-dom"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [success, setSuccess] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError('')
            setSuccess('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            setSuccess(`Welcome to Euclid`)
            setTimeout(() => {
                history.push('/')
            }, 1500)
            // for some reason below not working - go through with Cam
            // setSuccess(`Welcome ${username}`)
            // console.log(username)
            // history.push("/")
        } catch { 
            setError("You Shall Not Pass!")
        }
        setLoading(false) 
    }

    return (
        <Container 
            className="d-flex align-items-center flex-column justify-content-center"
            style= {{ minHeight: "100vh"}}
        >
            {/* <div className="max-400 mb-3">
                <img src={Gandalf} alt="" className="img-fluid"/>
            </div> */}
            <div className="w-100" style={{maxWidth: '400px'}}>
            <div>
            <Card>
                <Card.Body className="body">
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success" className="text-center">{success}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100 mt-4">Log In</Button>
                        <div className="w-100 text-center mt-3"> 
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            {/* <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div> */}
            </div>
            </div> 
        </Container>
    )
}
