
import React, { useState } from "react";
import './Login.css';
import black from './black.jpg';
import { Link, useHistory } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("https://fitness-bac-2.onrender.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.role === 'trainer') {
                    history.push(`/trainer-dashboard?trainerId=${data.userId}`);
                } else {
                    history.push(`/trainee-dashboard?traineeId=${data.userId}`);
                }
            } else {
                const data = await response.json();
                setError(data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            
                
            <div className="new">
                <div className="content">
                    <h1 className="welcome">Your journey to fitness begins with a single step.<br/> Take it now and transform your life</h1>
                    <div className="login">
                        <form onSubmit={handleLogin}>
                            <h2>LOGIN</h2>
                            <label htmlFor="email"><h3>Email: </h3></label>
                            <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="password"><h3>Password: </h3></label>
                            <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <h3>Not a member yet ? <Link to="/Signup"style={{ color: 'black' }}>Signup</Link></h3>
                            <button type="submit">Login</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
