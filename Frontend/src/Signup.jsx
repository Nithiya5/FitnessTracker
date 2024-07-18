

import React, { useState } from "react";
import './Signup.css';
import { Link, useHistory } from "react-router-dom";

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("trainee"); // Default role is trainee
    const [error, setError] = useState("");
    const history = useHistory();

    const handleSignup = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://fitness-bac-2.onrender.com/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password, role })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Response Data:", data); 
                const userId = data.userId;
                if (!userId) {
                    throw new Error("User ID not returned from backend");
                }
                history.push('/Login')
                // history.push(role === "trainee" ? `/trainee-dashboard?traineeId=${userId}` : `/trainer-dashboard?trainerId=${userId}`);
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
        <div className="big">
            <div className="us">
                <h2>
                    <p>Welcome to our fitness community!</p>
                </h2>
                <p className="login">Already a member? <Link to="/Login">LOGIN</Link></p>
            </div>
            <div className="signup">
                <form onSubmit={handleSignup}>
                    <h2 className="title">SIGNUP</h2>
                    <label htmlFor="name"><h3>Username: </h3></label>
                    <input type="text" placeholder="Enter Username" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="email"><h3>Email: </h3></label>
                    <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password"><h3>Password: </h3></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div>
                        <label htmlFor="role"><h3>Role: </h3></label>
                        <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="trainee">Trainee</option>
                            <option value="trainer">Trainer</option>
                        </select>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
