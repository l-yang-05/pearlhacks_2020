import React, { useState } from 'react';
import '../../assets/css/styles.css';
import UserNavigation from '../UserNavigation';
import pfp from '../../assets/imgs/girl.svg'

const Account = () => {
    let [interest, setInterest] = useState([]);

    setInterest = ["React.js", "Node.js", "Full-Stack", "MongoDB"];

    return (
        <>
            <UserNavigation />
            <div className="account-container">
                <img src={pfp} alt="profile-pic" className="avatar-icon" />
                <div className="info-container">
                    <h1>Account Details</h1>
                    <h2>Name: Lucy Yang</h2>
                    <h2>Email: ly.yang005@gmail.com</h2>
                    <h2>Interests:</h2>
                    <ul>
                        {interest.map((item, index) => {
                            return (
                                <li>{item}</li>
                            )
                        }
                        )
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Account;