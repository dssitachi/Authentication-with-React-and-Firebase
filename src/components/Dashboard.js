import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import '../App.css'
import { useAuth } from '../contexts/AuthContext'

function Dashboard() {
    const { currentUser, logout } = useAuth();
    const [error, setError]  = useState('');
    const history = useHistory();
    async function handleLogout() {
        
        try {
            await logout();
            history.push('/login')
        }
        catch {
            setError('Failed to log out');
        }
    }

    return (
        <div className="dashboard-container">
            { error && 
            <div className="alert alert-danger" role="alert">
                { error }
            </div>
            }
            <div className="box">
                <h1>Profile</h1>
                    <strong> Email :</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary cus">
                        Update Profile
                    </Link>
            </div>
            <button onClick={handleLogout} className="logoutbtn" 
                >Logout</button>
        </div>
    )
}

export default Dashboard
