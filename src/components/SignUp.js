import React, { useState } from 'react';
import '../App.css'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function SignUp() {

    const { signup } = useAuth();
    let [email, setEmail]  = useState('');
    let [password, setPassword] = useState('');
    let [cpassword, setCPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        if(password !== cpassword) {
            return setError('Passwords do not match');
        }
        
        try {
            setError('')
            setLoading(true)
            await signup(email, password);
            setLoading(false)
            history.push('/')
        }
        
        catch {
            setError('Failed to create the user.')
            setLoading(false)
        }

        
    }

    return (
        <div className="container">

            <h1> Sign Up </h1>

            { error && 
            <div className="alert alert-danger" role="alert">
                { error }
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
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}/>
                
                </div>
                <button type="submit" className="btn btn-primary"
                    disabled={loading}
                >Register</button>
            </form>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Login</Link> 
            </div>
        </div>
    )
}


