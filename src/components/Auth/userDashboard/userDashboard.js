import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../../contexts/AuthCon"
import { Link, useHistory } from "react-router-dom"
import Navbar from '../navold/navbarold'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

  async function handleLogout() {
    setError("");

    try {
      await logout()
      history.push('/login')
    } catch {
      setError("Failed to log out")
    }
  }

return (
    <>
    <Navbar />
    <div className="text-center mt-4 d-flex align-items-center justify-content-center flex-column">
      <Card className="w-100" style={{maxWidth: '400px'}}>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
    </>
  )
}