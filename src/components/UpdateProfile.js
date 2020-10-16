import React, { useState } from 'react';
import '../App.css'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {

    const { currentUser, updateEmail, updatePassword } = useAuth();
    let [email, setEmail]  = useState(currentUser.email);
    let [password, setPassword] = useState('');
    let [cpassword, setCPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        if(password !== cpassword) {
            return setError('Passwords do not match');
        }
        
        setLoading(true)
        const promises = [];
        if(email !== currentUser.email) 
            promises.push(updateEmail(email))

        if(password) {
            promises.push(updatePassword(password))
        }

        Promise.all(promises).then(() => {
            setLoading(false)
            history.push('/')
        }).catch(() => {
            setError('Failed to Update Account')
            setLoading(false)
            }
        )
        
    }

    return (
        <div className="container">

            <h1> Update Profile </h1>

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
                        placeholder={currentUser.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" 
                    value={password}
                    placeholder="Leave it blank to keep the same"
                    onChange={(e) => setPassword(e.target.value)} />

                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    
                    <input type="password" className="form-control" name="cpassword"
                    value={cpassword}
                    placeholder="Leave it blank to keep the same"
                    onChange={(e) => setCPassword(e.target.value)}/>
                
                </div>
                <button type="submit" className="btn btn-primary"
                    disabled={loading}
                >Update Profile</button>
            </form>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link> 
            </div>
        </div>
    )
}


