import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


function ForgotPassword() {

    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMesssage]  = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await resetPassword(email)
            setMesssage('Check your inbox for further instructions')
        }
        catch {
            setError('Error while password reset')
        }
        setLoading(false);
    }


    return (
        <div className="container">

        <h1> Password Reset </h1>

        { error && 
        <div className="alert alert-danger" role="alert">
            { error }
        </div>
        }

        { message && 
        <div className="alert alert-success" role="alert">
            { message }
        </div>
        }

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
            </div>
           
            <button type="submit" className="btn btn-primary" disabled={loading}
            >Reset Password</button>
        </form>
        <div className="w-100 text-center mt-2">
            <Link to="/login">Back</Link> 
        </div>
    </div>
    )
}

export default ForgotPassword
