import React, { useState } from 'react';
import '../../assets/css/styles.css';
import UserNavigation from '../UserNavigation';
import pfp from '../../assets/imgs/girl.svg'

const Account = () => {
    let [interest, setInterest] = useState([{ "skill": "React.js" }, { "skill": "Node.js" }, { "skill": "Full-Stack" }, { "skill": "MongoDB" }]);


    return (
        <>
            <UserNavigation />
            <div>
                <h1 className="account-heading">Account Details</h1>
                <hr />
                <div className="account-container">
                    <img src={pfp} alt="profile-pic" className="avatar-icon" />
                    <div className="info-container">
                        <h2>Name: Lucy Yang</h2>
                        <h2>Email: ly.yang005@gmail.com</h2>
                        <h2>Interests:</h2>
                        <ul>
                            {interest.map((item, index) => {
                                return (
                                    <li key={index}>{item.skill}</li>
                                )
                            }
                            )
                            }
                        </ul>

                    </div>
                </div>
                <div className="work-container">
                    <h2>Projects</h2>
                    <p>🛸~Has yet to start their journey here!~🚀</p>
                </div>
                <div className="connect-container">
                    <h2>Connections</h2>
                    <p>😁Make a positive impact on someone today and be their friend!😊</p>
                </div>

            </div>


        </>
    )
}

export default Account;