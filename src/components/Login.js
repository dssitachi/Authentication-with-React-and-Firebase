import '../App.css'
import { useAuth } from '../contexts/AuthContext'
import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    
    const { login } = useAuth();
    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();
        
        
        try {
            setError('')
            setLoading(true)
            await login(email, password);
            setLoading(false)
            history.push('/');
            
        }
        
        catch {
            setError('Failed to log in.')
            setLoading(false)
        }

        
    }

    return (
        <div className="container">

            <h1> Log In </h1>

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
                
                <button type="submit" className="btn btn-primary"
                    disabled={loading}
                >Login</button>
            </form>
            <div className="w-100 text-center mt-3">
                 <Link to="/forgot-password">Forgot Password ?</Link> 
            </div>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Register</Link> 
            </div>
        </div>
    )
}

export default Login
